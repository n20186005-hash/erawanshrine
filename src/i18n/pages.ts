import { languagesList, type Lang } from './ui';

/** 站内页面标识 */
export type PageKey = 'home' | 'prayer';

/**
 * 各语言下二级内容页的 URL 片段。
 *
 * 为什么不做全站统一的 slug：泰文用户检索用的是「คาถา / บทสวด」这类词，
 * 英文与中文用户用的是 mantra，让路径贴合当地检索习惯比统一拼写更利于点击率。
 */
export const pageSlug: Record<PageKey, Record<Lang, string>> = {
  home: { th: '', en: '', zh: '' },
  prayer: { th: 'katha', en: 'mantra', zh: 'mantra' },
};

/** 某页面在指定语言下的站内路径，例如 /th/katha/ —— 与目录式输出的结尾斜杠保持一致 */
export const pagePath = (page: PageKey, lang: Lang): string => {
  const seg = pageSlug[page][lang];
  return seg ? `/${lang}/${seg}/` : `/${lang}/`;
};

/** 某页面在指定语言下的完整地址 */
export const pageUrl = (origin: string, page: PageKey, lang: Lang): string =>
  `${origin}${pagePath(page, lang)}`;

/**
 * 同一页面的多语言地址表，供 hreflang 使用。
 * 关键在于它返回的是「同一页面」的各语言版本，而不是各语言首页。
 */
export const pageAlternates = (origin: string, page: PageKey) =>
  languagesList.map((l) => ({ lang: l, href: pageUrl(origin, page, l) }));
