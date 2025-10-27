import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
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

  const {category, volume} = useParams()

const issues = [
  {
    "issue": 1,
    "year": 2024,
    "publishedDate": "2023-12-15",
    "articles": 14,
    "downloads": 4230,
    "coverImage": "/placeholder-cover.jpg",
    "description": "Environmental science and sustainability",
    "href": "/issues/8-1"
  },
  {
    "issue": 2,
    "year": 2024,
    "publishedDate": "2023-12-30",
    "articles": 11,
    "downloads": 2890,
    "coverImage": "/placeholder-cover.jpg",
    "description": "Advances in biomedical engineering",
    "href": "/issues/8-2"
  },
  {
    "issue": 3,
    "year": 2024,
    "publishedDate": "2024-01-15",
    "articles": 15,
    "downloads": 3120,
    "coverImage": "/placeholder-cover.jpg",
    "description": "Special issue on artificial intelligence applications",
    "href": "/issues/8-3"
  },
  {
    "issue": 4,
    "year": 2024,
    "publishedDate": "2024-01-30",
    "articles": 12,
    "downloads": 2340,
    "coverImage": "/placeholder-cover.jpg",
    "description": "Latest research in engineering and computer science",
    "href": "/issues/8-4"
  },
  {
    "issue": 5,
    "year": 2024,
    "publishedDate": "2024-02-15",
    "articles": 13,
    "downloads": 2700,
    "coverImage": "/placeholder-cover.jpg",
    "description": "Innovations in renewable energy technologies",
    "href": "/issues/8-5"
  },
  {
    "issue": 6,
    "year": 2024,
    "publishedDate": "2024-02-28",
    "articles": 10,
    "downloads": 1980,
    "coverImage": "/placeholder-cover.jpg",
    "description": "Data science and machine learning advancements",
    "href": "/issues/8-6"
  },
  {
    "issue": 7,
    "year": 2024,
    "publishedDate": "2024-03-10",
    "articles": 16,
    "downloads": 3500,
    "coverImage": "/placeholder-cover.jpg",
    "description": "Quantum computing and its applications",
    "href": "/issues/8-7"
  },
  {
    "issue": 8,
    "year": 2024,
    "publishedDate": "2024-03-25",
    "articles": 9,
    "downloads": 1650,
    "coverImage": "/placeholder-cover.jpg",
    "description": "Cybersecurity in modern networks",
    "href": "/issues/8-8"
  },
  {
    "issue": 9,
    "year": 2024,
    "publishedDate": "2024-04-10",
    "articles": 11,
    "downloads": 2200,
    "coverImage": "/placeholder-cover.jpg",
    "description": "Sustainable urban development",
    "href": "/issues/8-9"
  },
  {
    "issue": 10,
    "year": 2024,
    "publishedDate": "2024-04-25",
    "articles": 13,
    "downloads": 2900,
    "coverImage": "/placeholder-cover.jpg",
    "description": "Breakthroughs in materials engineering",
    "href": "/issues/8-10"
  }
]

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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
            <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
               <BreadcrumbItem>
                <BreadcrumbLink href="/journal-categories">Journal Categories</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
               <BreadcrumbItem>
                <BreadcrumbLink href={`/journal-categories/${category}/`}>{category}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Volume {volume}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{category}</h1>
              <p className="text-muted-foreground mt-1">Volume {volume}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Journal Issues */}
           
          <div className="lg:col-span-2">
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {issues.map((issue) => (
                 <Issue href="" issue={issue.issue} year={issue.year} articles={issue.articles}
                  description={issue.description} publishedDate={issue.publishedDate} downloads={issue.downloads}
                  />
              ))}
            </div>
          </div>

          {/* Featured Articles */}
          <div className="lg:col-span-1">
            {/* Quick Links */}
            <Card>
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