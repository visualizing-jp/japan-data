import { CATALOG, CATEGORIES, type CatalogEntry } from "./catalog.ts";

// 領域の番号は大字で振る。数字よりも静かに並ぶ。
const CATEGORY_NUMERALS = ["壱", "弐", "参", "肆", "伍", "陸"];

const LINK_TRANSITION =
  "transition-colors duration-150 ease-[var(--ease-out)]";

export function App() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[1440px] flex-col gap-14 px-6 pt-14 sm:px-10 lg:flex-row lg:gap-16 lg:px-20 lg:pt-[120px] min-[87.5rem]:gap-20">
      <SideTitle />
      <MobileTitle />

      <main className="flex min-w-0 grow flex-col gap-20 lg:gap-24">
        {CATEGORIES.map((cat, i) => {
          const items = CATALOG.filter((e) => e.category === cat.id);
          return (
            <section key={cat.id} className="flex flex-col gap-8 lg:gap-10">
              <h2 className="flex items-baseline gap-6 font-serif">
                <span className="text-[14px] text-accent" aria-hidden>
                  {CATEGORY_NUMERALS[i]}
                </span>
                <span className="text-[20px] font-medium tracking-[0.3em] lg:text-[22px]">
                  {cat.label}
                </span>
                <span className="h-px grow self-center bg-rule" aria-hidden />
              </h2>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-12 min-[30rem]:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 min-[87.5rem]:grid-cols-4">
                {items.map((entry) => (
                  <li key={entry.slug}>
                    <ProjectCard entry={entry} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        <footer className="flex flex-col gap-2 pt-6 pb-24 text-[11px] leading-loose tracking-[0.06em] text-muted">
          <p>
            公的統計をもとにした長期シリーズのハブです。各ページは独立したサイトです。
          </p>
          <a
            href="https://visualizing.jp/"
            className={`w-fit ${LINK_TRANSITION} hover:text-ink`}
          >
            visualizing.jp
          </a>
        </footer>
      </main>
    </div>
  );
}

/** 広い画面: 縦組みのタイトルを左に置き、スクロールしても残す。 */
function SideTitle() {
  return (
    <aside className="sticky top-[120px] hidden shrink-0 flex-row-reverse gap-7 self-start lg:flex">
      <h1 className="vertical v-title font-serif font-medium">
        日本人は、
        <br />
        どう生きてきたか
      </h1>
      <p className="vertical pt-32 font-serif text-[15px] leading-[2] tracking-[0.18em] text-muted">
        公的統計でたどる、長期の変化。
      </p>
      <a
        href="https://visualizing.jp/"
        className={`vertical pt-32 text-[11px] tracking-[0.3em] text-accent ${LINK_TRANSITION} hover:text-ink`}
      >
        visualizing.jp
      </a>
    </aside>
  );
}

/** 狭い画面: 縦組みは収まらないので横組みにする。 */
function MobileTitle() {
  return (
    <header className="flex flex-col gap-5 lg:hidden">
      <a
        href="https://visualizing.jp/"
        className={`w-fit text-[11px] tracking-[0.3em] text-accent ${LINK_TRANSITION} hover:text-ink`}
      >
        visualizing.jp
      </a>
      <h1 className="font-serif text-[30px] leading-snug font-medium tracking-[0.12em] sm:text-[40px]">
        日本人は、
        <br />
        どう生きてきたか
      </h1>
      <p className="font-serif text-[14px] leading-loose tracking-[0.12em] text-muted">
        公的統計でたどる、長期の変化。
      </p>
    </header>
  );
}

function ProjectCard({ entry }: { entry: CatalogEntry }) {
  const pending = entry.status === "pending" || entry.url === null;
  const body = (
    <div className={`flex flex-col gap-4 ${pending ? "opacity-40" : ""}`}>
      <div className="card-art overflow-hidden">
        <img
          src={entry.art}
          alt=""
          width={320}
          height={200}
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-contain transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-[1.03]"
        />
      </div>
      <p
        className={`font-serif text-[16px] leading-[1.7] font-medium tracking-[0.04em] ${LINK_TRANSITION} ${
          pending ? "text-muted" : "text-ink group-hover:text-accent"
        }`}
      >
        {entry.title}
      </p>
      <p className="flex flex-wrap gap-x-3 text-[11px] tracking-[0.04em] text-muted">
        <span>{entry.source}</span>
        {entry.period !== "—" && <span className="tnum">{entry.period}</span>}
        {pending && <span className="text-faint">準備中</span>}
      </p>
    </div>
  );

  if (pending || entry.url === null) {
    return (
      <div className="block cursor-default" aria-disabled="true">
        {body}
      </div>
    );
  }

  return (
    <a href={entry.url} className="group block active:scale-[0.99]">
      {body}
    </a>
  );
}
