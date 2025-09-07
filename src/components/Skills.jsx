import React from 'react'
import { Code, Server, Database, Wrench, Star } from 'lucide-react'
import ScrollAnimations from './ScrollAnimations'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "React.js", level: 85, color: "bg-blue-500" },
        { name: "HTML", level: 90, color: "bg-orange-500" },
        { name: "CSS", level: 85, color: "bg-blue-600" },
        { name: "JavaScript", level: 80, color: "bg-yellow-500" },
        { name: "Tailwind CSS", level: 75, color: "bg-cyan-500" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 70, color: "bg-green-500" },
        { name: "Express.js", level: 65, color: "bg-gray-600" }
      ]
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", level: 70, color: "bg-green-600" }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "GitHub", level: 80, color: "bg-gray-800" },
        { name: "AI Tools", level: 75, color: "bg-purple-500" }
      ]
    }
  ]

  const interests = [
    {
      title: "Freelancing",
      description: "Web development with React focus",
      icon: "💼"
    },
    {
      title: "Startup Ideas",
      description: "AI, IVR systems, and agriculture support",
      icon: "🚀"
    },
    {
      title: "Analytics Systems",
      description: "Custom analytics for websites",
      icon: "📊"
    }
  ]

  return (
    <section id="skills" className="py-16 bg-dark-900">
      <div className="section-padding">
        <div className="container-max">
          <ScrollAnimations className="text-center mb-12" delay={0}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and areas of interest
            </p>
          </ScrollAnimations>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <ScrollAnimations key={categoryIndex} delay={categoryIndex * 200}>
                <div className="bg-dark-800 rounded-lg shadow-lg p-6 card-hover border border-dark-700">
                  <div className="flex items-center mb-6">
                    <div className="p-2 bg-primary-900 rounded-lg mr-3 floating">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="text-sm text-dark-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-dark-600 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              </ScrollAnimations>
            ))}
          </div>

          {/* Interests Section */}
          <ScrollAnimations className="bg-dark-800 rounded-lg shadow-lg p-8 border border-dark-700" delay={400}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Areas of <span className="gradient-text">Interest</span>
              </h3>
              <p className="text-dark-300">
                What drives my passion and keeps me motivated in the tech world
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-primary-900 to-primary-800 rounded-lg card-hover floating border border-primary-700">
                  <div className="text-4xl mb-4">{interest.icon}</div>
                  <h4 className="font-semibold text-white mb-2">{interest.title}</h4>
                  <p className="text-sm text-dark-300">{interest.description}</p>
                </div>
              ))}
            </div>
          </ScrollAnimations>

          {/* Learning Journey */}
          <ScrollAnimations className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-8 text-white" delay={600}>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Continuous Learning Journey</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                As a 2nd-year B.Tech student, I'm constantly expanding my knowledge and skills. 
                My focus areas include mastering React ecosystem, exploring AI integration, 
                and building real-world applications that solve meaningful problems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full floating">
                  <Star className="h-4 w-4 mr-2" />
                  <span className="text-sm">React Specialist</span>
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full floating-delayed">
                  <Star className="h-4 w-4 mr-2" />
                  <span className="text-sm">AI Enthusiast</span>
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full floating">
                  <Star className="h-4 w-4 mr-2" />
                  <span className="text-sm">Problem Solver</span>
                </div>
              </div>
            </div>
          </ScrollAnimations>
        </div>
      </div>
    </section>
  )
}

export default Skills
