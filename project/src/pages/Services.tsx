import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cloud, Users, Code, Server, Shield, Zap, Settings, Monitor, Database } from 'lucide-react';
import cloudAutomationImg from "../assets/services/cloud-automation.jpg";


const Services: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Automation',
      slug: 'cloud-automation',
      description: 'Transform your infrastructure with intelligent cloud automation solutions.',
      color: 'from-blue-600 to-blue-700',
      image: cloudAutomationImg,
      imageAlt: 'Cloud automation in data center',
      features: [
        'Infrastructure as Code (IaC)',
        'CI/CD Pipeline Setup',
        'Container Orchestration',
        'Monitoring & Alerting',
        'Cost Optimization',
        'Security Compliance'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      icon: Users,
      title: 'Manpower & Consulting',
      slug: 'manpower-consulting',
      description: 'Expert consulting and skilled professionals to accelerate your projects.',
      features: [
        'Technical Consulting',
        'Staff Augmentation',
        'Project Management',
        'Digital Transformation',
        'Technology Strategy',
        'Process Optimization'
      ],
      color: 'from-red-600 to-red-700',
      technologies: ['Agile', 'Scrum', 'DevOps', 'ITIL', 'Six Sigma', 'PMP']
    },
    {
      icon: Code,
      title: 'Web Development',
      slug: 'web-development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Development',
        'Performance Optimization',
        'SEO Implementation'
      ],
      color: 'from-purple-600 to-purple-700',
      technologies: ['React', 'Node.js', 'Python', 'Next.js', 'TypeScript', 'GraphQL']
    }
  ];

    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, [location]);

  const additionalServices = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Complete infrastructure management and optimization services.'
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Comprehensive security audits and implementation services.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'System and application performance tuning and optimization.'
    },
    {
      icon: Settings,
      title: 'Integration Services',
      description: 'Seamless integration of third-party systems and APIs.'
    },
    {
      icon: Monitor,
      title: 'Monitoring & Support',
      description: '24/7 monitoring and technical support for your systems.'
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Database design, migration, and analytics solutions.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-900 text-white py-20 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to drive innovation and growth for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our three primary service areas provide comprehensive coverage for all your technology needs.
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <section key={service.title} id={service.slug} className="scroll-mt-24">
              <motion.div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${service.color}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  {service.image ? (
                    <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow">
                      <img
                        src={service.image}
                        alt={service.imageAlt || service.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                    </div>
                  ) : (
                    <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 text-white h-80 flex items-center justify-center`}>
                      <div className="text-center">
                        <service.icon className="h-24 w-24 mx-auto mb-4 opacity-80" />
                        <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                        <p className="text-lg opacity-90">Professional Solutions</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </section>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supplementary services to support and enhance your technology infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 mb-4 group-hover:from-red-600 group-hover:to-blue-600 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your requirements and current infrastructure to understand your needs.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed project planning with timelines, milestones, and resource allocation.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Agile development and deployment with regular updates and feedback cycles.'
              },
              {
                step: '04',
                title: 'Support',
                description: 'Ongoing maintenance, monitoring, and support to ensure optimal performance.'
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-red-200 to-blue-200 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
        <section className="py-20 bg-white text-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Let's discuss how our services can help transform your business and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  Contact Us Today
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-slate-300 text-slate-800 font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-200"
                >
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

    </div>
  );
};

export default Services;