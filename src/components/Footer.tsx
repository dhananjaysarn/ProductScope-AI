import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Product Analyzer
            </h2>
            <p className="text-sm text-gray-400">
              Smart product analysis with trends, ratings, competitor insights,
              and market intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/reviews" className="hover:text-white transition">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white font-semibold mb-3">Features</h3>
            <ul className="space-y-2">
              <li>Market Analysis</li>
              <li>Competitor Tracking</li>
              <li>Trend Monitoring</li>
              <li>AI Insights</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <p>Email: support@example.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>India</p>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Product Analyzer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;