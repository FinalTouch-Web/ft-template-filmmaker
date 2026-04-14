import Link from "next/link";

export default function EndSlate() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative px-6 md:px-10 pt-24 pb-12 bg-paper border-t border-rule">
      <div className="max-w-[1600px] mx-auto">
        <div className="border-2 border-ink p-6 sm:p-8 md:p-14 relative overflow-hidden">
          <div className="absolute top-4 left-4 h-slate text-ink-dim">
            END SLATE — TAIL
          </div>
          <div className="absolute top-4 right-4 h-slate text-signal">FIN.</div>

          <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-10 mt-12">
            <div>
              <div
                className="h-display text-ink"
                style={{
                  fontSize: "clamp(44px, 6.5vw, 92px)",
                  lineHeight: 0.9,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                }}
              >
                LONGFRAME<span className="text-signal">.</span>
              </div>
              <div className="mt-6 text-ink-dim max-w-md">
                A small film crew out of Calgary. We shoot stories that hold.
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-slate text-ink-dim">— STUDIO</div>
              <div className="text-sm text-ink">217A 11 Ave SE</div>
              <div className="text-sm text-ink">Calgary, AB T2G 0X8</div>
              <div className="text-sm text-ink-dim">Open by appointment</div>
            </div>
            <div className="space-y-3">
              <div className="h-slate text-ink-dim">— ELSEWHERE</div>
              <a className="block text-sm text-ink hover:text-signal transition-colors" href="#">
                Vimeo
              </a>
              <a className="block text-sm text-ink hover:text-signal transition-colors" href="#">
                Instagram
              </a>
              <a className="block text-sm text-ink hover:text-signal transition-colors" href="#">
                Letterboxd
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-between gap-4 items-start md:items-end">
            <div className="h-slate text-ink-dim">
              © {year} LONGFRAME STUDIO LTD. ALL FRAMES OWNED.
            </div>
            <div className="h-slate text-ink-dim flex gap-6">
              <Link href="/work" className="hover:text-ink">WORK</Link>
              <Link href="/about" className="hover:text-ink">ABOUT</Link>
              <Link href="/contact" className="hover:text-ink">CONTACT</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="h-slate text-ink-dim">
            SITE DESIGNED & BUILT BY
          </div>
          <a
            href="https://finaltouchwebsites.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2"
          >
            <span className="w-[7px] h-[7px] bg-signal hex" />
            <span className="h-slate text-ink group-hover:text-signal transition-colors">
              FINAL TOUCH WEBSITES
            </span>
            <span className="h-slate text-ink-dim group-hover:text-signal transition-colors">
              →
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
