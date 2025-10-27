import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Users, Globe, BookOpen, Award, Target, Eye } from 'lucide-react'

export default function About() {
  return (
    <PageLayout title="About Us" description="Learn about Makandu Consortium's mission, vision, and values.">
       <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
              About Makandu Consortium
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering researchers worldwide through innovative academic publishing and scholarly collaboration
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission & Vision Article */}
            <article className="space-y-8">
              {/* Mission Section */}
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Advancing academic excellence through innovative publishing and global scholarly communication. 
                    We strive to break down barriers in research dissemination and foster meaningful connections 
                    between scholars across all disciplines and geographies.
                  </p>
                </div>
              </div>

              {/* Vision Section */}
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <Eye className="h-6 w-6 text-secondary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To be the most trusted platform for researchers to publish, collaborate, and impact the world. 
                    We envision a future where knowledge flows freely, research finds its rightful audience, 
                    and academic excellence is accessible to all.
                  </p>
                </div>
              </div>
            </article>

            {/* Statistics Sidebar */}
            <aside className="relative">
              <div className="sticky top-8">
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Award className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">At a Glance</h3>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Authors Stat */}
                      <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">20,000+</div>
                          <div className="text-sm text-muted-foreground font-medium">Active Authors</div>
                        </div>
                      </div>

                      {/* Countries Stat */}
                      <div className="flex items-center gap-4 p-4 bg-secondary/5 rounded-lg border border-secondary/10 hover:border-secondary/20 transition-colors">
                        <div className="p-3 bg-secondary/10 rounded-full">
                          <Globe className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-secondary">30+</div>
                          <div className="text-sm text-muted-foreground font-medium">Countries Represented</div>
                        </div>
                      </div>

                      {/* Publications Stat */}
                      <div className="flex items-center gap-4 p-4 bg-accent/5 rounded-lg border border-accent/10 hover:border-accent/20 transition-colors">
                        <div className="p-3 bg-accent/10 rounded-full">
                          <BookOpen className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent">15,000+</div>
                          <div className="text-sm text-muted-foreground font-medium">Publications</div>
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 p-4 bg-gradient-to-r from-muted/30 to-accent/10 rounded-lg border border-border/30">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Join thousands of researchers who trust Makandu Consortium for their 
                        academic publishing needs. Experience the future of scholarly communication today.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span>Ready to publish with us?</span>
              <Award className="h-5 w-5" />
            </div>
          </div>
        </div>
      </section>
    </div>
{/*     
    // <PageLayout title="About Us" description="Learn about Makandu Consortium's mission, vision, and values.">
    //   <div className="grid md:grid-cols-2 gap-lg">
    //     <article className="prose max-w-none">
    //       <h2 className="text-xl font-semibold mb-sm">Our Mission</h2>
    //       <p className="text-muted-foreground">Advancing academic excellence through innovative publishing and global scholarly communication.</p>
    //       <h2 className="text-xl font-semibold mt-lg mb-sm">Our Vision</h2>
    //       <p className="text-muted-foreground">To be the most trusted platform for researchers to publish, collaborate, and impact the world.</p>
    //     </article>
    //     <aside className="rounded-lg border bg-card p-lg shadow-academic">
    //       <h3 className="font-semibold mb-sm">At a glance</h3>
    //       <ul className="text-sm text-muted-foreground space-y-2">
    //         <li>20,000+ authors</li>
    //         <li>30+ countries</li>
    //         <li>15,000+ publications</li>
    //       </ul>
    //     </aside>
    //   </div> */}
     </PageLayout>
  );
}









// // Mock PageLayout component for demonstration
// const PageLayout = ({ title, description, children }) => (
//   <div className="min-h-screen bg-background">
//     <div className="container mx-auto px-4 py-12">
//       <div className="text-center mb-16">
//         <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight">{title}</h1>
//         <div className="w-24 h-1 bg-foreground mx-auto mb-6"></div>
//         <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">{description}</p>
//       </div>
//       {children}
//     </div>
//   </div>
// );

