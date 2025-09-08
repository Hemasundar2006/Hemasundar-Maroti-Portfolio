import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import ScrollAnimations from './ScrollAnimations'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "marothihemasundar03@gmail.com",
      link: "mailto:marothihemasundar03@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 9666180813",
      link: "tel:+919666180813"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "India",
      link: null
    }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/Hemasundar2006",
      color: "hover:text-gray-900"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/hemasundar-maroti",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com/hemasundar-maroti",
      color: "hover:text-blue-400"
    }
  ]

  return (
    <section id="contact" className="py-16 bg-dark-800">
      <div className="section-padding">
        <div className="container-max">
          <ScrollAnimations className="text-center mb-12" delay={0}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Get In <span className="gradient-text gradient-highlight">Touch</span>
            </h2>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto text-highlight">
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and discuss how we can work together!
            </p>
          </ScrollAnimations>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ScrollAnimations className="space-y-8" delay={200}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-highlight">Let's Connect</h3>
                <p className="text-dark-300 leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. I'm particularly interested in <span className="text-primary-300 glow-text">React development projects</span>, 
                  <span className="text-primary-300 glow-text"> AI integration challenges</span>, and <span className="text-primary-300 glow-text">innovative startup ideas</span>.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors duration-200 card-hover floating border border-dark-600">
                    <div className="p-3 bg-primary-900 rounded-lg mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-highlight">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-dark-300 hover:text-primary-400 transition-colors duration-200 contact-highlight"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-dark-300 contact-highlight">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-white mb-4 text-highlight">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-dark-600 rounded-lg text-dark-300 transition-all duration-200 hover:bg-primary-900 ${social.color} wiggle glow-text`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-r from-green-900 to-green-800 p-6 rounded-lg border border-green-700 floating">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <h4 className="font-semibold text-green-300 text-highlight">Available for Projects</h4>
                </div>
                <p className="text-green-200 text-sm">
                  Currently accepting <span className="glow-text">freelance React development projects</span> and open to <span className="glow-text">collaboration opportunities</span>.
                </p>
              </div>
            </ScrollAnimations>

            {/* Contact Form */}
            <ScrollAnimations className="bg-dark-700 p-8 rounded-lg border border-dark-600" delay={400}>
              <h3 className="text-2xl font-bold text-white mb-6 text-highlight">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2 text-highlight">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-dark-500 bg-dark-600 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder-dark-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2 text-highlight">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-dark-500 bg-dark-600 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder-dark-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2 text-highlight">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-dark-500 bg-dark-600 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder-dark-400"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2 text-highlight">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-dark-500 bg-dark-600 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none placeholder-dark-400"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center wiggle"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </ScrollAnimations>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
