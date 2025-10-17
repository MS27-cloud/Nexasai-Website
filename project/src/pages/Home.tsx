import { useEffect, lazy, Suspense } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Cloud,
  Users,
  Code,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  Target,
  BarChart3,
  Rocket,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

const TrustedBy = lazy(() => import('../components/TrustedBy'));

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Automation',
      description:
        'Transform infrastructure into code. Scale effortlessly with intelligent automation that reduces costs by up to 40%.',
      outcomes: ['40% cost reduction', '10x faster deployment', '99.9% uptime'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Strategic Consulting',
      description:
        'Navigate digital transformation with confidence. Our experts align technology with business goals.',
      outcomes: ['3-6 month ROI', 'Enterprise-grade security', 'Scalable architecture'],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Code,
      title: 'Custom Development',
      description:
        'Build applications that perform. Modern, secure, and scalable solutions engineered for growth.',
      outcomes: ['2x faster time-to-market', 'Mobile-first design', 'API-driven'],
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your challenges, audit infrastructure, and identify opportunities.',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Custom roadmap with clear milestones, timelines, and success metrics.',
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Agile implementation with weekly updates and continuous integration.',
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Ongoing monitoring, support, and iterative improvements.',
    },
  ];

  const industries = [
    { name: 'Healthcare', icon: Shield },
    { name: 'Finance', icon: TrendingUp },
    { name: 'Technology', icon: Zap },
    { name: 'Retail', icon: Target },
    { name: 'Manufacturing', icon: BarChart3 },
    { name: 'Startups', icon: Rocket },
  ];

  const caseStudies = [
    {
      client: 'Global Healthcare Provider',
      challenge: 'Legacy infrastructure causing $2M in annual downtime',
      solution: 'Migrated to cloud-native architecture with automated failover',
      results: ['99.99% uptime', '60% cost savings', '5x faster deployments'],
      industry: 'Healthcare',
    },
    {
      client: 'Fortune 500 Retailer',
      challenge: 'Scaling for Black Friday traffic (50M+ users)',
      solution: 'Auto-scaling infrastructure with real-time monitoring',
      results: ['0 downtime', '10x traffic handled', '$15M revenue protected'],
      industry: 'Retail',
    },
  ];

  const testimonials = [
    {
      quote:
        'Nexasai transformed our infrastructure completely. We went from weekly outages to 99.9% uptime. Their team delivers.',
      author: 'Sarah Chen',
      role: 'CTO, TechCorp',
      company: 'Fortune 500 Tech Company',
    },
    {
      quote:
        'The ROI was immediate. Within 3 months, we reduced cloud costs by 40% while improving performance. Best investment we made.',
      author: 'Michael Rodriguez',
      role: 'VP Engineering, HealthTech',
      company: 'Healthcare Platform',
    },
    {
      quote:
        'They don\'t just write code—they solve business problems. Our time-to-market improved by 2x.',
      author: 'Emily Thompson',
      role: 'Head of Product, FinanceApp',
      company: 'Fintech Startup',
    },
  ];

  return (
    <div className="overflow-hidden bg-white">
      <SEOHead />

      <section className="relative min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="max-w-4xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>Trusted by Fortune 500 companies</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Enterprise Technology
              <br />
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                That Delivers Results
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            >
              We help enterprise teams modernize infrastructure, accelerate development, and scale
              with confidence. Proven results. Zero compromises.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-0.5"
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 grid grid-cols-3 gap-8 max-w-2xl"
            >
              {[
                { label: 'Projects', value: '500+' },
                { label: 'Enterprise Clients', value: '150+' },
                { label: 'Cost Savings', value: '40%' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64" />}>
        <TrustedBy />
      </Suspense>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What We Do
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We transform complex technical challenges into competitive advantages. Our expertise
              spans cloud infrastructure, strategic consulting, and custom development.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg`}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-2">
                  {service.outcomes.map(outcome => (
                    <div key={outcome} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-red-600 font-semibold hover:gap-2 transition-all duration-200"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How We Work
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Our proven 4-step methodology ensures successful outcomes every time
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-6xl font-bold text-red-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>

                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-red-200 to-transparent -ml-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Industries We Serve
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Delivering specialized solutions across sectors
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <industry.icon className="h-8 w-8 mx-auto mb-3 text-red-600 group-hover:scale-110 transition-transform" />
                <div className="font-semibold text-gray-900">{industry.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Proven Results
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Real challenges. Real solutions. Real impact.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-4">
                  {study.industry}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.client}</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Challenge
                    </div>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Solution
                    </div>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Results
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map(result => (
                      <div key={result} className="text-center p-3 bg-white rounded-lg border border-gray-200">
                        <div className="text-lg font-bold text-red-600">{result}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What Our Clients Say
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Infrastructure?
          </motion.h2>
          <motion.p
            className="text-xl text-red-100 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Book a 30-minute strategy call. We'll analyze your challenges and show you exactly how
            we can help you scale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-xl hover:-translate-y-1"
            >
              Schedule Your Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            className="mt-12 text-red-100 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <CheckCircle className="inline h-4 w-4 mr-1" />
            No commitment required • Free consultation • 30 minutes
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
