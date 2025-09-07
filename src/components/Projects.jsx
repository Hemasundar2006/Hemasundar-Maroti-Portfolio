import React from 'react'
import { ExternalLink, Github, Code, Database, Smartphone, Globe, Users, Zap } from 'lucide-react'
import ScrollAnimations from './ScrollAnimations'

const Projects = () => {
  const projects = [
    {
      title: "Telugu Info Website",
      description: "A comprehensive web platform that provides educational and informational content in Telugu with a separate frontend & backend architecture.",
      image: "/api/placeholder/600/400",
      features: [
       "PDF → Direct access to attached study materials and resources",
       "Comprehensive Job Details → Supports fields for Job Title, Company, Location, Dates, Salary, Job Type, Work Mode, Application Link, YouTube Link, and PDF attachments.",
       "Search & Filter Options → Users can easily find jobs based on location, job type, or company.",
       "Automatic Email Notifications → Whenever a new job post is created, all registered users receive an email alert.",
       "Responsive Design → Optimized for both desktop and mobile devices"
      ],
      techStack: ["React.js", "Node.js", "Express", "MongoDB"],
      category: "Full Stack",
      status: "Completed",
      link: "https://telugu-info.vercel.app/"
    },
    {
      title: "Prani Mitra Website",
      description: "A farmer-friendly platform that connects farmers with real-time information and AI-driven support through IVR and modern web technologies.",
      image: "/api/placeholder/600/400",
      features: [
        "IVR-based system for farmers to call toll-free number and interact in Telugu",
        "AI-powered Q&A on farming queries (voice + text support)",
        "SMS integration for updates and alerts",
        "User-friendly UI with multi-language support"
      ],
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "AI/IVR APIs"],
      category: "AI/IVR Integration",
      status: "Completed",
      link: "https://prani-mitra1.vercel.app/"
    }
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Full Stack":
        return <Code className="h-5 w-5" />
      case "AI/IVR Integration":
        return <Smartphone className="h-5 w-5" />
      default:
        return <Globe className="h-5 w-5" />
    }
  }

  return (
    <section id="projects" className="py-16 bg-dark-800">
      <div className="section-padding">
        <div className="container-max">
          <ScrollAnimations className="text-center mb-12" delay={0}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              Explore my recent projects that showcase my skills in web development, AI integration, and problem-solving
            </p>
          </ScrollAnimations>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimations key={index} delay={index * 200}>
                <div className="bg-dark-700 rounded-lg shadow-lg overflow-hidden card-hover border border-dark-600 gradient-border">
                {/* Project Image/Logo */}
                <div className="h-48 bg-gradient-to-br from-primary-900 to-primary-800 flex items-center justify-center">
                  {project.title === "Telugu Info Website" ? (
                    <div className="text-center">
                      <img 
                        src="/teluguinfo-logo.png" 
                        alt="Telugu Info Logo" 
                        className="w-24 h-24 mx-auto mb-3 floating object-contain"
                      />
                      <p className="text-sm text-primary-300 font-medium">{project.category}</p>
                    </div>
                  ) : project.title === "Prani Mitra Website" ? (
                    <div className="text-center">
                      <img 
                        src="/PraniMitra_logo1.png" 
                        alt="Prani Mitra Logo" 
                        className="w-24 h-24 mx-auto mb-3 floating object-contain"
                      />
                      <p className="text-sm text-primary-300 font-medium">{project.category}</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3 floating">
                        {getCategoryIcon(project.category)}
                      </div>
                      <p className="text-sm text-primary-300 font-medium">{project.category}</p>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="bg-green-900 text-green-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {project.status}
                        </span>
                        <span className="bg-primary-900 text-primary-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2 flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-primary-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-dark-300">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-sm text-primary-400 font-medium">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-2 flex items-center">
                      <Database className="h-4 w-4 mr-2 text-primary-400" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="bg-dark-600 text-dark-200 text-xs font-medium px-2.5 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center wiggle"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </a>
                    <button className="px-4 py-2 border border-dark-500 hover:border-primary-500 hover:text-primary-400 text-dark-300 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                </div>
              </ScrollAnimations>
            ))}
          </div>

          {/* Project Stats */}
          <ScrollAnimations className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6" delay={400}>
            <div className="text-center p-6 bg-gradient-to-br from-primary-900 to-primary-800 rounded-lg floating border border-primary-700">
              <div className="text-3xl font-bold text-primary-400 mb-2">2</div>
              <div className="text-sm text-dark-300">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary-900 to-primary-800 rounded-lg floating-delayed border border-primary-700">
              <div className="text-3xl font-bold text-primary-400 mb-2">6+</div>
              <div className="text-sm text-dark-300">Months Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary-900 to-primary-800 rounded-lg floating border border-primary-700">
              <div className="text-3xl font-bold text-primary-400 mb-2">3</div>
              <div className="text-sm text-dark-300">Languages</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary-900 to-primary-800 rounded-lg floating-delayed border border-primary-700">
              <div className="text-3xl font-bold text-primary-400 mb-2">Top 3</div>
              <div className="text-sm text-dark-300">Competition Rank</div>
            </div>
          </ScrollAnimations>
        </div>
      </div>
    </section>
  )
}

export default Projects
