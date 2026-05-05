import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

export async function getSortedDiaryEntries(): Promise<CollectionEntry<"diary">[]> {
    const entries = await getCollection("diary", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });

    return entries.sort((a, b) => {
        const dateA = new Date(a.data.updated || a.data.published).getTime();
        const dateB = new Date(b.data.updated || b.data.published).getTime();
        return dateB - dateA;
    });
}
