import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Zap, Heart, Target, Coffee } from 'lucide-react';

const Careers: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest technologies and tools in the industry.'
    },
    {
      icon: Users,
      title: 'Collaborative Team',
      description: 'Join a team of passionate professionals who support each other.'
    },
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Clear career progression paths and professional development opportunities.'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and comprehensive benefits package.'
    },
    {
      icon: Coffee,
      title: 'Great Culture',
      description: 'Inclusive, innovative culture that values creativity and collaboration.'
    },
    {
      icon: Briefcase,
      title: 'Exciting Projects',
      description: 'Work on challenging projects that make a real impact on businesses.'
    }
  ];

  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / On-site',
      type: 'Full-time',
      description: 'We\'re looking for an experienced full-stack developer to join our web development team.'
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Remote / On-site',
      type: 'Full-time',
      description: 'Lead cloud automation projects and help design scalable infrastructure solutions.'
    },
    {
      title: 'Technical Consultant',
      department: 'Consulting',
      location: 'Remote / On-site',
      type: 'Full-time',
      description: 'Work directly with clients to understand their needs and provide technical guidance.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Operations',
      location: 'Remote / On-site',
      type: 'Full-time',
      description: 'Build and maintain CI/CD pipelines and infrastructure automation tools.'
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
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Be part of a dynamic team that's shaping the future of technology. 
              We're always looking for passionate talent to help us grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
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
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that great people do great work. That's why we've created an environment 
              where talented individuals can thrive and make a meaningful impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-red-600 to-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore current opportunities to join our growing team of innovators and problem-solvers.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {position.department}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {position.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                  </div>
                  <div className="lg:ml-8">
                    <button className="w-full lg:w-auto bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Nexasai Solutions, we believe that innovation thrives in an environment of 
                collaboration, respect, and continuous learning. Our culture is built on the 
                foundation of trust, transparency, and shared success.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We encourage our team members to take ownership, think creatively, and push 
                the boundaries of what's possible. Whether you're working remotely or in our 
                office, you'll be part of a supportive community that values your contributions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-600 mb-1">Innovation First</h4>
                  <p className="text-sm text-gray-600">We encourage creative thinking and new ideas.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-1">Growth Mindset</h4>
                  <p className="text-sm text-gray-600">Continuous learning and professional development.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-red-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Join Our Team</h3>
                  <p className="text-gray-600">Be part of something extraordinary</p>
                </div>
              </div>
            </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See the Right Position?</h2>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                We're always interested in connecting with talented individuals. Send us your resume and let's start a conversation about future opportunities.
              </p>ß
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@nexasai.com"
                  className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  Send Your Resume
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-slate-300 text-slate-800 font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-200"
                >
                  Contact HR Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

    </div>
  );
};

export default Careers;