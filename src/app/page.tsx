"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Github,
  GraduationCap,
  Laptop,
  Linkedin,
  Mail,
  Menu,
  Monitor,
  Sparkles,
  X,
  Download,
  Layers3,
  Workflow,
  Send,
} from "lucide-react";

const projects = [
  {
   number: "01", 
   repo: "https://github.com/panpan1234777-design/Meeting-Room-Booking-Project", 
   image: "/images/meeting-room.png", 
    title: "Meeting Room Booking System",
    category: "FULL-STACK WEB APPLICATION",
    description:
      "A workplace booking system that helps teams find available meeting rooms, choose time slots, and manage reservations with clear validation and role-based workflows.",
    stack: ["Laravel", "Next.js", "Tailwind CSS", "MySQL", "JWT"],
    icon: Monitor,
    theme: "blue",
    features: [
      "Room availability and time-slot validation",
      "User and admin workflows",
      "Booking status management",
    ],
  },
  {
    number: "02",
     repo: "https://github.com/panpan1234777-design/Student-Management-System", 
   image: "/images/student.png", 
    title: "Student Management System",
    category: "DATA MANAGEMENT APPLICATION",
    description:
      "A system concept for organizing student records and connecting students with instructors and class batches to make academic administration easier.",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    icon: GraduationCap,
    theme: "violet",
    features: [
      "Student record management",
      "Instructor and batch organization",
      "Structured data workflows",
    ],
  },
  {
    number: "03",
    repo: "https://github.com/panpan1234777-design",
    image: "/images/ticket.png",
    title: "Ticket Management System",
    category: "WORKFLOW & ISSUE TRACKING",
    description:
      "A workplace project focused on tracking assigned tasks, understanding project ownership, and presenting useful ticket information to the right users.",
    stack: ["PHP", "Laravel", "REST API", "MySQL"],
    icon: Workflow,
    theme: "cyan",
    features: [
      "Ticket and project overview",
      "Role-aware data access",
      "API testing and debugging",
    ],
  },
];

const skills = [
  {
    name: "Frontend",
    detail: "JavaScript · Next.js · Tailwind CSS · HTML · CSS",
    icon: Laptop,
  },
  { name: "Backend", detail: "PHP · Laravel · REST API", icon: Braces },
  { name: "Database", detail: "MySQL · Relational data", icon: Database },
  {
    name: "Tools & workflow",
    detail: "Git · GitHub · Postman · VS Code",
    icon: Layers3,
  },
];

const experience = {
  role: "Junior Full-Stack Developer Intern",
  company: "Ace Plus Solutions (MICT Park)",
  period: "2026 APRIL — AUGUST",
  points: [
    "Completed a 6-month professional training program: 3 months of intensive theoretical learning followed by 3 months of hands-on On-the-Job Training.",
    "Developed and practiced full-stack web development skills using PHP, Laravel, React, and MySQL.",
    "Collaborated with peers on practical projects, managed version control via Git/GitHub, and applied best practices in building responsive web applications.",
  ],
};

const education = {
  degree: "B.Sc. Physics — Final Year Completed",
  school: "West Yangon University",
};

