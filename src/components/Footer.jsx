import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscWorkspaceTrusted,
  VscCommentDiscussion,
  VscTools,
  VscQuote,
} from "react-icons/vsc";

const Footer = () => {
  const items = [
    { icon: <VscHome size={18} />, label: "Home", onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={18} />, label: "About Me", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscTools size={18} />, label: "Skills", onClick: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscQuote size={18} />, label: "Quotes", onClick: () => document.getElementById("quotes")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscWorkspaceTrusted size={18} />, label: "Certificates", onClick: () => document.getElementById("certificates")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive size={18} />, label: "Project", onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscCommentDiscussion size={18} />, label: "Get in Touch", onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <div className="mt-32 pb-8 flex flex-col items-center relative z-10">
      {/* Flex container adaptif */}
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-6">
        
        {/* Judul - paling atas di mobile */}
        <h1 className="text-2xl font-bold order-1 md:order-none">
          Portofolio
        </h1>

        {/* Ikon Sosmed - di tengah di mobile */}
        <div className="flex gap-3 order-2 md:order-none">
          <a href="https://github.com/KumarShanu36" target="_blank" rel="noreferrer"><i className="ri-github-fill ri-2x"></i></a>
          <a href="https://www.linkedin.com/in/kumar-shanu36/" target="_blank" rel="noreferrer"><i className="ri-linkedin-box-fill ri-2x"></i></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kumarshanu90848@gmail.com" target="_blank" rel="noreferrer"><i className="ri-mail-fill ri-2x"></i></a>
        </div>

        {/* Dock - paling bawah di mobile */}
        <div className="order-3 md:order-none mt-15 md:mt-0  md:mb-0">
          <Dock 
            items={items}
            panelHeight={30}
            baseItemSize={60}
            magnification={100}
            collapsedVisibleCount={3}
          />
        </div>

      </div>
    </div>
  );
};

export default Footer;
