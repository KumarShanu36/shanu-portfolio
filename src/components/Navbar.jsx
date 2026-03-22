import { useState, useEffect } from "react";

const Navbar = ({ hidden = false }) => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  if (hidden) return null;

  return (
    <>
      <nav className="pointer-events-none sticky top-0 z-50 px-4 py-5 sm:px-6 lg:px-10 xl:px-12">
        <div className="mx-auto flex max-w-[1600px] justify-end">
          <button
            type="button"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className={`pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
              active || menuOpen
                ? "border-white/14 bg-[#0f1023]/88 shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                : "border-white/10 bg-[#0f1023]/60 backdrop-blur-md"
            }`}
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-white" />
              <span className="block h-0.5 w-5 rounded-full bg-white" />
              <span className="block h-0.5 w-5 rounded-full bg-white" />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[70] transition-all ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/45 transition-all duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
        />

        <div className={`absolute inset-y-0 right-0 w-full bg-black transition-all duration-300 md:w-1/2 ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="absolute right-8 top-8 h-12 w-12 md:right-12 md:top-10"
          >
            <span className="absolute left-1/2 top-1/2 block h-px w-12 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <span className="absolute left-1/2 top-1/2 block h-px w-12 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
          </button>

          <div className="flex h-full flex-col justify-between px-8 py-20 text-white md:px-14 md:py-16 lg:px-18">
            <div className="pt-12 md:pt-20">
              <div className="flex max-w-md flex-col items-start">
                {[
                  { href: "#home", label: "HOME" },
                  { href: "#skills", label: "STACK" },
                  { href: "#about", label: "BIO" },
                  { href: "#project", label: "WORK" },
                  { href: "#contact", label: "TALK" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[clamp(2.4rem,5vw,4.1rem)] font-light leading-[0.9] tracking-[-0.06em] text-white/82 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-8 border-t border-white/0 pt-8 md:grid-cols-1 lg:grid-cols-2 md:gap-10">
              <div>
                <p className="mb-3 text-[0.8rem] uppercase tracking-[0.2em] text-white/55">E-MAIL</p>
                <p className="text-[clamp(1.05rem,1.5vw,1.35rem)] tracking-[0.04em] text-white/88">
                  kumarshanu90848@gmail.com
                </p>
              </div>

              <div>
                <p className="mb-3 text-[0.8rem] uppercase tracking-[0.2em] text-white/55">SOCIAL MEDIA</p>
                <p className="text-[clamp(0.9rem,1.15vw,1.08rem)] tracking-[0.07em] text-white/88">
                  [ INSTAGRAM ] [ FACEBOOK ] [ LINKEDIN ] [ GITHUB ]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
