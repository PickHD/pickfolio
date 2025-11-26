import { CSSProperties } from "react";

export default function AboutSection() {
  const skills = [
    { name: "Backend Architecture", color: "blue" },
    { name: "API Development", color: "green" },
    { name: "System Optimization", color: "purple" },
    { name: "Database Design", color: "indigo" },
  ];

  return (
    <section className="premium-section">
      <div className="flex items-center mb-6">
        <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-2xl font-bold serif-heading">About Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="project-card">
            <h3 className="text-xl font-semibold mb-4 accent-blue">
              Background
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Passionate backend developer with 3+ years of experience building
              scalable systems and high-performance APIs. I specialize in
              creating robust digital infrastructure that powers modern
              applications.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              My approach combines technical excellence with business acumen,
              ensuring that solutions not only work flawlessly but also align
              with strategic goals and user needs.
            </p>
          </div>

          <div className="project-card">
            <h3 className="text-xl font-semibold mb-4 accent-green">
              Core Philosophy
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Clean code, scalable architecture, and continuous learning. I
              believe in building systems that are maintainable, efficient, and
              ready for the challenges of tomorrow&apos;s technology landscape.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="project-card">
            <h3 className="text-xl font-semibold mb-6 accent-blue">
              Technical Expertise
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${
                        skill.color === "blue"
                          ? "from-blue-500 to-blue-400"
                          : skill.color === "green"
                          ? "from-green-500 to-green-400"
                          : skill.color === "purple"
                          ? "from-purple-500 to-purple-400"
                          : "from-indigo-500 to-indigo-400"
                      } rounded-full transition-all duration-1000 ease-out`}
                      style={
                        {
                          width: "0%",
                          animation: `fillBar 1.5s ease-out ${
                            index * 0.2
                          }s forwards`,
                        } as CSSProperties
                      }
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fillBar {
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  );
}
