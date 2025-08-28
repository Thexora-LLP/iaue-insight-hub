import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: 'Submit Manuscript', href: '/submit' },
    { title: 'Browse Journals', href: '/journals' },
    { title: 'Conferences', href: '/conferences' },
    { title: 'Editorial Board', href: '/editorial-board' },
    { title: 'Peer Review', href: '/peer-review' },
    { title: 'Publication Ethics', href: '/ethics' }
  ];

  const resources = [
    { title: 'Author Guidelines', href: '/guidelines' },
    { title: 'Submission Process', href: '/submission-process' },
    { title: 'Review Process', href: '/review-process' },
    { title: 'Publication Fees', href: '/fees' },
    { title: 'Copyright Policy', href: '/copyright' },
    { title: 'Open Access', href: '/open-access' }
  ];

  const support = [
    { title: 'Help Center', href: '/help' },
    { title: 'Contact Support', href: '/support' },
    { title: 'Technical Issues', href: '/technical-support' },
    { title: 'Author Support', href: '/author-support' },
    { title: 'Editorial Support', href: '/editorial-support' },
    { title: 'FAQ', href: '/faq' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-blue-100">
                Get the latest updates on new publications, conferences, and academic opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                placeholder="Enter your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:!text-gray-300 flex-1"
              />
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">Makandu Consortium</div>
                <div className="text-sm text-blue-200">Academic Excellence</div>
              </div>
            </Link>
            
            <p className="text-blue-100 mb-6 leading-relaxed">
              Advancing academic excellence through innovative publishing solutions and 
              global scholarly communication.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-blue-100">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@makanduconsortium.com</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+234 700 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 p-0 text-blue-200 hover:text-white hover:bg-white/10"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-blue-100 hover:text-white transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-blue-100 hover:text-white transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-blue-100 hover:text-white transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Support Badge */}
            <div className="mt-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                24/7 Support Available
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-blue-200">
            <span>© {currentYear} Makandu Consortium. All rights reserved.</span>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
          
          {/* Thexora Credit */}
          <div className="flex items-center space-x-2 text-sm text-blue-200">
            <span>Made</span>
            <span>by</span>
            <a 
              href="https://thexora.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:underline font-medium flex items-center space-x-1"
            >
              <span>Thexora</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;