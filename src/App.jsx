import { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek, listCertificates } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import ContactGlobe from "./components/ContactGlobe";
import QuoteSection from "./components/QuoteSection";
import EndMarquee from "./components/EndMarquee";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const contactDetails = [
    {
      label: "Email",
      value: "kumarshanu90848@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=kumarshanu90848@gmail.com",
      accentClass: "border-cyan-400/18 bg-cyan-400/[0.08]",
    },
    {
      label: "Contact No",
      value: "+91 9471014833",
      href: "tel:+919471014833",
      accentClass: "border-white/8 bg-white/[0.045]",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/kumar-shanu36",
      href: "https://www.linkedin.com/in/kumar-shanu36/",
      accentClass: "border-white/8 bg-white/[0.045]",
    },
    {
      label: "GitHub",
      value: "github.com/KumarShanu36",
      href: "https://github.com/KumarShanu36",
      accentClass: "border-white/8 bg-white/[0.045]",
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleContactSectionOpen = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  // -------------------------

  const visibleCertificates = showAllCertificates
    ? listCertificates
    : listCertificates.slice(0, 3);

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      const baseUrl = `${window.location.origin}${import.meta.env.BASE_URL}`;
      window.location.replace(baseUrl);
    }
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1" id="home">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="./assets/faris1.png" className="w-10 rounded-md" />
              <q>Avoid or just undertake it</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Kumar Shanu" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="A passionate application and web developer dedicated to crafting modern, high-performance digital experiences through innovative and user-friendly solutions."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a 
                href="./assets/CV.pdf" 
                download="Kumar_Shanu_CV.pdf" 
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Kumar Shanu"
              title="Web Developer"
              handle="kumarshanu"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/new-profile.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={handleContactSectionOpen}
            />
          </div>
        </div>
        {/* tentang */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="I’m Kumar Shanu, a full-stack developer passionate about building modern, high-performance applications with an intuitive user experience. I enjoy working with the latest technologies like Artificial Intelligence, Machine Learning, and cloud-based development, blending creativity with precision to deliver impactful solutions. With over three years of experience and more than 5 completed projects, I’m committed to helping users and businesses grow in the digital era through functional, aesthetic, and scalable digital products."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      5<span className="text-violet-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      15<span className="text-violet-500">+</span>
                    </h1>
                    <p>Technologies Mastered</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      Full<span className="text-violet-500"> Stack</span>
                    </h1>
                    <p>Developer</p>
                  </div>
                </div>


                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>

        </div>
        <div className="tools mt-32" id="skills">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Profesional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tentang */}

        <div className="mt-32" id="quotes">
          <QuoteSection />
        </div>

        <div className="certificate mt-32" id="certificates">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Certificates
          </h1>
          <p className="mx-auto max-w-2xl text-center text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            A selected set of certifications that reflect my learning path across web development, AI, and cloud technologies.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleCertificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className="flex flex-col rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-md"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={400 + index * 100}
                data-aos-once="true"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
                      Certified
                    </p>
                    <h2 className="text-2xl font-bold text-white">{certificate.title}</h2>
                  </div>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {certificate.year}
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium text-white/80">{certificate.issuer}</p>
                <p className="text-sm leading-7 text-white/55">{certificate.summary}</p>
                <div className="mt-6">
                  {certificate.link ? (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition-colors hover:bg-cyan-400/20"
                    >
                      View Certificate
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                      View Certificate
                      <span aria-hidden="true">↗</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {listCertificates.length > 3 && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllCertificates((value) => !value)}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition-colors hover:bg-cyan-400/20"
              >
                {showAllCertificates ? "Show Less" : "Load More Certificates"}
              </button>
            </div>
          )}
        </div>

        {/* Proyek */}
        <div className="proyek mt-32" id="project">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Project
          </h1>
          <p className="mx-auto max-w-2xl text-center text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.
          </p>

          <div
            className="proyek-box mt-14"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <div style={{ height: "auto", position: "relative" }}>
              <ChromaGrid
                items={listProyek}
                onItemClick={handleProjectClick}
                radius={500}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </div>
        </div>
        {/* Proyek */}


        {/* Kontak */}
        <div className="kontak relative left-1/2 mt-32 w-screen -translate-x-1/2" id="contact">
          <div className="relative min-h-[82svh] overflow-hidden bg-[#1d1d22]">
            <div className="absolute inset-0">
              <ContactGlobe />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(29,29,34,0.88)_0%,rgba(26,26,31,0.68)_16%,rgba(16,19,31,0.28)_42%,rgba(11,13,20,0.08)_100%),radial-gradient(circle_at_top_left,rgba(87,120,112,0.08),transparent_24%),radial-gradient(circle_at_top_right,rgba(31,151,166,0.1),transparent_24%),linear-gradient(90deg,rgba(11,13,20,0.4)_0%,rgba(11,13,20,0.16)_34%,rgba(11,13,20,0.02)_64%,rgba(11,13,20,0.08)_100%)]" />

            <div className="relative mx-auto flex min-h-[82svh] w-full max-w-[1500px] items-center px-6 py-9 md:px-12 lg:px-20">
              <form
                action="https://formsubmit.co/kumarshanu90848@gmail.com"
                method="POST"
                className="w-full max-w-[560px] rounded-[2rem] border border-white/10 bg-[rgba(18,14,35,0.84)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-md md:p-10 lg:p-11"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <p className="mb-3 text-xs font-semibold tracking-[0.24em] text-cyan-200/75">
                  GET IN TOUCH
                </p>
                <h2 className="text-5xl font-bold leading-none text-white">Let&apos;s Work Together.</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
                  Open for freelance projects, product collaborations, and technical discussions.
                  Send a message and I&apos;ll get back with the right next step.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {contactDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className={`rounded-2xl border px-4 py-3 ${detail.accentClass}`}
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                          className="mt-2 block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium leading-6 text-white/90 transition-colors hover:text-cyan-200"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium leading-6 text-white/90">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-white/90">Your Name</label>
                      <input
                        type="text"
                        name="Name"
                        placeholder="John Doe"
                        className="rounded-xl border border-white/10 bg-[#21163c]/88 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#8d83ab] focus:border-cyan-300/60"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-white/90">Your Email</label>
                      <input
                        type="email"
                        name="Email"
                        placeholder="john@example.com"
                        className="rounded-xl border border-white/10 bg-[#21163c]/88 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#8d83ab] focus:border-cyan-300/60"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-white/90">Project Brief</label>
                    <textarea
                      name="message"
                      id="message"
                      rows="6"
                      placeholder="Tell me about your idea, goals, timeline, or the problem you want solved."
                      className="resize-none rounded-xl border border-white/10 bg-[#21163c]/88 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#8d83ab] focus:border-cyan-300/60"
                      required
                    ></textarea>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-6 text-white/45">
                      Prefer email-first communication for project discussions and collaboration requests.
                    </p>
                    <button
                      type="submit"
                      className="cursor-pointer rounded-full border border-cyan-300/25 bg-cyan-300/12 px-6 py-3 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/20"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}

        <div className="mt-0">
          <EndMarquee />
        </div>
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
