
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">React<span className="text-blue-400">TS</span></h3>
            <p className="text-blue-100 max-w-xs">
              A modern web application built with React, TypeScript, and Vite.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-blue-300">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-300">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-300">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ReactTS. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-300 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-blue-300 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-blue-300 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
