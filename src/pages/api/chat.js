export const prerender = false;

const DAILY_LIMIT = Number(import.meta.env.DAILY_LIMIT || 5);
const memory = new Map();

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' }
  });
}

function clientKey(request) {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const ip = forwardedFor || request.headers.get('cf-connecting-ip') || 'anonymous';
  const day = new Date().toISOString().slice(0, 10);
  return `${ip}:${day}`;
}

async function callHolmsRag(question) {
  const endpoint = import.meta.env.DATABRICKS_RAG_ENDPOINT;
  const token = import.meta.env.DATABRICKS_TOKEN;

  if (!endpoint || !token) {
    return `Elementary. In production, this will query your Databricks HolmsRAG endpoint for: “${question}”`;
  }

  const response = `🔍 Holmes says: I deduce you asked: "${question}"`;
  // TODO: Implement actual call to HolmsRAG when endpoint and token are available. For now, we return a mock response.
  // const response = await fetch(endpoint, {
  //   method: 'POST',
  //   headers: {
  //     authorization: `Bearer ${token}`,
  //     'content-type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     messages: [{ role: 'user', content: question }]
  //   })
  // });

  if (!response.ok) {
    throw new Error(`Databricks request failed: ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || data.answer || 'No answer returned by HolmsRAG.';
}

export async function POST({ request }) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  const question = String(payload.question || '').trim();
  if (!question) return json({ error: 'Missing question' }, 400);

  const key = clientKey(request);
  const used = memory.get(key) || 0;

  if (used >= DAILY_LIMIT) {
    return json({ limitReached: true, message: 'Contact Carina to get more tokens' }, 429);
  }

  try {
    const answer = await callHolmsRag(question);
    memory.set(key, used + 1);
    return json({ answer, used: used + 1, remaining: DAILY_LIMIT - used - 1 });
  } catch (error) {
    return json({ error: 'HolmsRAG service unavailable' }, 502);
  }
}
