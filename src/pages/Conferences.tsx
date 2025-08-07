import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { 
  Calendar, 
  Search, 
  Filter, 
  MapPin, 
  Users, 
  Clock,
  Globe,
  Ticket,
  Star,
  Video,
  Building
} from "lucide-react";

const Conferences = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const conferences = [
    {
      id: 1,
      title: "International Conference on Artificial Intelligence & Machine Learning 2024",
      date: "March 15-17, 2024",
      location: "MIT, Cambridge, MA",
      type: "Hybrid",
      status: "Registration Open",
      price: "$299",
      earlyBirdPrice: "$199",
      deadline: "February 28, 2024",
      speakers: 25,
      sessions: 45,
      attendees: "500+",
      rating: 4.8,
      description: "Join leading researchers and practitioners in AI/ML for three days of cutting-edge presentations and networking.",
      topics: ["Deep Learning", "Computer Vision", "NLP", "Robotics"],
      image: "/placeholder-conference.jpg"
    },
    {
      id: 2,
      title: "Sustainable Engineering & Environmental Science Summit",
      date: "April 20-22, 2024",
      location: "Stanford University, CA",
      type: "Physical",
      status: "Registration Open",
      price: "$349",
      earlyBirdPrice: "$249",
      deadline: "March 15, 2024",
      speakers: 18,
      sessions: 32,
      attendees: "300+",
      rating: 4.6,
      description: "Explore the latest developments in sustainable engineering and environmental solutions.",
      topics: ["Green Technology", "Climate Change", "Renewable Energy", "Sustainability"],
      image: "/placeholder-conference.jpg"
    },
    {
      id: 3,
      title: "Biomedical Engineering Innovation Conference",
      date: "May 8-10, 2024",
      location: "Johns Hopkins University, MD",
      type: "Physical",
      status: "Early Bird",
      price: "$399",
      earlyBirdPrice: "$299",
      deadline: "April 1, 2024",
      speakers: 22,
      sessions: 38,
      attendees: "400+",
      rating: 4.9,
      description: "Discover breakthrough innovations in biomedical engineering and healthcare technology.",
      topics: ["Medical Devices", "Biomaterials", "Digital Health", "Diagnostics"],
      image: "/placeholder-conference.jpg"
    },
    {
      id: 4,
      title: "Global Cybersecurity & Digital Privacy Symposium",
      date: "June 12-14, 2024",
      location: "Virtual Event",
      type: "Virtual",
      status: "Registration Open",
      price: "$199",
      earlyBirdPrice: "$149",
      deadline: "May 30, 2024",
      speakers: 30,
      sessions: 50,
      attendees: "1000+",
      rating: 4.7,
      description: "Address the most pressing cybersecurity challenges in our digital age.",
      topics: ["Cybersecurity", "Privacy", "Blockchain", "Digital Forensics"],
      image: "/placeholder-conference.jpg"
    },
    {
      id: 5,
      title: "International Materials Science & Nanotechnology Conference",
      date: "July 22-24, 2024",
      location: "CalTech, Pasadena, CA",
      type: "Hybrid",
      status: "Call for Papers",
      price: "$379",
      earlyBirdPrice: "$279",
      deadline: "June 15, 2024",
      speakers: 20,
      sessions: 35,
      attendees: "350+",
      rating: 4.5,
      description: "Explore advances in materials science and nanotechnology applications.",
      topics: ["Nanomaterials", "Smart Materials", "Quantum Dots", "Applications"],
      image: "/placeholder-conference.jpg"
    },
    {
      id: 6,
      title: "Data Science & Analytics Leadership Summit",
      date: "August 15-17, 2024",
      location: "Harvard University, MA",
      type: "Physical",
      status: "Coming Soon",
      price: "$459",
      earlyBirdPrice: "$329",
      deadline: "July 20, 2024",
      speakers: 28,
      sessions: 42,
      attendees: "450+",
      rating: 4.8,
      description: "Connect with data science leaders and explore the future of analytics.",
      topics: ["Big Data", "Analytics", "Data Visualization", "Business Intelligence"],
      image: "/placeholder-conference.jpg"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Registration Open": return "default";
      case "Early Bird": return "secondary";
      case "Call for Papers": return "outline";
      case "Coming Soon": return "destructive";
      default: return "outline";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Virtual": return <Video className="h-4 w-4" />;
      case "Physical": return <Building className="h-4 w-4" />;
      case "Hybrid": return <Globe className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const filteredConferences = conferences.filter(conference => {
    const matchesSearch = conference.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conference.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = typeFilter === "all" || conference.type.toLowerCase() === typeFilter.toLowerCase();
    const matchesStatus = statusFilter === "all" || conference.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Conferences</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Academic Conferences</h1>
              <p className="text-muted-foreground mt-1">{conferences.length} upcoming conferences</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Calendar className="mr-2 h-4 w-4" />
              My Registrations
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search conferences by title or topic..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-40">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="virtual">Virtual</SelectItem>
                    <SelectItem value="physical">Physical</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="registration open">Registration Open</SelectItem>
                    <SelectItem value="early bird">Early Bird</SelectItem>
                    <SelectItem value="call for papers">Call for Papers</SelectItem>
                    <SelectItem value="coming soon">Coming Soon</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conferences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredConferences.map((conference) => (
            <Card key={conference.id} className="transition-all hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant={getStatusColor(conference.status)} className="flex items-center gap-1">
                    {getTypeIcon(conference.type)}
                    {conference.status}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    {conference.rating}
                  </div>
                </div>
                <CardTitle className="text-lg line-clamp-2 leading-tight">
                  {conference.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {conference.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {conference.date}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {conference.location}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    Deadline: {conference.deadline}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {conference.speakers} speakers
                    </div>
                    <div className="flex items-center gap-1">
                      <Ticket className="h-4 w-4" />
                      {conference.attendees}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {conference.topics.slice(0, 3).map((topic, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {conference.topics.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{conference.topics.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Early Bird</p>
                      <p className="font-semibold text-primary">{conference.earlyBirdPrice}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground line-through">{conference.price}</p>
                      <p className="text-xs text-success">Save {
                        parseInt(conference.price.replace('$', '')) - 
                        parseInt(conference.earlyBirdPrice.replace('$', ''))
                      }$</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                      Register
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredConferences.length === 0 && (
          <Card className="mt-8">
            <CardContent className="p-12 text-center">
              <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No conferences found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria to find relevant conferences
              </p>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Conferences;