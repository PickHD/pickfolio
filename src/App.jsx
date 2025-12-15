import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Rocket,
} from 'lucide-react';

// --- Data Configuration ---
const LINKS = {
  github: 'https://github.com/PickHD',
  linkedin: 'https://www.linkedin.com/in/taufik-januar-rachman-777141193/',
  instagram: 'https://www.instagram.com/taufikjanuarr',
  gdrive: 'https://drive.google.com/file/d/1n0z48InPwA0q_US8RHSOKX0I6v7IvDEb/view?usp=sharing',
  email: 'mailto:taufikjanuar35@gmail.com',
};

const SKILLS = [
  { name: 'RESTful API, GRPC, GraphQL', icon: <Server size={20} /> },
  { name: 'Golang / Java', icon: <Code size={20} /> },
  {
    name: 'Building Clean / Hexagonal Architechture',
    icon: <Terminal size={20} />,
  },
  { name: 'MySQL, PostgreSQL, Redis, MongoDB', icon: <Database size={20} /> },
  { name: 'Docker', icon: <Rocket size={20} /> },
];

const EXPERIENCE = [
  {
    role: 'Backend Engineer (Fulltime)',
    company: 'PT SEMESTA QUANTUM ETERNITI',
    period: 'Mar 2025 - Present',
    description: [
      'Collaborating with Product Managers, Tech Leads, QA, and Frontend teams on projects.',
      'Defining API contracts based on Product Requirement Documents (PRD).',
      'Designing ERD architecture aligned with business requirements.',
      'Implementing well-structured, maintainable code using Clean Architecture principles.',
      'Conducting code reviews for Pull Requests from other Backend team members.',
      'Resolving bugs and issues identified during QA testing.',
    ],
  },
  {
    role: 'Backend Engineer (Fulltime)',
    company: 'PT ANARGYA APTANA INDONESIA',
    period: 'Nov 2023 - Jan 2025 (1 Year 3 months)',
    description: [
      'Collaborated with clients, DevOps, internal teams, and Frontend developers.',
      'Implemented robust APIs based on technical requirements.',
      'Implemented Unit Tests to ensure system stability.',
      'Resolved bugs and maintained application performance.',
      'Optimized database query performance for high-load scenarios.',
      'Designed Entity Relationship Diagrams (ERD) for scalable databases.',
    ],
  },
  {
    role: 'Backend Developer (Contract)',
    company: 'PT SAGARA ASIA TEKNOLOGI',
    period: 'June 2021 - May 2023 (2 Years)',
    description: [
      'Collaborated with client teams and Frontend developers on feature delivery.',
      'Implemented RESTful APIs based on technical specifications.',
      'Wrote comprehensive API documentation using Swagger 2.0.',
      'Implemented Unit Tests to ensure code reliability and coverage.',
      'Architected Entity Relationship Diagrams (ERD) for complex systems.',
    ],
  },
];

const PROJECTS = [
  {
    title: 'Singkatin API',
    desc: 'Microservice-based URL shortener implementing Clean Architecture. Includes a functional dashboard for registered users to manage links.',
    tech: [
      'Go',
      'gRPC',
      'RESTful API',
      'RabbitMQ',
      'Protobuf',
      'Jaeger',
      'MongoDB',
      'Logrus',
      'Docker Compose',
      'Docker',
      'Redis',
      'Minio',
    ],
    link: LINKS.github + '/singkatin-revamp',
  },
  {
    title: 'Exam API',
    desc: 'Monolithic online exam platform built with Hexagonal Architecture. Features admin capabilities for bulk uploading classes, exams, and questions via Excel.',
    tech: ['Go', 'RESTful API', 'Docker', 'Docker Compose', 'PostgreSQL', 'Excelize', 'Minio'],
    link: LINKS.github + '/exam-api',
  },
];

// --- Components ---

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 10) + 1;
      current = Math.min(current + increment, 100);
      setText(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 200);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="bg-dark-900 fixed inset-0 z-50 flex flex-col items-center justify-center text-slate-200"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      <div className="mb-4 font-mono text-4xl font-bold text-white">{text}%</div>

      {/* Custom Progress Bar */}
      <div className="bg-dark-800 border-dark-700 h-2 w-64 overflow-hidden rounded-full border">
        <motion.div
          className="bg-primary-600 h-full shadow-[0_0_15px_#2563eb]"
          initial={{ width: '0%' }}
          animate={{ width: `${text}%` }}
        />
      </div>
    </motion.div>
  );
};

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
        <div className="flex cursor-pointer items-center gap-3">
          <div className="group relative">
            <div className="from-primary-400 to-accent absolute -inset-0.5 rounded-full bg-gradient-to-r opacity-75 blur transition duration-200 group-hover:opacity-100"></div>
            <img
              src="https://github.com/PickHD.png"
              alt="TJR Avatar"
              className="border-dark-900 relative h-10 w-10 rounded-full border-2 object-cover"
            />
          </div>
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
          href={LINKS.email}
          target="_blank"
          rel="noreferrer"
          className="text-slate-300 transition-colors hover:text-white"
        >
          <Mail size={20} />
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
          <h1 className="mb-6 font-mono text-5xl font-bold tracking-tighter text-white md:text-7xl">
            Taufik Januar Rachman
          </h1>
          <h2 className="mb-8 text-2xl font-light text-slate-400 md:text-3xl">Backend Engineer</h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-400">
            Innovative individual with proven success evaluating requirements for software
            development projects to design innovative solutions. Out-of-the-box thinker and problem
            solver dedicated to improving performance. Works well in teams and consistently delivers
            to deadlines.
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

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
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

                  <ul className="list-outside list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-400">
                    {exp.description.map((descItem, i) => (
                      <li key={i} className="marker:text-primary-500 pl-1">
                        {descItem}
                      </li>
                    ))}
                  </ul>
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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-dark-900 selection:bg-primary-500 min-h-screen font-sans text-slate-300 selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <React.Fragment>
            <Navbar />
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Footer />
          </React.Fragment>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
