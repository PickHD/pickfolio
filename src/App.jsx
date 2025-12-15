import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Download,
  Server,
  Database,
  Code,
  Terminal,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

// --- Data Configuration ---
const LINKS = {
  github: 'https://github.com/PickHD',
  linkedin: 'https://www.linkedin.com/in/taufik-januar-rachman-777141193/',
  instagram: 'https://www.instagram.com/taufikjanuarr',
  gdrive: '#', // REPLACE THIS with your actual Google Drive Resume Link
  email: 'mailto:your.email@example.com', // Update this
};

const SKILLS = [
  { name: 'Backend Architecture', icon: <Server size={20} /> },
  { name: 'Golang / Java', icon: <Code size={20} /> },
  { name: 'Microservices', icon: <Terminal size={20} /> },
  { name: 'PostgreSQL / Redis', icon: <Database size={20} /> },
  { name: 'Docker & Kubernetes', icon: <Server size={20} /> },
  { name: 'System Design', icon: <Code size={20} /> },
];

const EXPERIENCE = [
  {
    role: 'Backend Engineer',
    company: 'Current Company (or Previous)',
    period: '202X - Present',
    description:
      'Architecting scalable microservices and optimizing database queries for high-traffic environments.',
  },
  {
    role: 'Software Engineer',
    company: 'Previous Company',
    period: '202X - 202X',
    description:
      'Developed RESTful APIs and integrated third-party payment gateways ensuring 99.9% uptime.',
  },
];

const PROJECTS = [
  {
    title: 'High Performance API',
    desc: 'A robust API gateway built with Go and gRPC handling concurrent requests efficiently.',
    tech: ['Go', 'gRPC', 'Docker'],
    link: LINKS.github,
  },
  {
    title: 'E-Commerce Backend',
    desc: 'Microservice architecture for an e-commerce platform featuring distributed transactions.',
    tech: ['Java', 'Spring Boot', 'Kafka'],
    link: LINKS.github,
  },
  {
    title: 'Data Pipeline Tool',
    desc: 'Automated ETL pipeline using Python to process large datasets for analytics.',
    tech: ['Python', 'AWS', 'SQL'],
    link: LINKS.github,
  },
];

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-dark-900/80 border-b border-white/5 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="from-primary-400 to-accent cursor-pointer bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
          TJR.
        </div>
        <div className="hidden space-x-8 md:flex">
          {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-primary-400 cursor-pointer text-sm font-medium tracking-wide transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
        <a
          href={LINKS.github}
          target="_blank"
          rel="noreferrer"
          className="text-slate-300 transition-colors hover:text-white"
        >
          <Github size={20} />
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Glow Effect */}
      <div className="bg-primary-600/20 absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-[128px]" />
      <div className="bg-accent/10 absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full blur-[128px]" />

      <div className="z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent mb-4 block font-medium tracking-wider">HELLO, I'M</span>
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">Taufik Januar Rachman</h1>
          <h2 className="mb-8 text-2xl font-light text-slate-400 md:text-3xl">Backend Engineer</h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-400">
            Building scalable systems, robust APIs, and efficient database architectures. Passionate
            about cloud infrastructure and high-performance computing.
          </p>

          <div className="flex justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={LINKS.gdrive}
              target="_blank"
              rel="noreferrer"
              className="bg-primary-600 hover:bg-primary-500 shadow-primary-600/20 flex items-center gap-2 rounded-full px-8 py-3 font-semibold text-white shadow-lg transition-all"
            >
              <Download size={18} /> Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-dark-800 hover:bg-dark-700 border-dark-700 rounded-full border px-8 py-3 font-semibold text-white transition-all"
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12">
    <h3 className="text-accent mb-2 font-medium tracking-widest">{subtitle}</h3>
    <h2 className="text-3xl font-bold text-white">{title}</h2>
    <div className="bg-primary-600 mt-4 h-1 w-20 rounded-full"></div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-dark-800/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="Technical Arsenal" subtitle="SKILLS" />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-dark-800 border-dark-700 hover:border-primary-500/50 hover:shadow-primary-500/10 group flex flex-col items-center justify-center gap-4 rounded-xl border p-6 transition-all hover:shadow-lg"
            >
              <div className="group-hover:text-primary-400 text-slate-400 transition-colors">
                {skill.icon}
              </div>
              <span className="text-center text-sm font-medium text-slate-200">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader title="My Journey" subtitle="EXPERIENCE" />

        <div className="border-dark-700 relative ml-3 space-y-12 border-l pl-8 md:ml-0 md:pl-0">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="bg-primary-600 ring-dark-900 absolute top-2 left-[-9px] hidden h-4 w-4 rounded-full ring-4 md:block" />

              <div className="items-start gap-8 md:grid md:grid-cols-12">
                <div className="mb-2 pt-1 font-mono text-sm text-slate-400 md:col-span-4 md:mb-0 md:text-right">
                  {exp.period}
                </div>
                <div className="md:col-span-8">
                  <h3 className="mb-1 text-xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-primary-400 mb-4 font-medium">{exp.company}</h4>
                  <p className="text-sm leading-relaxed text-slate-400">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-dark-800/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="Featured Work" subtitle="PROJECTS" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="bg-dark-800 border-dark-700 hover:border-primary-500/30 flex flex-col overflow-hidden rounded-2xl border transition-all"
            >
              <div className="flex-1 p-8">
                <div className="mb-6 flex items-start justify-between">
                  <div className="bg-dark-900 text-primary-400 rounded-lg p-3">
                    <Code size={24} />
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 transition-colors hover:text-white"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-400">{project.desc}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-primary-300 bg-primary-900/30 rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary-400 inline-flex items-center gap-2 font-medium text-white transition-colors"
          >
            View full project archive <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-dark-800 bg-dark-900 border-t py-12 text-center">
      <div className="mb-8 flex justify-center gap-8">
        {[
          { icon: <Github />, link: LINKS.github },
          { icon: <Linkedin />, link: LINKS.linkedin },
          { icon: <Instagram />, link: LINKS.instagram },
          { icon: <Mail />, link: LINKS.email },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary-400 text-slate-400 transition-all hover:scale-110"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p className="text-sm text-slate-600">
        © {new Date().getFullYear()} Taufik Januar Rachman. Built with React & Tailwind.
      </p>
    </footer>
  );
};

function App() {
  return (
    <div className="bg-dark-900 selection:bg-primary-500 min-h-screen text-slate-300 selection:text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
