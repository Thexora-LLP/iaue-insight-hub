import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, FileText, Users, Globe, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-academic.jpg';

const HeroSection = () => {
  const stats = [
    { label: 'Active Authors', value: '20,000+', icon: Users },
    { label: 'Countries', value: '30+', icon: Globe },
    { label: 'Published Articles', value: '15,000+', icon: FileText },
    { label: 'Impact Factor', value: '4.8', icon: TrendingUp }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Volume 8, Issue 4 Now Available
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                IAUE Research Gate
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Advancing Academic Excellence Through Innovation. Join thousands of researchers 
              and scholars in publishing groundbreaking research across multiple disciplines.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/submit">
                  Submit Manuscript
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link to="/journals">
                  Browse Journals
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <stat.icon className="w-5 h-5 text-blue-200 mr-2" />
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-blue-200 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Publication Info Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Current Issue Highlights</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-blue-200">Volume</span>
                  <span className="text-white font-semibold">8</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-blue-200">Issue</span>
                  <span className="text-white font-semibold">4</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-blue-200">Publication Time</span>
                  <span className="text-white font-semibold">4-6 weeks</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-blue-200">Publication Fee</span>
                  <span className="text-white font-semibold">$350 USD</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold">Journal Scope:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Engineering', 'Life Sciences', 'Medical Sciences', 'Social Sciences'].map((scope, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                      {scope}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA for Mobile */}
      <div className="lg:hidden absolute bottom-6 left-4 right-4 z-20">
        <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-elegant">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-primary">Ready to publish?</p>
              <p className="text-sm text-muted-foreground">Join 20,000+ authors worldwide</p>
            </div>
            <Button size="sm" asChild>
              <Link to="/submit">Start Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;