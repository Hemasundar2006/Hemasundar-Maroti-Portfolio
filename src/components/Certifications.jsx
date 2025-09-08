import React from 'react'
import { Award, ExternalLink, Calendar } from 'lucide-react'
import ScrollAnimations from './ScrollAnimations'

const Certifications = () => {
  const certifications = [
    {
      title: 'Certificate of Participation in SEO Training',
      program: '2-Day SEO Training Program',
      recipient: 'Hema Sundar Maroti',
      issuer: 'Trybinc',
      date: 'March 23 & 24, 2025',
      location: 'Visakhapatnam',
      certificateNumber: 'TRYBINC/COP/066',
      link: null,
      description:
        'This certificate acknowledges successful participation and completion of the program, which provided practical knowledge and skills in Search Engine Optimization (SEO).'
    },
    {
      title: 'Performance Marketing Masterclass',
      issuer: 'WsCube Tech',
      date: '2025',
      link: null,
      description: 'Attended an intensive masterclass covering modern performance marketing strategies.'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Spotmies (Internal)',
      date: '2024',
      link: null,
      description: 'Recognized for contributions in React-based projects and UI improvements.'
    }
  ]

  return (
    <section id="certifications" className="py-16 bg-dark-800">
      <div className="section-padding">
        <div className="container-max">
          <ScrollAnimations className="text-center mb-12" delay={0}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Professional <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              A selection of certifications and workshops highlighting my continual learning
            </p>
          </ScrollAnimations>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <ScrollAnimations key={idx} delay={idx * 150}>
                <div className="bg-dark-700 p-6 rounded-lg border border-dark-600 card-hover floating">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="p-2 bg-primary-900 rounded-lg mr-3">
                        <Award className="h-6 w-6 text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold leading-tight">{cert.title}</h3>
                        <p className="text-sm text-dark-300">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-dark-300">
                      <Calendar className="h-4 w-4 mr-2" />
                      {cert.date}
                    </div>
                  </div>
                  {cert.program && (
                    <p className="text-dark-300 text-sm mb-2">
                      <span className="text-white/90">Program:</span> {cert.program}
                    </p>
                  )}
                  {cert.recipient && (
                    <p className="text-dark-300 text-sm mb-2">
                      <span className="text-white/90">Recipient:</span> {cert.recipient}
                    </p>
                  )}
                  {cert.location && (
                    <p className="text-dark-300 text-sm mb-2">
                      <span className="text-white/90">Location:</span> {cert.location}
                    </p>
                  )}
                  {cert.certificateNumber && (
                    <p className="text-dark-300 text-sm mb-2">
                      <span className="text-white/90">Certificate No:</span> {cert.certificateNumber}
                    </p>
                  )}
                  {cert.description && (
                    <p className="text-dark-300 text-sm mb-4 leading-relaxed">{cert.description}</p>
                  )}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 text-sm"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> View certificate
                    </a>
                  )}
                </div>
              </ScrollAnimations>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications


