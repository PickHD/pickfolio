export default function WorkExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Current Company",
      period: "2023 - Present",
      type: "Full-time",
      description:
        "Building scalable web applications using modern frameworks and cloud technologies.",
      achievements: [
        "Led migration to microservices",
        "Improved API performance by 60%",
        "Mentored 3 junior developers",
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
      accent: "blue",
    },
    {
      title: "Backend Developer",
      company: "Previous Company",
      period: "2021 - 2023",
      type: "Full-time",
      description:
        "Developed RESTful APIs and microservices architecture for high-traffic applications.",
      achievements: [
        "Built core API services",
        "Implemented caching strategies",
        "Reduced response times by 40%",
      ],
      technologies: ["Python", "FastAPI", "Docker", "Redis", "MongoDB"],
      accent: "green",
    },
    {
      title: "Junior Backend Developer",
      company: "First Company",
      period: "2020 - 2021",
      type: "Full-time",
      description:
        "Developed and maintained backend systems for various client projects.",
      achievements: [
        "Contributed to 15+ client projects",
        "Implemented testing frameworks",
        "Optimized database queries",
      ],
      technologies: ["Python", "Django", "MySQL", "Git", "Jenkins"],
      accent: "purple",
    },
  ];

  return (
    <section className="premium-section">
      <div className="flex items-center mb-8">
        <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          <path d="M6 12a1 1 0 011-1h4A1 1 0 110 2H7a1 1 0 01-1-1z" />
        </svg>
        <h2 className="text-2xl font-bold serif-heading">
          Professional Journey
        </h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="project-card">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <h3
                      className={`text-xl font-semibold mb-2 accent-${exp.accent}`}
                    >
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                      <span className="tech-badge">{exp.type}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`accent-${exp.accent} mt-1`}>▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br from-${exp.accent}-500 to-${exp.accent}-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4`}
                    >
                      {index + 1}
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>Experience</p>
                      <p className="font-bold text-gray-300">{exp.period}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
