import React from 'react';
import { Package, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Package className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">CPG Match</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting CPG industry players through intelligent matching and data-driven insights.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">Home</a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-white">Products</a>
              </li>
              <li>
                <a href="/manufacturers" className="text-gray-300 hover:text-white">Manufacturers</a>
              </li>
              <li>
                <a href="/projects/new" className="text-gray-300 hover:text-white">Start a Project</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Industry Reports</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">FAQs</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@cpgmatch.com" className="text-gray-300 hover:text-white">info@cpgmatch.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-gray-300">123 Market St, San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-300">
            &copy; {new Date().getFullYear()} CPG Match. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;