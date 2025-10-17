import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              {/* If you have a logo, replace src below */}
              <img
                src="/logo.svg"
                alt="Nexasai Solutions"
                className="h-7 w-7"
              />
              <span className="text-lg font-semibold text-white">
                Nexasai Solutions
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Empowering businesses with cutting-edge technology solutions. From
              cloud automation to web development, we drive innovation forward.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.linkedin.com"
                className="transition hover:text-white visited:text-slate-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                className="transition hover:text-white visited:text-slate-300"
                aria-label="Twitter / X"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                className="transition hover:text-white visited:text-slate-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Careers", "/careers"],
                ["Blog", "/blog"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="transition hover:text-white visited:text-slate-300 underline-offset-4 hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                ["Cloud Automation", "/services/cloud-automation"],
                ["Manpower & Consulting", "/services/consulting"],
                ["Web Development", "/services/web-development"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="transition hover:text-white visited:text-slate-300 underline-offset-4 hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-white">Contact Info</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-slate-400" />
                <a
                  href="mailto:contact@nexasai.com"
                  className="transition hover:text-white visited:text-slate-300"
                >
                  contact@nexasai.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-slate-400" />
                <a
                  href="tel:+15551234567"
                  className="transition hover:text-white visited:text-slate-300"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-slate-400" />
                <span className="text-slate-400">
                  123 Tech Street, Innovation City, IC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-12 border-slate-700/60" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Nexasai Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="transition hover:text-white visited:text-slate-300 underline-offset-4 hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="transition hover:text-white visited:text-slate-300 underline-offset-4 hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