// export default function About() {
//   return (
//     <PageLayout title="About Us" description="Learn about Makandu Consortium's mission, vision, and values.">
//       <div className="grid lg:grid-cols-3 gap-12">
//         {/* Main Content - Takes 2 columns */}
//         <div className="lg:col-span-2 space-y-16">
//           {/* Mission & Vision Cards */}
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-lg transition-all duration-300">
//               <div className="absolute top-0 left-0 w-full h-1 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//               <div className="mb-6">
//                 <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center mb-4">
//                   <div className="w-6 h-6 rounded-full bg-foreground"></div>
//                 </div>
//                 <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
//               </div>
//               <p className="text-muted-foreground leading-relaxed">
//                 Advancing academic excellence through innovative publishing and global scholarly communication. 
//                 We strive to connect researchers worldwide, fostering collaboration and knowledge exchange that 
//                 drives meaningful progress in every field of study.
//               </p>
//             </div>

//             <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-lg transition-all duration-300">
//               <div className="absolute top-0 left-0 w-full h-1 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//               <div className="mb-6">
//                 <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center mb-4">
//                   <div className="w-3 h-3 bg-foreground rounded-full"></div>
//                   <div className="w-2 h-2 bg-muted-foreground rounded-full ml-1"></div>
//                   <div className="w-1 h-1 bg-muted-foreground rounded-full ml-1"></div>
//                 </div>
//                 <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
//               </div>
//               <p className="text-muted-foreground leading-relaxed">
//                 To be the most trusted platform for researchers to publish, collaborate, and impact the world. 
//                 We envision a future where academic knowledge flows freely across borders, disciplines, and 
//                 institutions, creating a truly connected global research community.
//               </p>
//             </div>
//           </div>

//           {/* Values Section */}
//           <div className="space-y-8">
//             <div className="text-center">
//               <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
//               <div className="w-16 h-1 bg-foreground mx-auto"></div>
//             </div>
            
//             <div className="grid md:grid-cols-3 gap-6">
//               <div className="group relative p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-md">
//                 <div className="absolute -top-4 left-6">
//                   <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
//                     <div className="w-4 h-4 border-2 border-background rounded-sm"></div>
//                   </div>
//                 </div>
//                 <div className="pt-6">
//                   <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
//                   <p className="text-muted-foreground text-sm leading-relaxed">
//                     Maintaining the highest standards in academic publishing and peer review processes.
//                   </p>
//                 </div>
//               </div>

//               <div className="group relative p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-md">
//                 <div className="absolute -top-4 left-6">
//                   <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
//                     <div className="w-3 h-3 bg-background rounded-full"></div>
//                   </div>
//                 </div>
//                 <div className="pt-6">
//                   <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
//                   <p className="text-muted-foreground text-sm leading-relaxed">
//                     Continuously evolving our platform with cutting-edge technology and methodologies.
//                   </p>
//                 </div>
//               </div>

