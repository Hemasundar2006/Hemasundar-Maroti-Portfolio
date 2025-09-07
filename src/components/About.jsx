import React from 'react'
import { MapPin, GraduationCap, Languages, Heart } from 'lucide-react'
import ScrollAnimations from './ScrollAnimations'

const About = () => {
  return (
    <section id="about" className="pt-20 pb-16 bg-dark-800">
      <div className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Basic Info */}
            <ScrollAnimations className="text-center lg:text-left" delay={0}>
              <div className="relative inline-block">
                <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-primary-900 to-primary-800 rounded-full flex items-center justify-center mb-6 floating">
                  <div className="w-60 h-60 bg-dark-700 rounded-full flex items-center justify-center shadow-lg glow overflow-hidden">
                    <img 
                      src="/hemasundar.jpg" 
                      alt="Hemasundar Maroti" 
                      className="w-52 h-52 rounded-full object-cover pulse-slow"
                    />
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Hi, I'm <span className="gradient-text">Hemasundar Maroti</span>
              </h1>
              
              <p className="text-xl text-dark-300 mb-6">
                B.Tech Student & React Developer passionate about building innovative web solutions
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#projects" className="btn-primary wiggle">
                  View My Work
                </a>
                <a href="#contact" className="btn-outline">
                  Get In Touch
                </a>
              </div>
            </ScrollAnimations>

            {/* Right Column - Detailed Info */}
            <ScrollAnimations className="space-y-8" delay={200}>
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">About Me</h2>
                <p className="text-dark-300 leading-relaxed mb-6">
                  I'm a passionate 2nd-year B.Tech student in Electronics and Communication Engineering, 
                  with a strong focus on web development. Currently working as a React Developer at Spotmies, 
                  I love creating user-friendly applications and exploring the intersection of technology 
                  and real-world problem solving.
                </p>
                <p className="text-dark-300 leading-relaxed">
                  My interests span from freelancing in web development to building innovative startup ideas 
                  involving AI, IVR systems, and agriculture support. I'm particularly excited about creating 
                  custom analytics systems and contributing to projects that make a real difference in people's lives.
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-dark-700 p-4 rounded-lg card-hover floating border border-dark-600">
                  <div className="flex items-center space-x-3 mb-2">
                    <GraduationCap className="h-5 w-5 text-primary-400" />
                    <h3 className="font-semibold text-white">Education</h3>
                  </div>
                  <p className="text-sm text-dark-300">
                    B.Tech in ECE<br />
                    2nd Year Student
                  </p>
                </div>

                <div className="bg-dark-700 p-4 rounded-lg card-hover floating-delayed border border-dark-600">
                  <div className="flex items-center space-x-3 mb-2">
                    <MapPin className="h-5 w-5 text-primary-400" />
                    <h3 className="font-semibold text-white">Location</h3>
                  </div>
                  <p className="text-sm text-dark-300">India</p>
                </div>

                <div className="bg-dark-700 p-4 rounded-lg card-hover floating border border-dark-600">
                  <div className="flex items-center space-x-3 mb-2">
                    <Languages className="h-5 w-5 text-primary-400" />
                    <h3 className="font-semibold text-white">Languages</h3>
                  </div>
                  <p className="text-sm text-dark-300">
                    English, Telugu, Hindi
                  </p>
                </div>

                <div className="bg-dark-700 p-4 rounded-lg card-hover floating-delayed border border-dark-600">
                  <div className="flex items-center space-x-3 mb-2">
                    <Heart className="h-5 w-5 text-primary-400" />
                    <h3 className="font-semibold text-white">Interests</h3>
                  </div>
                  <p className="text-sm text-dark-300">
                    Web Development, AI, Startups
                  </p>
                </div>
              </div>
            </ScrollAnimations>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
