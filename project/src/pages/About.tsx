import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Lightbulb } from "lucide-react";
// TrustedBy logos were moved to Home page

const About: React.FC = () => {
  const values = [
    { icon: Target, title: "Mission-Driven", description: "We are committed to delivering innovative technology solutions that drive real business value." },
    { icon: Eye, title: "Visionary", description: "We anticipate future trends and prepare our clients for the technologies of tomorrow." },
    { icon: Heart, title: "Client-Centric", description: "Every decision we make is guided by what's best for our clients and their success." },
    { icon: Award, title: "Excellence", description: "We maintain the highest standards in everything we do, from code quality to customer service." },
    { icon: Users, title: "Collaborative", description: "We believe in the power of teamwork, both within our organization and with our clients." },
    { icon: Lightbulb, title: "Innovative", description: "We constantly explore new technologies and methodologies to stay ahead of the curve." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-red-900 text-white py-20 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nexasai Solutions</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We're a forward-thinking technology company dedicated to empowering businesses through innovative solutions and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story / Mission / Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2019, Nexasai Solutions emerged from a simple belief: that technology should empower businesses, not complicate them. Our founders,
                with decades of combined experience in enterprise technology, saw an opportunity to bridge the gap between cutting-edge innovation and practical
                business solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we're proud to be a trusted partner to over 150 companies worldwide, helping them navigate digital transformation, optimize their
                operations, and achieve sustainable growth through technology.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-600 mb-2">Our Mission</h3>
                  <p className="text-gray-700">To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Our Vision</h3>
                  <p className="text-gray-700">To be the global leader in transformative technology solutions, shaping the future of business innovation.</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="relative" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <div className="bg-gradient-to-br from-red-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text mb-4">5+</div>
                  <p className="text-xl text-gray-700 font-semibold">Years of Excellence</p>
                  <p className="text-gray-600 mt-2">Delivering innovative solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">These principles guide everything we do and shape how we work with our clients and each other.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-red-600 to-blue-600 mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Snapshot + How We Work (replaces timeline) */}

        {/* How We Work (keep this light, not dark) */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How We Work</h2>
              <p className="mt-3 text-lg text-slate-600">
                A simple, outcome-driven approach from discovery to scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Discover", text: "We dive deep into your goals and constraints to define clear outcomes." },
                { title: "Build", text: "Cross-functional teams ship iteratively with quality and transparency." },
                { title: "Scale", text: "We optimize for reliability, security, and long-term maintainability." },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-slate-50 p-8">
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* thin divider before footer (optional) */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Team (light) */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Behind every successful project is a team of passionate professionals dedicated to delivering excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { num: "50+", label: "Expert Professionals", desc: "Skilled developers, consultants, and project managers", accent: "text-red-600" },
              { num: "15+", label: "Technologies", desc: "Expertise across modern tech stacks and platforms", accent: "text-blue-600" },
              { num: "24/7", label: "Support", desc: "Round-the-clock support for all our clients", accent: "text-purple-600" },
            ].map((c, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`text-3xl font-bold ${c.accent} mb-2`}>{c.num}</div>
                <div className="text-xl font-semibold mb-2">{c.label}</div>
                <p className="text-slate-600">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider before footer */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </div>
  );
};

export default About;
