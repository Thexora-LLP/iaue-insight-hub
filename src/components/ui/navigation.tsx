import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen, Users, Calendar, FileText, ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      title: 'Journals',
      href: '/journals',
      icon: BookOpen,
      description: 'Browse published articles and research'
    },
    {
      title: 'Submit',
      href: '/submit',
      icon: FileText,
      description: 'Submit your manuscript for publication'
    },
    {
      title: 'Conferences',
      href: '/conferences',
      icon: Calendar,
      description: 'Register for academic conferences'
    },
    {
      title: 'About',
      href: '/about',
      icon: Users,
      description: 'Learn about Makandu Consortium'
    }
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-primary">Makandu Consortium</div>
              <div className="text-xs text-muted-foreground">Academic Excellence</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}

            {/* Explore Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                  <span className="font-medium">Explore</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel>Quick Links</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link to="/textbooks">Textbooks Catalog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact">Contact Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/support">Help & Support</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/faq">FAQ</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/search">Advanced Search</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/sitemap">Site Map</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/privacy">Privacy Policy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/terms">Terms of Service</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button variant="default" asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </div>
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button variant="default" className="w-full" asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;