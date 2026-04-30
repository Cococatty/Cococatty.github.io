---
title: 🧠 Ink & Insights (HolmesRAG System)
updated: 2026-04-29
published: 2026-04-29
pinned: true
description: A RAG chatbot built with Sherlock Holmes stories
cover: "/assets/article_images/sherlock_holmes_avatar.jpg"
coverInContent: false
tags: [AI, AWS, AI_SA, hand-on]
category: "AI Solution Architect"
draft: false
---


# 1. Architecture Diagram

```mermaid
flowchart TD
    A[Sherlock Holmes novels<br/>TXT / EPUB / PDF] --> B[S3 Raw Data Bucket]
    B --> C[Ingestion Lambda / ECS Task]
    C --> D[Text Cleaning + Chunking]
    D --> E[Embedding Model<br/>Amazon Bedrock Titan / Cohere]
    E --> F[Vector Store<br/>OpenSearch / Aurora pgvector]
    
    U[User] --> G[Web App<br/>React / Next.js]
    G --> H[API Gateway]
    H --> I[Chat Lambda / FastAPI on ECS]
    I --> J[Retrieve Relevant Chunks]
    J --> F
    J --> K[Prompt Builder]
    K --> L[LLM<br/>Claude / Amazon Nova / Llama via Bedrock]
    L --> M[Answer with citations]
    M --> G

    I --> N[CloudWatch Logs]
    B --> O[Optional: Metadata DB<br/>DynamoDB]
```


# 2. Problem Statement

Build an AI chatbot that allows users to "talk to" the Sherlock Holmes canon.

Instead of manually searching long novels, users can ask natural-language questions such as:

> “What does Holmes think about observation?”

> “Summarise Irene Adler’s role.”

> “Which cases involve poison?”

> “Answer in Holmes’ tone, but cite the story.”

The system solves:

**Knowledge access:** Converts long literary text into searchable semantic knowledge.

**Conversational UX:** Lets users explore literature through dialogue.

**Grounded generation:** Uses RAG so answers are based on retrieved book passages, reducing hallucination.

**Portfolio value:** Demonstrates LLM integration, vector search, AWS architecture, cost trade-offs, and AI product thinking.

# 3. Architecture Decisions

To Research


# 4. Trade-offs

## Cost vs Performance

To Research

## Latency vs Complexity

To Research

# Latest MVP Scope

1. Ingest public-domain Sherlock Holmes text into S3.
2. Clean and chunk text by story/chapter.
3. Generate embeddings using Bedrock.
4. Store vectors in PostgreSQL pgvector.
5. Build a Lambda API:
6. Build a simple web chatbot.
7. Add evaluation questions to test answer quality.
