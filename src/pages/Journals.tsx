import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { 
  BookOpen,
  Book,
  Stethoscope, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Calendar,
  Users,
  FileText,
  Star,
  TrendingUp
} from "lucide-react";
import Box from '../components/ui/JournalComponent.tsx';
import Volume from '../components/ui/VolumeComponent.tsx';
import Issue from '../components/ui/IssueComponent.tsx';

const Journals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  const volumes = [
    {
      volume: 8,
      issue: 4,
      year: 2024,
      publishedDate: "2024-01-30",
      articles: 12,
      downloads: 2340,
      coverImage: "/placeholder-cover.jpg",
      description: "Latest research in engineering and computer science"
    },
    {
      volume: 8,
      issue: 3,
      year: 2024,
      publishedDate: "2024-01-15",
      articles: 15,
      downloads: 3120,
      coverImage: "/placeholder-cover.jpg",
      description: "Special issue on artificial intelligence applications"
    },
    {
      volume: 8,
      issue: 2,
      year: 2024,
      publishedDate: "2023-12-30",
      articles: 11,
      downloads: 2890,
      coverImage: "/placeholder-cover.jpg",
      description: "Advances in biomedical engineering"
    },
    {
      volume: 8,
      issue: 1,
      year: 2024,
      publishedDate: "2023-12-15",
      articles: 14,
      downloads: 4230,
      coverImage: "/placeholder-cover.jpg",
      description: "Environmental science and sustainability"
    },
    {
      volume: 7,
      issue: 4,
      year: 2023,
      publishedDate: "2023-11-30",
      articles: 13,
      downloads: 3450,
      coverImage: "/placeholder-cover.jpg",
      description: "Materials science and nanotechnology"
    },
    {
      volume: 7,
      issue: 3,
      year: 2023,
      publishedDate: "2023-11-15",
      articles: 16,
      downloads: 3890,
      coverImage: "/placeholder-cover.jpg",
      description: "Renewable energy systems and applications"
    }
  ];

  const featuredArticles = [
    {
      title: "Deep Learning in Medical Image Analysis: Current Trends and Future Prospects",
      authors: "Dr. Sarah Johnson, Dr. Michael Chen, Dr. Emily Rodriguez",
      abstract: "This comprehensive review examines the current state of deep learning applications in medical imaging...",
      volume: 8,
      issue: 4,
      pages: "45-67",
      doi: "10.5281/zenodo.1234567",
      downloads: 450,
      citations: 23,
      publishedDate: "2024-01-30"
    },
    {
      title: "Blockchain-Based Supply Chain Transparency: A Case Study in Pharmaceutical Industry",
      authors: "Dr. James Wilson, Dr. Lisa Wang, Prof. Robert Davis",
      abstract: "This paper presents a novel blockchain implementation for enhancing transparency in pharmaceutical supply chains...",
      volume: 8,
      issue: 4,
      pages: "68-89",
      doi: "10.5281/zenodo.1234568",
      downloads: 325,
      citations: 15,
      publishedDate: "2024-01-30"
    },
    {
      title: "IoT Security Framework for Smart City Infrastructure",
      authors: "Dr. Ahmed Hassan, Dr. Maria Garcia, Dr. Kevin Thompson",
      abstract: "As smart cities become more prevalent, securing IoT infrastructure becomes critical...",
      volume: 8,
      issue: 3,
      pages: "12-34",
      doi: "10.5281/zenodo.1234569",
      downloads: 567,
      citations: 31,
      publishedDate: "2024-01-15"
    }
  ];

  const categories = [
    "Computer Science & Engineering",
    "Electrical Engineering", 
    "Mechanical Engineering",
    "Civil Engineering",
    "Biomedical Engineering",
    "Environmental Science",
    "Materials Science",
    "Mathematics",
    "Physics",
    "Chemistry"
  ];

  const filteredVolumes = volumes.filter(volume => {
    const matchesSearch = searchTerm === "" || 
                         volume.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = yearFilter === "all" || volume.year.toString() === yearFilter;
    
    return matchesSearch && matchesYear;
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
                <BreadcrumbPage>Journals</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Makandu Consortium Journal</h1>
              <p className="text-muted-foreground mt-1">Volume 8, Issue 4 | 2024</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <FileText className="mr-2 h-4 w-4" />
              Submit Article
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Journal Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-foreground">8</p>
              <p className="text-sm text-muted-foreground">Current Volume</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <FileText className="h-8 w-8 mx-auto mb-2 text-success" />
              <p className="text-2xl font-bold text-foreground">124</p>
              <p className="text-sm text-muted-foreground">Total Articles</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-warning" />
              <p className="text-2xl font-bold text-foreground">45K</p>
              <p className="text-sm text-muted-foreground">Total Downloads</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="text-2xl font-bold text-foreground">2.8</p>
              <p className="text-sm text-muted-foreground">Impact Factor</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search journals, articles, or authors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-48">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Journal Issues */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">Published Issues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredVolumes.map((volume) => (
                 <Issue volume={volume.volume} issue={volume.issue} year={volume.year} articles={volume.articles}
                  description={volume.description} publishedDate={volume.publishedDate} downloads={volume.downloads}
                  href=""/>
              ))}
            </div>
          </div>

          {/* Featured Articles */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-foreground mb-6">Featured Articles</h2>
            <div className="space-y-6">
              {featuredArticles.map((article, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base line-clamp-2 leading-tight">
                      {article.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {article.authors}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {article.abstract}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Vol {article.volume}, Issue {article.issue}</span>
                      <span>pp. {article.pages}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {article.downloads}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {article.citations}
                        </div>
                      </div>
                      <span className="text-muted-foreground">{article.publishedDate}</span>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="mr-1 h-3 w-3" />
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Links */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Author Guidelines
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Editorial Board
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Submission Process
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Journal Metrics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journals;