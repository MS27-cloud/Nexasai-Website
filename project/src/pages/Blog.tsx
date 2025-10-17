import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Blog: React.FC = () => {
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
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights, trends, and innovations in technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-red-100 to-blue-100 rounded-full w-32 h-32 mx-auto mb-8 flex items-center justify-center">
              <BookOpen className="h-16 w-16 text-gray-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're currently working on bringing you valuable content about technology trends, 
              best practices, case studies, and insights from our team of experts. 
              Stay tuned for exciting updates!
            </p>
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
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
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our upcoming blog will cover a wide range of topics to help you stay ahead in the tech world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Technology Trends',
                description: 'Latest developments in cloud computing, web development, and automation.',
                color: 'from-blue-600 to-blue-700'
              },
              {
                title: 'Best Practices',
                description: 'Expert tips and methodologies for successful technology implementation.',
                color: 'from-red-600 to-red-700'
              },
              {
                title: 'Case Studies',
                description: 'Real-world examples of how we\'ve helped businesses transform digitally.',
                color: 'from-purple-600 to-purple-700'
              },
              {
                title: 'Industry Insights',
                description: 'Analysis of market trends and predictions for the future of technology.',
                color: 'from-green-600 to-green-700'
              },
              {
                title: 'How-To Guides',
                description: 'Step-by-step tutorials and guides for various technology solutions.',
                color: 'from-yellow-600 to-yellow-700'
              },
              {
                title: 'Team Perspectives',
                description: 'Insights and experiences shared by our expert team members.',
                color: 'from-indigo-600 to-indigo-700'
              }
            ].map((topic, index) => (
              <motion.div
                key={topic.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`h-2 bg-gradient-to-r ${topic.color}`}></div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{topic.title}</h3>
                  <p className="text-gray-600">{topic.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay in the Loop
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be the first to know when we publish new content. Subscribe to our newsletter 
              for the latest updates and exclusive insights.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Preview Section */}
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
              Preview: Upcoming Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's a sneak peek at some of the topics we'll be covering in our first posts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "The Future of Cloud Automation: Trends to Watch in 2025",
                excerpt: "Explore the latest developments in cloud automation and how they're reshaping business operations.",
                readTime: "5 min read",
                category: "Cloud Technology",
                date: "Coming Soon"
              },
              {
                title: "Building Scalable Web Applications: A Complete Guide",
                excerpt: "Learn the best practices for developing web applications that can grow with your business needs.",
                readTime: "8 min read",
                category: "Web Development",
                date: "Coming Soon"
              }
            ].map((article, index) => (
              <motion.div
                key={article.title}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                  <span className="text-red-600 font-semibold">Coming Soon</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;