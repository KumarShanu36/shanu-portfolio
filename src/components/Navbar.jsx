import { useState, useEffect } from "react";
import {
  FaInstagram,
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdCall, MdMail } from "react-icons/md";

const Navbar = ({ hidden = false }) => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const contactActions = [
    {
      label: "Instagram",
      href: null,
      icon: <FaInstagram size={18} />,
    },
    {
      label: "GitHub",
      href: "https://github.com/KumarShanu36",
      icon: <FaGithub size={18} />,
    },
    {
      label: "Facebook",
      href: null,
      icon: <FaFacebookF size={18} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kumar-shanu36/",
      icon: <FaLinkedinIn size={18} />,
    },
    {
      label: "Call",
      href: "tel:+919471014833",
      icon: <MdCall size={18} />,
    },
    {
      label: "Mail",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=kumarshanu90848@gmail.com",
      icon: <MdMail size={18} />,
    },
  ];

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

            <div className="pt-8">
              <div className="max-w-md rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-6 shadow-[0_22px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <p className="mb-2 text-[0.76rem] uppercase tracking-[0.28em] text-cyan-200/70">Connect</p>
                <h3 className="text-[clamp(1.35rem,2vw,1.9rem)] font-medium tracking-[-0.04em] text-white">
                  Social & Contact
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/58">
                  Quick access to my professional profiles and direct contact options.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {contactActions.map((item) => {
                    const classes =
                      "flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] text-white transition-all duration-300";

                    if (!item.href) {
                      return (
                        <span
                          key={item.label}
                          title={`${item.label} link not added yet`}
                          aria-label={`${item.label} link not added yet`}
                          className={`${classes} cursor-not-allowed border-white/8 bg-white/[0.02] text-white/30`}
                        >
                          {item.icon}
                        </span>
                      );
                    }

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        aria-label={item.label}
                        onClick={() => setMenuOpen(false)}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className={`${classes} hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-cyan-300/[0.08] hover:text-cyan-100`}
                      >
                        {item.icon}
                      </a>
                    );
                  })}
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.24em] text-white/32">
                  Call, mail, LinkedIn, and GitHub are active
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
