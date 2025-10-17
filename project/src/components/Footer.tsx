import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight, Building2, Users, Code, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Section with CTA */}
        <div className="mb-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-blue-50 mb-6 max-w-2xl mx-auto">
            Join 150+ enterprise clients who trust us to deliver exceptional technology solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img
                src={logo}
                alt="Nexasai Solutions"
                className="h-10 w-10 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-bold text-white">
                Nexasai Solutions
              </span>
            </Link>
            <p className="text-sm leading-7 text-slate-400 mb-6 max-w-sm">
              Enterprise technology partner delivering cutting-edge cloud automation, strategic consulting,
              and world-class web development to Fortune 500 companies and innovative startups.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-400 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Code className="h-4 w-4 text-blue-400" />
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Cloud Automation", href: "/services#cloud-automation", icon: Cloud },
                { label: "Manpower & Consulting", href: "/services#manpower-consulting", icon: Users },
                { label: "Web Development", href: "/services#web-development", icon: Code },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-blue-400" />
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="mailto:contact@nexasai.com"
                  className="group flex items-start gap-3 text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <Mail className="mt-0.5 h-5 w-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="break-all">contact@nexasai.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="group flex items-start gap-3 text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <Phone className="mt-0.5 h-5 w-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+1 (555) 123-4567</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="mt-0.5 h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span>123 Tech Street<br />Innovation City, IC 12345</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800"></div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-slate-500">
            © {currentYear} Nexasai Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500">
            <Link
              to="/privacy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              to="/terms"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              to="/sitemap"
              className="hover:text-white transition-colors duration-200"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
