import { type CollectionEntry, getCollection } from "astro:content";

import { CATEGORY_SEPARATOR, type CategoryPath, getCategoryPathParts } from "@utils/category";
import { parseTags, type Tag } from "@utils/tag";
import { getCategoryUrl } from "@utils/url";
import { i18n } from "@i18n/translation";
import I18nKey from "@i18n/i18nKey";


// // Retrieve posts and sort them by publication date
async function getRawSortedPosts() {
    const allBlogPosts = await getCollection("posts", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });

    const sorted = allBlogPosts.sort((a, b) => {
        // 首先按置顶状态排序，置顶文章在前
        if (a.data.pinned && !b.data.pinned) return -1;
        if (!a.data.pinned && b.data.pinned) return 1;

        // 如果置顶状态相同，则按发布日期排序
        const dateA = new Date(a.data.published);
        const dateB = new Date(b.data.published);
        return dateA > dateB ? -1 : 1;
    });
    return sorted;
}

export async function getSortedPosts() {
    const sorted = await getRawSortedPosts();

    for (let i = 1; i < sorted.length; i++) {
        sorted[i].data.nextSlug = sorted[i - 1].id;
        sorted[i].data.nextTitle = sorted[i - 1].data.title;
    }
    for (let i = 0; i < sorted.length - 1; i++) {
        sorted[i].data.prevSlug = sorted[i + 1].id;
        sorted[i].data.prevTitle = sorted[i + 1].data.title;
    }

    return sorted;
}
export type PostForList = {
    id: string;
    data: CollectionEntry<"posts">["data"];
};
export async function getSortedPostsList(): Promise<PostForList[]> {
    const sortedFullPosts = await getRawSortedPosts();

    // delete post.body
    const sortedPostsList = sortedFullPosts.map((post) => ({
        id: post.id,
        data: post.data,
    }));

    return sortedPostsList;
}

export type ArchiveItem = {
    id: string;
    data: {
        title: string;
        tags: string[];
        category?: string | string[] | null;
        published: Date | string;
        routeName?: string;
    };
    url: string;
    type: 'post' | 'diary';
};

export async function getSortedArchive(): Promise<ArchiveItem[]> {
    const allBlogPosts = await getCollection("posts", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });

    const allDiaryEntries = await getCollection("diary", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });

    const posts = allBlogPosts.map((post) => ({
        id: post.id,
        data: post.data,
        url: `/posts/${post.id}/`,
        type: 'post' as const,
    }));

    const diary = allDiaryEntries.map((entry) => ({
        id: entry.id,
        data: {
            title: entry.data.title,
            tags: entry.data.tags,
            category: entry.data.category,
            published: entry.data.published,
        },
        url: `/diary/${entry.id}/`,
        type: 'diary' as const,
    }));

    const combined = [...posts, ...diary];
    return combined.sort((a, b) => {
        const dateA = new Date(a.data.published).getTime();
        const dateB = new Date(b.data.published).getTime();
        return dateB - dateA;
    });
}
export async function getTagList(): Promise<Tag[]> {
    const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });
    const allDiaryEntries = await getCollection<"diary">("diary", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });

    const countMap: { [key: string]: number } = {};
    const collectTags = (items: Array<{ data: { tags: string[] } }>) => {
        items.forEach((item) => {
            const tags = parseTags(item.data.tags);
            tags.forEach((tag: string) => {
                if (!countMap[tag]) countMap[tag] = 0;
                countMap[tag]++;
            });
        });
    };

    collectTags(allBlogPosts);
    collectTags(allDiaryEntries);

    // sort tags
    const keys: string[] = Object.keys(countMap).sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    return keys.map((key) => ({ name: key, count: countMap[key] }));
}

export type Category = {
    name: string;
    count: number;
    url: string;
};

export type CategoryTreeItem = {
    name: string;
    count: number;
    url: string;
    path: CategoryPath;
    children: CategoryTreeItem[];
};

export async function getCategoryList(): Promise<Category[]> {
    const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });
    const allDiaryEntries = await getCollection<"diary">("diary", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });
    const count: { [key: string]: number } = {};
    
    const items = [
        ...allBlogPosts,
        ...allDiaryEntries,
    ];
    
    items.forEach((item: { data: { category: string | string[] | null } }) => {
        const categoryParts = getCategoryPathParts(item.data.category);
        if (!categoryParts) {
            const ucKey = i18n(I18nKey.uncategorized);
            count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
            return;
        }

        const categoryName = categoryParts.join(CATEGORY_SEPARATOR);
        count[categoryName] = count[categoryName] ? count[categoryName] + 1 : 1;
    });

    const lst = Object.keys(count).sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    const ret: Category[] = [];
    for (const c of lst) {
        ret.push({
            name: c,
            count: count[c],
            url: getCategoryUrl(c),
        });
    }
    return ret;
}

export async function getCategoryTree(): Promise<CategoryTreeItem[]> {
    const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });
    const allDiaryEntries = await getCollection<"diary">("diary", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });

    type CategoryTreeInternal = {
        name: string;
        count: number;
        path: CategoryPath;
        children: Map<string, CategoryTreeInternal>;
    };

    const root = new Map<string, CategoryTreeInternal>();
    const uncategorizedKey = i18n(I18nKey.uncategorized);

    const items = [...allBlogPosts, ...allDiaryEntries];
    for (const post of items) {
        const rawParts = getCategoryPathParts(post.data.category);
        const categoryParts = rawParts && rawParts.length > 0 ? rawParts : [uncategorizedKey];
        let currentLevel = root;
        let currentPath: string[] = [];

        for (const rawName of categoryParts) {
            const name = rawName.trim();
            if (!name) continue;
            currentPath = [...currentPath, name];
            let node = currentLevel.get(name);
            if (!node) {
                node = {
                    name,
                    count: 0,
                    path: currentPath,
                    children: new Map<string, CategoryTreeInternal>(),
                };
                currentLevel.set(name, node);
            }
            node.count += 1;
            currentLevel = node.children;
        }
    }

    const buildTree = (level: Map<string, CategoryTreeInternal>): CategoryTreeItem[] => {
        const sorted = Array.from(level.values()).sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        );
        return sorted.map((node) => ({
            name: node.name,
            count: node.count,
            path: node.path,
            url: getCategoryUrl(node.path),
            children: buildTree(node.children),
        }));
    };

    return buildTree(root);
}