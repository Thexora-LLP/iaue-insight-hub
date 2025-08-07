import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  BookOpen, 
  Calendar,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Fast Publication',
      description: 'Average publication time of 4-6 weeks with rigorous peer review process.',
      badge: 'Popular',
      color: 'text-primary'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Double-blind peer review by experts in your field ensures highest quality standards.',
      badge: 'Trusted',
      color: 'text-success'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Research disseminated worldwide with DOI assignment and major database indexing.',
      badge: 'Worldwide',
      color: 'text-warning'
    },
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Connect with researchers, reviewers, and editors from 30+ countries.',
      badge: 'Network',
      color: 'text-secondary'
    },
    {
      icon: BookOpen,
      title: 'Open Access',
      description: 'Increase your research impact with open access publication options.',
      badge: 'Impact',
      color: 'text-primary-accent'
    },
    {
      icon: Calendar,
      title: 'Conferences',
      description: 'Participate in international conferences and academic events.',
      badge: 'Events',
      color: 'text-destructive'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'High Impact Factor',
      value: '4.8',
      description: 'Consistently ranked among top academic journals'
    },
    {
      icon: Award,
      title: 'Recognition',
      value: '95%',
      description: 'Author satisfaction rate with our publication process'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      value: '48hrs',
      description: 'Initial review and acknowledgment time'
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Why Choose IAUE Research Gate
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Excellence in Academic Publishing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide world-class publishing services with cutting-edge technology, 
            expert editorial support, and global research dissemination.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-primary/10 ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-academic border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Proven Excellence
            </h3>
            <p className="text-muted-foreground">
              Numbers that speak to our commitment to quality
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {benefit.value}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;