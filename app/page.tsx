"use client";

import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Menu,
  X,
  Star,
  Code,
  Zap,
  Database,
  Smartphone,
  Globe,
  Code2,
} from "lucide-react";
import { useState } from "react";
import ContactForm from "./contact";



export default function Home() {
  const [activeNav, setActiveNav] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/AGUGBUE-IKENNA-FULLSTACK.pdf"; // CV file in public folder
    link.download = "AGUGBUE-IKENNA-FULLSTACK.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <div className="fixed inset-0 pointer-events-none z-40">
        {/* CRT Monitor Bezel */}
        <div className="absolute inset-0 border-4 md:border-8 border-gray-900 rounded-lg shadow-2xl" />
        {/* CRT Screen Glare */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/10 rounded-lg" />
        {/* CRT Scanlines */}
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.08), rgba(0,0,0,0.08) 1px, transparent 1px, transparent 2px)",
            backgroundSize: "100% 2px",
          }}
        />
      </div>

      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="font-mono text-xs md:text-sm font-bold tracking-wider flex-shrink-0">
            PORTFOLIO.EXE
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-xs md:text-sm items-center">
            {["home", "about", "experience", "projects", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`uppercase tracking-wider transition-colors duration-300 relative pb-1 ${
                    activeNav === item
                      ? "text-green-500"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item}
                  {activeNav === item && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500" />
                  )}
                </button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-black hover:text-green-500 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col px-4 py-2 max-h-96 overflow-y-auto">
              {["home", "about", "experience", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`uppercase tracking-wider text-xs py-3 text-left transition-colors ${
                      activeNav === item
                        ? "text-green-500"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-6 relative"
      >
        <div className="text-center max-w-3xl w-full">
          {/* Large Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="retro-heading text-4xl md:text-9xl font-black text-gray-10 opacity-20 whitespace-nowrap">
              AGUGBUE IKENNA
            </div>
          </div>

          <div className="relative z-10">
            <h1 className="retro-title text-2xl md:text-6xl mb-4 tracking-tight">
              PORTFOLIO.EXE
            </h1>
            <div className="text-gray-500 text-xs md:text-sm mb-6 flex items-center justify-center gap-2 retro-text">
              <span>&gt;</span>
              <span>FULL STACK DEVELOPER</span>
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto text-xs md:text-base retro-text px-2">
              Hi, my name is{" "}
              <span className="bg-black text-white px-2 py-1 retro-border">
                Agugbue Ikenna
              </span>
              . I am a software Engineer, a true definition of a Philomath and a
              Tech addict. I strive to bring innovative ideas to life. My goal
              is to craft seamless digital experiences that not only meet but
              exceed client expectations.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-black text-white px-6 md:px-8 py-2 md:py-3 font-bold uppercase tracking-wider hover:bg-gray-800 transition text-xs md:text-sm retro-heading"
              >
                VIEW PROJECTS
              </button>
              <button
                onClick={downloadCV}
                className="border-2 border-black text-black px-6 md:px-8 py-2 md:py-3 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition text-xs md:text-sm retro-heading"
              >
                DOWNLOAD CV
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 md:gap-6 justify-center mb-12">
              <a
                href="https://github.com/Co-den"
                className="text-black hover:text-green-500 transition float-animation"
              >
                <Github size={20} className="md:w-6 md:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ikenna-agugbue-135455249a"
                className="text-black hover:text-green-500 transition float-animation"
              >
                <Linkedin size={20} className="md:w-6 md:h-6" />
              </a>
              <a
                href="mailto:agugbuenzubechi@gmail.com"
                className="text-black hover:text-green-500 transition float-animation"
              >
                <Mail size={20} className="md:w-6 md:h-6" />
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center animate-bounce">
              <ChevronDown size={24} className="md:w-8 md:h-8 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 md:px-6 py-20"
      >
        <div className="max-w-4xl w-full">
          <h2 className="retro-heading text-2xl md:text-6xl mb-8 md:mb-12 text-center">
            ABOUT.TXT
          </h2>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-gray-700 leading-relaxed mb-4 text-xs md:text-base retro-text">
              I am a passionate software developer with a love for creating
              digital experiences that matter. My journey in tech started with
              curiosity and has evolved into a commitment to building softwares
              and solutions that bridge creativity and functionality.
            </p>
            <p className="text-gray-700 leading-relaxed text-xs md:text-base retro-text">
              With over 4 years of experience in full-stack development, I have
              worked with startups and established companies to deliver
              high-quality solutions. I am passionate about clean code, user
              experience, and continuous learning.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: <Code2 size={24} />,
                title: "FRONTEND",
                skills:
                  "React, TypeScript, Next.js, Tailwind CSS, Redux, Zustand",
                desc: "Building responsive and interactive user interfaces",
              },
              {
                icon: <Database size={24} />,
                title: "BACKEND",
                skills:
                  "Node.js, Express.js, MongoDB, MySQL, RESTful APIs, Firebase, Supabase",
                desc: "Scalable server-side applications and APIs",
              },
              {
                icon: <Smartphone size={24} />,
                title: "MOBILE APPLICATIONS",
                skills: "React Native, Expo",
                desc: "Building cross-platform mobile experiences with native performance",
              },
              {
                icon: <Globe size={24} />,
                title: "DEPLOYMENT",
                skills: "Render, Netlify, Vercel, CI/CD",
                desc: "Automated deployment and cloud infrastructure",
              },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="border-2 border-gray-300 p-4 md:p-6 hover:border-black transition retro-border-green"
              >
                <div className="text-xl md:text-3xl mb-4 font-bold">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-xs md:text-sm mb-2 uppercase tracking-wider retro-heading">
                  {skill.title}
                </h3>
                <p className="text-xs text-gray-600 mb-3 retro-text">
                  {skill.skills}
                </p>
                <p className="text-xs text-gray-700 leading-relaxed retro-text">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Status Box */}
          <div className="bg-black text-white p-4 md:p-8 mt-8 md:mt-12 text-center scanline-effect retro-border">
            <p className="text-xs md:text-sm neon-text">
              <span>&gt; CURRENT STATUS:</span>
              <span className="ml-2">AVAILABLE FOR PROJECTS</span>
            </p>
            <p className="text-xs text-gray-400 mt-2 retro-text">
              Ready to collaborate on your next big idea
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/** <section
        id="experience"
        className="min-h-screen flex items-center justify-center px-4 md:px-6 py-20"
      >
        <div className="max-w-4xl w-full">
          <h2 className="retro-heading text-2xl md:text-6xl mb-8 md:mb-12 text-center">
            EXPERIENCE.LOG
          </h2>
          <p className="text-center text-gray-700 mb-8 md:mb-12 leading-relaxed text-xs md:text-base retro-text">
            My professional journey through the tech industry, working with
            innovative companies and delivering impactful solutions.
          </p>

          <div className="space-y-6 md:space-y-8">
            {[
              {
                role: "Senior Full Stack Developer",
                company: "Tech Innovations Inc.",
                period: "2022 - Present",
                desc: "Leading development of scalable web applications using modern tech stack. Mentoring junior developers and architecting microservices.",
              },
              {
                role: "Full Stack Developer",
                company: "Digital Solutions Ltd.",
                period: "2020 - 2022",
                desc: "Developed and maintained multiple client projects with focus on performance optimization and user experience.",
              },
              {
                role: "Junior Developer",
                company: "StartUp Hub",
                period: "2019 - 2020",
                desc: "Started my career building web applications and learning best practices in software development.",
              },
            ].map((exp, idx) => (
              <div
                key={idx}
                className="border-l-4 border-green-500 pl-4 md:pl-6 py-4 retro-border-green"
              >
                <h3 className="font-bold text-base md:text-lg mb-1 retro-heading">
                  {exp.role}
                </h3>
                <p className="text-green-500 text-xs md:text-sm mb-2 retro-text neon-text-flicker">
                  {exp.company} • {exp.period}
                </p>
                <p className="text-gray-700 text-xs md:text-sm retro-text">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 md:px-6 py-20"
      >
        <div className="max-w-4xl w-full">
          <h2 className="retro-heading text-2xl md:text-6xl mb-8 md:mb-12 text-center">
            PROJECTS.DIR
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              {
                title: "E-Commerce Platform",
                tech: "Next.js, Stripe, MongoDB",
                desc: "Full-featured e-commerce solution with payment integration and inventory management.",
                github: "https://github.com/Co-den/e-commerce-updated",
                demo: "https://agrific.netlify.app/",
              },
              {
                title: "Recipe App",
                tech: "React, supabase, Tailwind",
                desc: "Collaborative recipe sharing platform with real-time updates and user authentication.",
                github: "https://github.com/Co-den/chef-assistant-frontend",
                demo: "https://chef-assistant.netlify.app/",
              },
              {
                title: " AgriConnect Dashboard",
                tech: "Next.js, React.js, mongoDB",
                desc: "AgriConnect is a smart agriculture management platform designed to help farmers, agronomists, and agribusiness owners monitor and manage crop data, weather conditions, field activities, and market insights all in one place.",
                github: "https://github.com/Co-den/agri-app",
                demo: "https://agri-app-blush.vercel.app/",
              },
              {
                title: "Auth System",
                tech: "React, Express, MongoDB",
                desc: "Full User Authentication system with JWT, email verification, and password reset functionality.",
                github: "https://github.com/Co-den/authentication-",
                demo: "https://authenticationb.netlify.app/",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="border-2 border-gray-300 p-4 md:p-6 hover:border-black transition cursor-pointer group retro-border-green flex flex-col"
              >
                <h3 className="font-bold text-base md:text-lg mb-2 group-hover:text-green-500 transition retro-heading">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-green-500 mb-3 retro-text neon-text-flicker">
                  {project.tech}
                </p>
                <p className="text-xs md:text-sm text-gray-700 retro-text mb-4 flex-grow">
                  {project.desc}
                </p>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    className="flex-1 bg-black text-white px-3 py-2 font-bold uppercase tracking-wider hover:bg-gray-800 transition text-xs md:text-sm retro-heading retro-border-green text-center"
                  >
                    GITHUB
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 border-2 border-black text-black px-3 py-2 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition text-xs md:text-sm retro-heading text-center"
                  >
                    DEMO
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - NEW */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-4 md:px-6 py-20"
      >
        <div className="max-w-4xl w-full">
          <h2 className="retro-heading text-2xl md:text-6xl mb-8 md:mb-12 text-center">
            SKILLS.SYS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                category: "LANGUAGES",
                icon: <Code size={24} />,
                items: ["JavaScript", "TypeScript", "SQL", "HTML/CSS"],
              },
              {
                category: "FRAMEWORKS",
                icon: <Zap size={24} />,
                items: ["React", "Next.js", "Node.js", "Express.js"],
              },
              {
                category: "TOOLS & PLATFORMS",
                icon: <Star size={24} />,
                items: [
                  "Git",
                  "Postman",
                  "Vercel",
                  "GitHub",
                  "MongoDB",
                  "Firebase",
                  "Supabase",
                ],
              },
            ].map((skillGroup, idx) => (
              <div
                key={idx}
                className="border-2 border-gray-300 p-6 retro-border-green"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-green-500">{skillGroup.icon}</div>
                  <h3 className="font-bold text-sm md:text-base uppercase tracking-wider retro-heading">
                    {skillGroup.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs md:text-sm text-gray-700 retro-text flex items-center gap-2"
                    >
                      <span className="text-green-500">&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Proficiency Matrix */}
          <div className="mt-12 border-2 border-gray-300 p-6 retro-border-green">
            <h3 className="font-bold text-base md:text-lg mb-6 uppercase tracking-wider retro-heading">
              PROFICIENCY MATRIX
            </h3>
            <div className="space-y-4">
              {[
                { skill: "Frontend Development", level: 95 },
                { skill: "Backend Development", level: 85 },
                { skill: "Full Stack Architecture", level: 90 },
                { skill: "Deployment", level: 80 },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs md:text-sm retro-text">
                      {item.skill}
                    </span>
                    <span className="text-xs md:text-sm neon-text">
                      {item.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 border border-gray-300 h-3">
                    <div
                      className="bg-green-500 h-full transition-all duration-500"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 md:px-6 py-20"
      >
        <div className="max-w-2xl w-full">
          <h2 className="retro-heading text-2xl md:text-6xl mb-6 md:mb-8 text-center">
            CONTACT.ME
          </h2>
          <p className="text-gray-700 mb-8 md:mb-12 leading-relaxed text-xs md:text-base retro-text text-center">
            Have a project in mind or want to collaborate? Send a message — I
            usually respond within 48 hours.
          </p>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
            }}
            className="bg-white border-2 border-gray-200 p-6 md:p-8 rounded-md"
            aria-labelledby="contact-heading"
          >
            {/* client-side form state & handler */}
            {/* use inline handlers to avoid adding imports */}
            <script
              // Note: using a script tag here only to indicate behavior in file diff.
              type="text/plain"
            />

            {/* Form UI (managed by React state) */}
            {/* Replace with React-managed form below */}
            <div id="contact-form-wrapper" />
          </form>

          {/* React-managed contact form — keeps client behavior inside the component */}
          <div className="mt-6">
            {/* Form component */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-black text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm md:text-base font-mono">
            <div className="font-bold uppercase retro-heading">PORTFOLIO.EXE</div>
            <div className="text-gray-400 text-xs mt-1">Agugbue Nzubechi • Full Stack Developer</div>
          </div>

          <nav className="flex gap-4">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white text-xs uppercase tracking-wider"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="mailto:agugbuenzubechi@gmail.com"
              className="text-gray-300 hover:text-white text-xs flex items-center gap-2"
            >
              <Mail size={16} />
              <span className="hidden md:inline">agugbuenzubechi@gmail.com</span>
            </a>

            <a
              href="https://github.com/Co-den"
              className="text-gray-300 hover:text-white"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ikenna-agugbue-135455249a"
              className="text-gray-300 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-0">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Agugbue Nzubechi. All rights reserved. • Built with React / Next.js
          </div>
        </div>
      </footer>

     </div>
   );
 }

