import React from 'react'
import { Code, Heart, Mail, Github, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-white py-12 border-t border-dark-800">
      <div className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Code className="h-8 w-8 text-primary-400" />
                
                <span className="text-xl font-bold">Hemasundar Maroti</span>
              </div>
              <p className="text-dark-400 leading-relaxed">
                B.Tech Student & React Developer passionate about building innovative web solutions 
                and exploring the intersection of technology and real-world problem solving.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:marothihemasundar03@gmail.com"
                  className="p-2 bg-dark-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/Hemasundar2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-dark-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hemasundar-maroti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-dark-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-dark-400 hover:text-white transition-colors duration-200">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-dark-400 hover:text-white transition-colors duration-200">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-dark-400 hover:text-white transition-colors duration-200">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-dark-400 hover:text-white transition-colors duration-200">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-dark-400 hover:text-white transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center text-dark-400">
                  <Mail className="h-4 w-4 mr-3" />
                  <span>marothihemasundar03@gmail.com</span>
                </div>
                <div className="flex items-center text-dark-400">
                  <span className="text-sm">📍 India</span>
                </div>
                <div className="text-dark-400 text-sm">
                  <p>Available for freelance projects</p>
                  <p>Open to collaboration opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-dark-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-dark-400 text-sm">
                © {currentYear} Hemasundar Maroti. All rights reserved.
              </div>
              {/* <div className="flex items-center text-dark-400 text-sm">
                <span>Made with</span>
                <Heart className="h-4 w-4 mx-1 text-red-500" />
                <span>using React & Vite</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
