import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 sm:px-10">
      <header className="flex items-center justify-between border-b border-white/10 py-6">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-full border border-white/20 text-sm font-medium text-[#e4dfd4]"
          >
            M
          </span>
          <span className="text-sm font-semibold tracking-[0.12em] uppercase">
            Movie Night
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-6 text-sm text-[#c2bdb1]"
        >
          <Link className="transition-colors hover:text-white" href="/movies">
            Movies
          </Link>
          <Link className="transition-colors hover:text-white" href="/about">
            About
          </Link>
        </nav>
      </header>

      <section className="grid flex-1 items-center gap-14 py-14 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:py-16">
        <div className="max-w-xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-[#c2bdb1] uppercase">
            <span className="h-px w-8 bg-[#9e8757]" />
            The student film club
          </p>
          <h1 className="font-display text-6xl leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
            Choose the film.
            <br />
            Make it a night.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-[#c2bdb1] sm:text-lg sm:leading-8">
            Browse the shortlist and find the story we should watch together.
            One good film can turn an ordinary evening into a tradition.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/movies"
              className="group inline-flex min-h-14 items-center gap-7 rounded-full bg-[#d8b66a] py-2 pr-2 pl-6 text-sm font-semibold text-[#17150f] no-underline transition-colors duration-200 hover:bg-[#e7ca83]"
            >
              Browse the films
              <span
                aria-hidden="true"
                className="grid size-10 place-items-center rounded-full bg-[#17150f]/10 text-lg text-[#17150f] transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
              >
                →
              </span>
            </Link>
            <Link
              href="/about"
              className="group inline-flex min-h-14 items-center gap-3 rounded-full border border-white/15 px-5 text-sm font-medium text-[#d2cec4] no-underline transition-colors duration-200 hover:border-[#9e8757]/70 hover:bg-white/[0.035] hover:text-white"
            >
              About Movie Night
              <span
                aria-hidden="true"
                className="text-[#9e8757] transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
              >
                ↗
              </span>
            </Link>
          </div>
        </div>

        <div className="poster-frame" aria-hidden="true">
          <div className="poster-art">
            <p className="poster-copy text-[0.6rem] font-medium tracking-[0.24em] text-[#e4dfd4]/75 uppercase">
              An evening at the movies
            </p>
            <div className="poster-sun" />
            <div className="poster-horizon" />
            <div className="poster-copy mb-4">
              <p className="font-display text-5xl leading-[0.92] tracking-[-0.04em] text-[#f4f0e6] sm:text-6xl">
                After
                <br />
                the last
                <br />
                show
              </p>
              <p className="mt-4 text-[0.6rem] tracking-[0.2em] text-[#c2bdb1]/80 uppercase">
                Picked together · watched together
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-2 border-t border-white/10 py-5 text-xs tracking-wide text-[#aaa69b] sm:flex-row sm:items-center sm:justify-between">
        <span>A good film is better shared.</span>
        <span className="text-[#9e8757]">EST. SESSION 01</span>
      </footer>
    </main>
  );
}
