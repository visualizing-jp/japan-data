/**
 * シリーズ・ハブのカタログ。
 *
 * 公開 URL の slug とローカル作業ディレクトリが一致しないもの:
 * - occupation → ../japan-data-work-people/
 * - salary → ../japan-data-work-category/
 * - death → ../data-death/
 * それ以外は ../japan-data-{slug}/
 */

export type CategoryId = "life" | "work" | "home";

export type ProjectStatus = "published" | "pending";

export type CatalogEntry = {
  slug: string;
  title: string;
  source: string;
  period: string;
  category: CategoryId;
  status: ProjectStatus;
  url: string | null;
  art: string;
};

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "life", label: "生きる・死ぬ" },
  { id: "work", label: "働く・学ぶ" },
  { id: "home", label: "暮らす・移る" },
];

export const CATALOG: CatalogEntry[] = [
  // —— 生きる・死ぬ ——
  {
    slug: "death",
    title: "日本人は何で死んできたか",
    source: "人口動態調査",
    period: "1899–2024",
    category: "life",
    status: "published",
    url: "https://japan-data-death.visualizing.jp/",
    art: "/art/death.svg",
  },
  {
    slug: "marriage",
    title: "日本人はいつ結婚し、別れてきたか",
    source: "人口動態調査",
    period: "1899–2024",
    category: "life",
    status: "published",
    url: "https://japan-data-marriage.visualizing.jp/",
    art: "/art/marriage.svg",
  },
  {
    slug: "timeuse",
    title: "日本人は1日をどう使ってきたか",
    source: "社会生活基本調査",
    period: "1996–2021",
    category: "life",
    status: "published",
    url: "https://japan-data-timeuse.visualizing.jp/",
    art: "/art/timeuse.svg",
  },
  {
    slug: "disease",
    title: "日本人はどんな病気で病院にかかってきたか",
    source: "患者調査",
    period: "—",
    category: "life",
    status: "published",
    url: "https://japan-data-disease.visualizing.jp/",
    art: "/art/disease.svg",
  },
  {
    slug: "births",
    title: "日本人はどれだけ子どもを産んできたか",
    source: "人口動態統計",
    period: "—",
    category: "life",
    status: "pending",
    url: null,
    art: "/art/births.svg",
  },
  {
    slug: "traffic-accidents",
    title: "日本人は交通事故でどれだけ傷ついてきたか",
    source: "警察庁交通事故統計",
    period: "—",
    category: "life",
    status: "published",
    url: "https://japan-data-traffic-accidents.visualizing.jp/",
    art: "/art/traffic-accidents.svg",
  },

  // —— 働く・学ぶ ——
  {
    slug: "occupation",
    title: "日本人はどんな仕事をしてきたか",
    source: "労働力調査・国勢調査",
    period: "2009–2025",
    category: "work",
    status: "published",
    url: "https://japan-data-occupation.visualizing.jp/",
    art: "/art/occupation.svg",
  },
  {
    slug: "employment",
    title: "日本人はどんな働き方をしてきたか",
    source: "労働力調査",
    period: "1953–2025",
    category: "work",
    status: "published",
    url: "https://japan-data-employment.visualizing.jp/",
    art: "/art/employment.svg",
  },
  {
    slug: "salary",
    title: "業種で給与はどれだけ違うか",
    source: "民間給与実態統計調査",
    period: "2014–2024",
    category: "work",
    status: "published",
    url: "https://japan-data-salary.visualizing.jp/",
    art: "/art/salary.svg",
  },
  {
    slug: "education",
    title: "日本人はどこまで学ぶようになったか",
    source: "学校基本調査",
    period: "1948–2023",
    category: "work",
    status: "published",
    url: "https://japan-data-education.visualizing.jp/",
    art: "/art/education.svg",
  },
  {
    slug: "schools",
    title: "日本人はどんな学校に通ってきたか",
    source: "学校基本調査",
    period: "—",
    category: "work",
    status: "pending",
    url: null,
    art: "/art/schools.svg",
  },
  {
    slug: "working-age",
    title: "日本人は何歳まで働くようになったか",
    source: "労働力調査",
    period: "1953–2025",
    category: "work",
    status: "published",
    url: "https://japan-data-working-age.visualizing.jp/",
    art: "/art/working-age.svg",
  },
  {
    slug: "commuting",
    title: "日本人はどう通勤・通学してきたか",
    source: "国勢調査",
    period: "—",
    category: "work",
    status: "published",
    url: "https://japan-data-commuting.visualizing.jp/",
    art: "/art/commuting.svg",
  },

  // —— 暮らす・移る ——
  {
    slug: "households",
    title: "日本人はどう暮らしてきたか",
    source: "国勢調査・世帯数推計",
    period: "1995–2050",
    category: "home",
    status: "published",
    url: "https://japan-data-households.visualizing.jp/",
    art: "/art/households.svg",
  },
  {
    slug: "housing",
    title: "日本人はどんな家に住んできたか",
    source: "住宅・土地統計調査",
    period: "1978–2023",
    category: "home",
    status: "published",
    url: "https://japan-data-housing.visualizing.jp/",
    art: "/art/housing.svg",
  },
  {
    slug: "food",
    title: "日本人は何を食べてきたか",
    source: "食料需給表",
    period: "1960–2023",
    category: "home",
    status: "published",
    url: "https://japan-data-food.visualizing.jp/",
    art: "/art/food.svg",
  },
  {
    slug: "migration",
    title: "日本人はどこへ移り住んできたか",
    source: "住民基本台帳人口移動報告",
    period: "1954–2025",
    category: "home",
    status: "published",
    url: "https://japan-data-migration.visualizing.jp/",
    art: "/art/migration.svg",
  },
  {
    slug: "foreign-residents",
    title: "日本の外国人住民はどこにいるか",
    source: "住民基本台帳",
    period: "2013–2026",
    category: "home",
    status: "published",
    url: "https://japan-data-foreign-residents.visualizing.jp/",
    art: "/art/foreign-residents.svg",
  },
  {
    slug: "spending",
    title: "日本人は何にお金を使ってきたか",
    source: "家計調査",
    period: "—",
    category: "home",
    status: "published",
    url: "https://japan-data-spending.visualizing.jp/",
    art: "/art/spending.svg",
  },
  {
    slug: "crime",
    title: "日本ではどんな犯罪が起きてきたか",
    source: "犯罪統計・警察白書",
    period: "—",
    category: "home",
    status: "published",
    url: "https://japan-data-crime.visualizing.jp/",
    art: "/art/crime.svg",
  },
  {
    slug: "waste",
    title: "日本はどれだけごみを出してきたか",
    source: "一般廃棄物処理実態調査",
    period: "—",
    category: "home",
    status: "pending",
    url: null,
    art: "/art/waste.svg",
  },
  {
    slug: "environment",
    title: "日本では空気と水はどれだけきれいになったか",
    source: "環境統計",
    period: "—",
    category: "home",
    status: "pending",
    url: null,
    art: "/art/environment.svg",
  },
];
