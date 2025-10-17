import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Users, Code, Star, CheckCircle, Zap } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import cloudAutomationImg from '../assets/services/cloud-automation.jpg';
import manpowerConsultingImg from "../assets/services/manpower-consulting.jpg";
import webDevelopmentImg from "../assets/services/web-development.jpeg";



const Home: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Automation',
      slug: 'cloud-automation',
      description: 'Transform your cloud into a secure, scalable platform that accelerates operations and fuels growth with confidence today.',
      color: 'from-blue-600 to-blue-700',
      image: cloudAutomationImg,
      imageAlt: 'Cloud automation in data center',
      features: [
        'Auto-scaling infrastructure',
        'Cost optimization',
        'Security compliance',
        'Performance monitoring',
     ],
     link: '/services#cloud-automation'
    },
    {
      icon: Users,
      title: 'Manpower & Consulting',
      slug: 'manpower-consulting',
      description: 'Partner with elite consultants and agile teams to streamline change and deliver measurable outcomes across your organization.',
      color: 'from-red-600 to-red-700',
      image: manpowerConsultingImg,
      imageAlt: 'Team of consultants collaborating in office',
      features: [
        'Digital transformation',
        'Process optimization',
        'Technology roadmaps',
        'Change management',
     ],
     link: '/services#manpower-consulting'
    },
    {
      icon: Code,
      title: 'Web Development',
      slug: 'web-development',
      description: 'Craft high-performance, visually stunning web applications that captivate audiences and turn ideas into powerful digital experiences.',
      color: 'from-purple-600 to-purple-700',
      image: webDevelopmentImg,
      imageAlt: 'Laptop screen with code and web design',
      features: [
        'Custom web applications',
        'API development',
        'Mobile-responsive design',
        'Performance optimization',
     ],
     link: '/services#web-development'

    }
  ];

        const location = useLocation();
          useEffect(() => {
            if (location.hash) {
              const el = document.querySelector(location.hash);
              if (el) {
                (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            } else {
              window.scrollTo(0, 0);
            }
        }, [location]);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '5+', label: 'Years Experience' }
  ];

  const features = [
    'Cutting-edge Technology',
    '24/7 Support',
    'Scalable Solutions',
    'Expert Team',
    'Proven Track Record',
    'Cost-effective'
  ];

  return (
    <div className="overflow-hidden">
      <SEOHead />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-red-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-white bg-opacity-10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-500 bg-opacity-20 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400 bg-opacity-15 rounded-full"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Next-Gen
              <span className="block bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                Tech Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with cutting-edge cloud automation, expert consulting,
              and innovative web development solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

{/* Services Section */}
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
        Our Core Services
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We deliver comprehensive technology solutions that drive innovation and growth for businesses of all sizes.
      </p>
    </motion.div>


   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <motion.article
      key={service.title}
      className="group h-full overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Header: image if provided, otherwise top color strip */}
      {service.image ? (
        <div className="relative aspect-[16/9]">
          <img
            src={service.image}
            alt={service.imageAlt || service.title}
            className="absolute inset-0 h-full w-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            width="400"
            height="225"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
        </div>
      ) : (
        <div className={`h-1.5 bg-gradient-to-r ${service.color}`} />
      )}

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div
          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r ${service.color} mb-4 shadow`}
        >
          <service.icon className="h-5 w-5 text-white" />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 tracking-wide">{service.title}</h3>
        <p className="mt-2 text-gray-600 leading-7 text-pretty max-w-[48ch] min-h-[56px]">{service.description}</p>

        <ul className="mt-4 space-y-2">
          {service.features?.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <span className={`mt-2 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* CTA pinned to bottom */}
        <div className="mt-auto pt-6">
          <Link
            to={service.link}  // e.g. "/services#cloud-automation"
            className="inline-flex items-center font-semibold text-red-600 hover:underline"
          >
            Learn More
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  ))}
</div>
</div>
</section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Nexasai Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We combine technical expertise with business intelligence to deliver solutions
                that not only meet your current needs but scale with your future growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-red-600 to-blue-600 rounded-2xl p-8 relative overflow-hidden">
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="h-8 w-8 text-white opacity-30" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-blue-100 mb-6">
                  Join hundreds of companies that trust us to deliver exceptional technology solutions.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CTO, TechCorp",
                content: "Nexasai Solutions transformed our cloud infrastructure completely. Their automation solutions saved us 40% in operational costs.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "CEO, StartupXYZ",
                content: "The web development team delivered an exceptional product on time and within budget. Highly recommended!",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "IT Director, GlobalTech",
                content: "Their consulting services helped us navigate our digital transformation smoothly. Professional and knowledgeable team.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
