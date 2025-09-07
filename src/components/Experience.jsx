import React from 'react'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'
import ScrollAnimations from './ScrollAnimations'

const Experience = () => {
  const experiences = [
    {
      title: "React Developer",
      company: "Spotmies",
      duration: "6 months",
      location: "Remote",
      description: "Worked on bug fixing in the Reaidy admin panel and contributed to various projects including landing page development, Lucy project, and UI responsiveness improvements.",
      achievements: [
        "Fixed critical bugs in the Reaidy admin panel",
        "Contributed to landing page development",
        "Worked on the Lucy project",
        "Improved UI responsiveness across multiple components"
      ],
      current: true
    }
  ]

  return (
    <section id="experience" className="py-16 bg-dark-900">
      <div className="section-padding">
        <div className="container-max">
          <ScrollAnimations className="text-center mb-12" delay={0}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              My journey in web development and the valuable experiences I've gained along the way
            </p>
          </ScrollAnimations>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary-800"></div>

              {experiences.map((exp, index) => (
                <ScrollAnimations key={index} delay={index * 200}>
                  <div className="relative flex items-start justify-center mb-8">
                    {/* Timeline dot */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-800 shadow-lg ${
                      exp.current ? 'animate-pulse' : ''
                    }`}></div>

                    {/* Content card */}
                    <div className="w-full max-w-2xl mx-auto px-4">
                      <div className="bg-dark-800 p-6 rounded-lg shadow-lg card-hover floating border border-dark-700">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                              {exp.title}
                            </h3>
                            <div className="flex items-center text-primary-400 font-semibold mb-2">
                              <Briefcase className="h-4 w-4 mr-2" />
                              {exp.company}
                            </div>
                          </div>
                          {exp.current && (
                            <span className="bg-green-900 text-green-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                              Current
                            </span>
                          )}
                        </div>

                        <div className="flex items-center text-sm text-dark-300 mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.duration}
                          <MapPin className="h-4 w-4 ml-4 mr-2" />
                          {exp.location}
                        </div>

                        <p className="text-dark-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        <div>
                          <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start text-sm text-dark-300">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimations>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <ScrollAnimations className="mt-16 bg-dark-800 rounded-lg shadow-lg p-8 border border-dark-700" delay={400}>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Notable <span className="gradient-text">Achievements</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-primary-900 to-primary-800 rounded-lg floating border border-primary-700">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 pulse-slow">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Top 3 Startup Competition</h4>
                <p className="text-sm text-dark-300">
                  Ranked Top 3 in a startup idea competition for a farmer-focused IVR + AI system
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary-900 to-primary-800 rounded-lg floating-delayed border border-primary-700">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 pulse-slow">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Performance Marketing Masterclass</h4>
                <p className="text-sm text-dark-300">
                  Attended Performance Marketing Masterclass at WsCube Tech (2025)
                </p>
              </div>
            </div>
          </ScrollAnimations>
        </div>
      </div>
    </section>
  )
}

export default Experience