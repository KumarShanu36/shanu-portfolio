import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Kotlin",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Firebase",
    ket: "Framework",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Language",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PHP",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];

import Proyek1 from "/assets/proyek/livestock.png";
import Proyek2 from "/assets/proyek/ai-travel.png";
import Proyek3 from "/assets/proyek/safe-neighbor.png";
export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    imagePosition: "center top",
    title: "LiveStock - Real-Time Stock Tracking Platform",
    subtitle: "A dynamic stock tracking platform with real-time prices, portfolio insights, and simulated trading...",
    fullDescription:"Developed a dynamic stock tracking platform offering real-time price updates, portfolio insights, and simulated buy and sell actions. Structured a dedicated My Trades module to help users clearly monitor and analyze all trade activities. Delivered a seamless real-time trading experience that enhanced user decision-making and reduced interface latency, resulting in faster and more reliable portfolio interactions. Tech stack: HTML, CSS, JavaScript, Node.js.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/KumarShanu36/livestock-stock-tracker",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    imageFit: "contain",
    imagePosition: "center center",
    title: "AI Travel - AI Language Translator for Travelers",
    subtitle: "An AI-driven multilingual translator with real-time translation, conversation mode, and pronunciation support...",
    fullDescription:"Engineered an AI-driven multilingual translator supporting real-time text translation, conversation mode, and pronunciation features tailored for travelers. Integrated offline speech synthesis using pyttsx3, enabling instant Listen playback for accessible voice output. Enhanced traveler communication by delivering fast, accurate translations with instant speech output, improving accessibility and user experience. Tech stack: Python, Streamlit, pyttsx3, HTML/CSS.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/KumarShanu36/ailangtransfortravlers",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    imagePosition: "center top",
    title: "Safe Neighbor - Safety Alerts",
    subtitle: "A community safety reporting system for incident submission and nearby alert discovery...",
    fullDescription:"Crafted a user-friendly safety reporting system that allows community members to submit incidents and explore nearby alerts. Organized modular UI components for incident forms, quick reporting, and categorized safety logs to enhance clarity and navigation. Streamlined safety reporting and alert access, improving community awareness and preparedness. Tech stack: HTML, CSS, JavaScript, PHP, Node.js.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/KumarShanu36/Neighborhood-Safety-and-Incident-Reporting-",
    dad: "300",
  },
];

export const listCertificates = [
  {
    id: 1,
    title: "Cloud Computing",
    issuer: "NPTEL",
    year: "Completed",
    summary: "Coursework focused on cloud computing concepts, service models, and practical infrastructure fundamentals.",
    link: "/assets/certificates/cloud-computing.pdf",
  },
  {
    id: 2,
    title: "CPP with OOPs Programming Language",
    issuer: "Cipher Schools",
    year: "Completed",
    summary: "Training in C++ programming and object-oriented design principles for structured software development.",
    link: "",
  },
  {
    id: 3,
    title: "Master Generative AI & Generative AI Tools (ChatGPT & More)",
    issuer: "Infosys",
    year: "Completed",
    summary: "Covered generative AI fundamentals and practical use of tools such as ChatGPT for real-world workflows.",
    link: "",
  },
  {
    id: 4,
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "Infosys",
    year: "Completed",
    summary: "Focused on formal languages, language principles, and finite automata theory in computation.",
    link: "",
  },
  {
    id: 5,
    title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    issuer: "Infosys",
    year: "Completed",
    summary: "Explored prompt engineering techniques for ChatGPT, generative AI systems, and large language models.",
    link: "",
  },
  {
    id: 6,
    title: "Build Generative AI Apps and Solutions with No-Code Tools",
    issuer: "Infosys",
    year: "Completed",
    summary: "Learned how to create generative AI applications and workflows using no-code development tools.",
    link: "",
  },
  {
    id: 7,
    title: "Computer Communications",
    issuer: "Coursera",
    year: "Completed",
    summary: "Studied the fundamentals of computer communication systems and how data moves across connected networks.",
    link: "",
  },
  {
    id: 8,
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    year: "Completed",
    summary: "Covered networking basics including protocols, routing, addressing, and common communication models.",
    link: "",
  },
  {
    id: 9,
    title: "Introduction to Hardware and Operating Systems",
    issuer: "Coursera",
    year: "Completed",
    summary: "Built foundational understanding of computer hardware, operating systems, and system-level computing concepts.",
    link: "",
  },
  {
    id: 10,
    title: "Fundamentals of Network Communication",
    issuer: "Coursera",
    year: "Completed",
    summary: "Focused on essential principles of network communication, transmission methods, and network architecture.",
    link: "",
  },
  {
    id: 11,
    title: "Packet Switching Networks and Algorithms",
    issuer: "Coursera",
    year: "Completed",
    summary: "Explored packet-switched networks, routing behavior, and algorithms used in modern communication systems.",
    link: "",
  },
  {
    id: 12,
    title: "Git and Github",
    issuer: "Cipher Schools",
    year: "Completed",
    summary: "Learned version control workflows, repository management, branching, and collaboration using Git and GitHub.",
    link: "",
  },
];
