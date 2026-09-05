import { CATALOG, CATEGORIES, type CatalogEntry } from "./catalog.ts";

export function App() {
  return (
    <div className="min-h-dvh">
      <header className="border-b border-rule">
        <div className="mx-auto w-full max-w-[960px] min-[87.5rem]:max-w-[1280px] px-6 pt-10 pb-8">
          <p className="text-[11px] tracking-wide text-muted">
            <a
              href="https://visualizing.jp/"
              className="transition-colors duration-150 ease-[var(--ease-out)] hover:text-ink"
            >
              visualizing.jp
            </a>
          </p>
          <h1 className="mt-3 text-[28px] leading-tight font-semibold tracking-tight sm:text-[34px]">
            日本人は、どう生きてきたか
          </h1>
          <p className="mt-3 max-w-[36em] text-[14px] leading-relaxed text-muted">
            公的統計でたどる、長期の変化。問いを選んで開く。
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[960px] min-[87.5rem]:max-w-[1280px] px-6 py-10">
        {CATEGORIES.map((cat) => {
          const items = CATALOG.filter((e) => e.category === cat.id);
          return (
            <section key={cat.id} className="mb-12 last:mb-0">
              <h2 className="mb-5 border-t border-rule pt-3 text-[11px] tracking-wide text-muted">
                {cat.label}
              </h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 min-[87.5rem]:grid-cols-4">
                {items.map((entry) => (
                  <li key={entry.slug}>
                    <ProjectCard entry={entry} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </main>

      <footer className="mx-auto w-full max-w-[960px] min-[87.5rem]:max-w-[1280px] px-6 pt-2 pb-12 text-[11px] leading-relaxed text-faint">
        公的統計をもとにした長期シリーズのハブです。各ページは独立したサイトです。
        <a
          href="https://visualizing.jp/"
          className="mt-2 block w-fit transition-colors duration-150 ease-[var(--ease-out)] hover:text-muted"
        >
          visualizing.jp
        </a>
      </footer>
    </div>
  );
}

function ProjectCard({ entry }: { entry: CatalogEntry }) {
  const pending = entry.status === "pending";
  const body = (
    <div className={pending ? "opacity-30" : undefined}>
      <div className="card-art mb-4 overflow-hidden">
        <img
          src={entry.art}
          alt=""
          width={320}
          height={200}
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-contain"
        />
      </div>
      <p
        className={`text-[15px] leading-snug font-semibold tracking-tight ${
          pending ? "text-muted" : "text-ink"
        }`}
      >
        {entry.title}
      </p>
      <p className="mt-2 text-[11px] leading-relaxed text-muted">
        {entry.source}
        {entry.period !== "—" && (
          <>
            <span className="mx-1.5 text-faint" aria-hidden>
              ·
            </span>
            <span className="tnum">{entry.period}</span>
          </>
        )}
      </p>
      {pending && (
        <p className="mt-2 text-[10px] tracking-wide text-faint">準備中</p>
      )}
    </div>
  );

  const shell =
    "group relative block h-full border border-rule bg-transparent p-4 transition-[border-color,transform] duration-150 ease-[var(--ease-out)] " +
    "before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-accent before:transition-transform before:duration-150 before:ease-[var(--ease-out)] " +
    (pending
      ? "cursor-default"
      : "hover:border-rule-strong hover:before:scale-x-100 active:scale-[0.99]");

  if (pending || entry.url === null) {
    return (
      <div className={shell} aria-disabled="true">
        {body}
      </div>
    );
  }

  return (
    <a href={entry.url} className={shell}>
      {body}
    </a>
  );
}