//               <div className="group relative p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-md">
//                 <div className="absolute -top-4 left-6">
//                   <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
//                     <div className="w-2 h-4 bg-background"></div>
//                   </div>
//                 </div>
//                 <div className="pt-6">
//                   <h3 className="text-xl font-semibold text-foreground mb-3">Integrity</h3>
//                   <p className="text-muted-foreground text-sm leading-relaxed">
//                     Upholding ethical standards and transparency in all our operations.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Impact Section */}
//           <div className="rounded-2xl border border-border bg-card p-8 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 border border-border rounded-full -mr-16 -mt-16 opacity-30"></div>
//             <div className="absolute bottom-0 left-0 w-24 h-24 border border-border rounded-full -ml-12 -mb-12 opacity-20"></div>
//             <div className="relative z-10">
//               <h2 className="text-3xl font-bold text-foreground mb-6">Making an Impact</h2>
//               <p className="text-muted-foreground text-lg leading-relaxed mb-6">
//                 Through our commitment to excellence, innovation, and integrity, we're building bridges 
//                 between researchers, institutions, and ideas. Every publication on our platform represents 
//                 a step forward in human knowledge and understanding.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <div className="px-4 py-2 bg-foreground/5 border border-border rounded-full">
//                   <span className="text-sm font-medium text-foreground">Global Reach</span>
//                 </div>
//                 <div className="px-4 py-2 bg-foreground/5 border border-border rounded-full">
//                   <span className="text-sm font-medium text-foreground">Open Access</span>
//                 </div>
//                 <div className="px-4 py-2 bg-foreground/5 border border-border rounded-full">
//                   <span className="text-sm font-medium text-foreground">Peer Review</span>
//                 </div>
//                 <div className="px-4 py-2 bg-foreground/5 border border-border rounded-full">
//                   <span className="text-sm font-medium text-foreground">Research Collaboration</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar - Takes 1 column */}
//         <div className="space-y-8">
//           {/* Stats Card */}
//           <div className="rounded-2xl border border-border bg-card p-8 shadow-sm relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-20 h-20 border border-border rounded-full -mr-10 -mt-10 opacity-20"></div>
//             <h3 className="text-2xl font-bold text-foreground mb-8 relative z-10">
//               At a Glance
//             </h3>
//             <div className="space-y-6 relative z-10">
//               <div className="text-center p-4 rounded-xl border border-border bg-background/50">
//                 <div className="text-3xl font-bold text-foreground mb-1">20,000+</div>
//                 <div className="text-sm text-muted-foreground uppercase tracking-wide">Authors</div>
//               </div>
//               <div className="text-center p-4 rounded-xl border border-border bg-background/50">
//                 <div className="text-3xl font-bold text-foreground mb-1">30+</div>
//                 <div className="text-sm text-muted-foreground uppercase tracking-wide">Countries</div>
//               </div>
//               <div className="text-center p-4 rounded-xl border border-border bg-background/50">
//                 <div className="text-3xl font-bold text-foreground mb-1">15,000+</div>
//                 <div className="text-sm text-muted-foreground uppercase tracking-wide">Publications</div>
//               </div>
//             </div>
//           </div>

//           {/* Timeline Card */}
//           <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
//             <h3 className="text-2xl font-bold text-foreground mb-8">Our Journey</h3>
//             <div className="space-y-8">
//               <div className="relative">
//                 <div className="absolute left-0 top-2 w-4 h-4 bg-foreground rounded-full"></div>
//                 <div className="absolute left-2 top-6 w-0.5 h-12 bg-border"></div>
//                 <div className="pl-8">
//                   <div className="font-bold text-foreground text-lg">2020</div>
//                   <div className="text-muted-foreground">Platform launched with 500 researchers</div>
//                 </div>
//               </div>
//               <div className="relative">
//                 <div className="absolute left-0 top-2 w-4 h-4 bg-muted-foreground rounded-full"></div>
//                 <div className="absolute left-2 top-6 w-0.5 h-12 bg-border"></div>
//                 <div className="pl-8">
//                   <div className="font-bold text-foreground text-lg">2022</div>
//                   <div className="text-muted-foreground">Reached 10,000 publications milestone</div>
//                 </div>
//               </div>
//               <div className="relative">
//                 <div className="absolute left-0 top-2 w-4 h-4 bg-muted-foreground rounded-full"></div>
//                 <div className="pl-8">
//                   <div className="font-bold text-foreground text-lg">2024</div>
//                   <div className="text-muted-foreground">Expanded to 30+ countries worldwide</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Card */}
//           <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
//             <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
//             <div className="space-y-6">
//               <div className="p-4 rounded-xl border border-border bg-background/30">
//                 <div className="font-semibold text-foreground mb-1">Email</div>
//                 <div className="text-muted-foreground">info@makandu.org</div>
//               </div>
//               <div className="p-4 rounded-xl border border-border bg-background/30">
//                 <div className="font-semibold text-foreground mb-1">Address</div>
//                 <div className="text-muted-foreground text-sm leading-relaxed">
//                   Academic Excellence Center<br />
//                   Global Research District
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </PageLayout>
//   );
// }