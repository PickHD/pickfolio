export default function SideProjectsSection() {
  const projects = [
    {
      name: 'API Performance Monitor',
      description: 'Real-time API monitoring tool with performance metrics and alerting system for microservices.',
      technologies: ['Node.js', 'Redis', 'WebSocket', 'Chart.js'],
      features: ['⚡ Real-time monitoring', '📊 Analytics dashboard', '🚀 Production ready'],
      status: 'live',
      accent: 'blue',
      github: 'https://github.com/example/project1'
    },
    {
      name: 'Task Queue Manager',
      description: 'Distributed task processing system with priority queues and failure retry mechanisms.',
      technologies: ['Python', 'Celery', 'PostgreSQL', 'Docker'],
      features: ['🔄 Async processing', '⚙️ Configurable', '🛡️ Fault-tolerant'],
      status: 'live',
      accent: 'green',
      github: 'https://github.com/example/project2'
    },
    {
      name: 'Database Migration Tool',
      description: 'Automated database schema migration tool with version control and rollback capabilities.',
      technologies: ['Go', 'Docker', 'Kubernetes', 'PostgreSQL'],
      features: ['🗃️ Database agnostic', '🔄 Version control', '📦 Containerized'],
      status: 'beta',
      accent: 'purple',
      github: 'https://github.com/example/project3'
    },
    {
      name: 'Rate Limiter Service',
      description: 'High-performance rate limiting service with distributed algorithms and low latency.',
      technologies: ['Rust', 'Redis', 'gRPC', 'Docker'],
      features: ['⚡ High-speed', '🌐 Distributed', '🔒 Security focused'],
      status: 'development',
      accent: 'indigo',
      github: 'https://github.com/example/project4'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      live: { color: 'green', text: 'Live', bg: 'bg-green-500' },
      beta: { color: 'blue', text: 'Beta', bg: 'bg-blue-500' },
      development: { color: 'yellow', text: 'Dev', bg: 'bg-yellow-500' }
    };
    return statusConfig[status as keyof typeof statusConfig];
  };

  return (
    <section className="premium-section">
      <div className="flex items-center mb-8">
        <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        <h2 className="text-2xl font-bold serif-heading">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const statusBadge = getStatusBadge(project.status);
          return (
            <div key={index} className="project-card group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-${project.accent} transition-colors duration-200 group-hover:text-${project.accent}-300`}
                  >
                    {project.name}
                  </a>
                </h3>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 ${statusBadge.bg} rounded-full`}></span>
                  <span className="text-xs text-gray-500">{statusBadge.text}</span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-xs font-semibold text-white mb-2 uppercase tracking-wider">Features</h4>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, i) => (
                    <span key={i} className="text-xs text-gray-400 bg-gray-900 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-xs font-semibold text-white mb-2 uppercase tracking-wider">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`tech-badge border-${project.accent}-400 hover:border-${project.accent}-300 hover:bg-${project.accent}-50`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm ${project.accent} hover:underline transition-all duration-200`}
                >
                  View Code
                </a>
                {project.status === 'live' && (
                  <a
                    href="#demo"
                    className={`text-sm ${project.accent} hover:underline transition-all duration-200`}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}