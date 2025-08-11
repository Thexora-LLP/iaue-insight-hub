import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Clock, Award, Users } from 'lucide-react';

const CTASection = () => {
  const publishingSteps = [
    {
      step: '01',
      title: 'Submit Manuscript',
      description: 'Upload your research with our easy-to-use submission system'
    },
    {
      step: '02', 
      title: 'Peer Review',
      description: 'Expert reviewers evaluate your work with constructive feedback'
    },
    {
      step: '03',
      title: 'Publication',
      description: 'Your research is published and distributed globally'
    }
  ];

  const guarantees = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: '4-6 weeks average publication time'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous peer review process'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 editorial assistance'
    },
    {
      icon: CheckCircle,
      title: 'Global Reach',
      description: 'Worldwide distribution network'
    }
  ];

  return (
    <section className="py-2xl bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="bg-gradient-primary rounded-3xl p-8 lg:p-16 mb-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full"></div>
          </div>

          <div className="relative z-10 text-center">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Start Your Publication Journey Today
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Share Your Research 
              <br className="hidden sm:block" />
              with the World?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of researchers who trust Makandu Consortium for their 
              academic publishing needs. Fast, reliable, and globally recognized.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/submit">
                  Submit Your Manuscript
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white border-white/30 text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/guidelines">
                  View Guidelines
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="text-white">
                  <guarantee.icon className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                  <div className="font-semibold mb-1">{guarantee.title}</div>
                  <div className="text-sm text-blue-200">{guarantee.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Publishing Process */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            How It Works
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Simple 3-Step Publishing Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From submission to publication, we make the process as smooth as possible 
            while maintaining the highest academic standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {publishingSteps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                </div>
                
                <div className="pt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" asChild>
            <Link to="/about">
              Learn More About Our Process
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;