const certificates = [
  { name: "Professional Web Developer Course", issuer: "Fairway Technology" },
  { name: "Basic Java Programming", issuer: "Fairway Technology" },
  { name: "Basic C# Programming", issuer: "ACE Inspiration" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [profileFailed, setProfileFailed] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main>
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Portfolio home"
        >
          <span className="brand-mark">&lt;/&gt;</span>
          <span>
            PORTFOLIO<span className="brand-period">.</span>
          </span>
        </a>
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="profile-wrap reveal">
          {profileFailed ? (
            <div
              className="profile-fallback"
              aria-label="Profile photo placeholder"
            >
              MK
            </div>
          ) : (
            <img
              className="profile-photo"
              src="/images/profile.jpg"
              alt="Portfolio owner profile portrait"
              onError={() => setProfileFailed(true)}
            />
          )}
          <span className="profile-status" title="Open to opportunities" />
        </div>
        <div className="hero-copy reveal delay-1">
          <p className="hero-kicker"><span/> HELLO, I&apos;M</p>
          <h1>May Yi Ko</h1>
          <h2>Web Developer</h2>
          <p className="hero-description">
            I build useful, responsive web applications with thoughtful
            interfaces and reliable backend logic. I enjoy learning by building
            real projects and improving with every challenge.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View My Work <ArrowUpRight size={17} />
            </a>
            <a className="button button-secondary" href="#contact">
              Get In Touch <Mail size={16} />
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/panpan1234777-design"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={23} />
            </a>
            <a
              href="https://www.linkedin.com/in/may-yi-ko-97a926392/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={23} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=mayyiko202@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
              <Mail size={23} />
            </a>
            <a href="/cv.pdf" download>
            cv form <Download size={15} />
          </a>
          </div>
          {/* <a className="scroll-indicator" href="#about"><span/> SCROLL TO EXPLORE <ArrowDown size={13}/></a> */}
        </div>
      </section>

      <section className="section-wrap about-section" id="about">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              Curious mind.
              <br />
              <span>Practical builder.</span>
            </h2>
          </div>
          {/* <p className="section-intro">
            I enjoy turning ideas into useful web experiences and learning how
            every layer of an application works together.
          </p> */}
        </div>
        <div className="about-layout">
          <article className="about-card">
            <div className="about-card-head">
              <span className="about-icon">
                <BriefcaseBusiness size={20} />
              </span>
              <span className="about-label">EXPERIENCE</span>
            </div>
            <h3>{experience.role}</h3>
            <p className="about-meta">
              {experience.company} · {experience.period}
            </p>
            <ul className="about-list">
              {experience.points.map((point) => (
                <li key={point}>
                  <Check size={14} />
                  {point}
                </li>
              ))}
            </ul>
          </article>
          <div className="about-side">
            <article className="about-card">
              <div className="about-card-head">
                <span className="about-icon">
                  <GraduationCap size={20} />
                </span>
                <span className="about-label">EDUCATION</span>
              </div>
              <h3>{education.degree}</h3>
              <p className="about-meta">{education.school}</p>
            </article>
            <article className="about-card">
              <div className="about-card-head">
                <span className="about-icon">
                  <Sparkles size={20} />
                </span>
                <span className="about-label">CERTIFICATES</span>
              </div>
              <ul className="about-certs">
                {certificates.map((cert) => (
                  <li key={cert.name}>
                    <strong>{cert.name}</strong>
                    <span>{cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / TECHNICAL SKILLS</p>
              <h2>
                Tools for turning
                <br />
                <span>ideas into reality.</span>
              </h2>
            </div>
            {/* <p className="section-intro">
              A growing toolkit across frontend, backend, databases, and the
              everyday tools used to build and test applications.
            </p> */}
          </div>
          <div className="skills-grid">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <article
                  className="skill-card"
                  key={skill.name}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="skill-top">
                    <span className="skill-icon">
                      <Icon size={21} />
                    </span>
                    <span className="skill-index">0{i + 1}</span>
                  </div>
                  <h3>{skill.name}</h3>
                  <p>{skill.detail}</p>
                  {/* <div className="skill-bottom">
                    <span>CORE TOOLKIT</span>
                    <ArrowUpRight size={15} />
                  </div> */}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-wrap projects-section" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / SELECTED WORK</p>
            <h2>
              Projects built to
              <br />
              <span>solve real problems.</span>
            </h2>
          </div>
          {/* <p className="section-intro">
            A selection of projects that reflect my interest in useful systems,
            organized workflows, and practical web development.
          </p> */}
        </div>
        <div className="projects-list">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <article
                className={`project-card project-${project.theme}`}
                key={project.number}
              >
                <div className="project-visual">
                  <div className="project-visual-top">
                    <span>PROJECT / {project.number}</span>
                    <span className="visual-status">
                      <i /> CASE STUDY
                    </span>
                  </div>
                  {project.image && <img className="project-shot" src={project.image} alt={project.title} />}
<div className={project.image ? "mock-window mock-hidden" : "mock-window"}>
                    <div className="mock-sidebar">
                      <span className="mock-logo">
                        <Icon size={15} />
                      </span>
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="mock-main">
                      <div className="mock-main-top">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="mock-title-line" />
                      <div className="mock-subtitle-line" />
                      <div className="mock-stats">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="mock-table">
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                      </div>
                    </div>
                  </div>
                  <div className="project-visual-bottom">
                    <span>{project.category}</span>
                    <span>0{i + 1} / 03</span>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-info-top">
                    <span className="project-number">
                      {project.number} <span>—</span> FEATURED PROJECT
                    </span>
                    <span className="project-type-icon">
                      <Icon size={19} />
                    </span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-features">
                    {project.features.map((feature) => (
                      <span key={feature}>
                        <Check size={13} />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="tech-list">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <button
                    className="project-link"
                    onClick={() => setActiveProject(i)}
                  >
                    Explore project details <ArrowUpRight size={16} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        {/* <p className="project-disclaimer">
          Before publishing, update each project&apos;s technology list and add
          your actual repository or live-demo links where available.
        </p> */}
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-decoration cta-decoration-one" />
        <div className="cta-decoration cta-decoration-two" />
        <div className="section-wrap cta-content">
          <p className="eyebrow eyebrow-light">04 / GET IN TOUCH</p>
          <h2>
            Let&apos;s Work
            <span> Together.</span>
          </h2>
          <p>
            I&apos;m ready to learn, contribute, and grow with a team that
            values thoughtful development.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-row">
              <label>
                Name
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                />
              </label>
              <label>
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label>
              Subject
              <input
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="What's this about?"
              />
            </label>
            <label>
              Message
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or how I can help you..."
              />
            </label>
            <button
              className="button button-primary"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}{" "}
              <Send size={16} />
            </button>
            {status === "success" && (
              <p className="form-msg form-success">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="form-msg form-error">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">&lt;/&gt;</span>
            <span>
              PORTFOLIO<span className="brand-period"></span>
            </span>
          </a>
          {/* <p>Designed with care · Built with Next.js</p> */}
          <div className="footer-socials">
            <a
              href="https://github.com/panpan1234777-design"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/may-yi-ko-97a926392/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=mayyiko202@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MAY YI KO</span>
          
        </div>
      </footer>

      {activeProject !== null && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setActiveProject(null)}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
            >
              <X size={19} />
            </button>
            <p className="modal-eyebrow">
              PROJECT {projects[activeProject].number} / CASE STUDY
            </p>
            <h2 id="project-modal-title">{projects[activeProject].title}</h2>
            <p>{projects[activeProject].description}</p>
            <h3>Key features</h3>
            <ul>
              {projects[activeProject].features.map((feature) => (
                <li key={feature}>
                  <Check size={15} />
                  {feature}
                </li>
              ))}
            </ul>
            <h3>Technology stack</h3>
            <div className="tech-list modal-tech">
              {projects[activeProject].stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
           {projects[activeProject].repo && (
  <a
    className="button button-secondary modal-repo"
    href={projects[activeProject].repo}
    target="_blank"
    rel="noreferrer"
  >
    <Github size={15} /> View on GitHub
  </a>
)}
            <button
              className="button button-primary modal-done"
              onClick={() => setActiveProject(null)}
            >
              Close details <ArrowRight size={15} />
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
