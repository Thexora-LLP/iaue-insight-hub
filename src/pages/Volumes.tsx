import { useState } from "react";
import Volume from "@/components/ui/VolumeComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Journal from "@/components/ui/JournalComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  BookOpen,
  Stethoscope,
  Search,
  Filter,
  Download,
  Eye,
  Calendar,
  Users,
  FileText,
  Star,
  TrendingUp,
  Box,
  Hammer,
  Book,
} from "lucide-react";
import { useParams } from "react-router-dom";

const Journals = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  const journalCategory = [
    {
      icon: Stethoscope,
      title: "Medicine Journal",
      noOfVolumes: 10,
      noOfIssues: 40,
    },
    {
      icon: Hammer,
      title: "Law Journal",
      noOfVolumes: 100,
      noOfIssues: 4,
    },
    {
      icon: Stethoscope,
      title: "Medicine Journal",
      noOfVolumes: 10,
      noOfIssues: 40,
    },
    {
      icon: Stethoscope,
      title: "Medicine Journal",
      noOfVolumes: 10,
      noOfIssues: 40,
    },
    {
      icon: Stethoscope,
      title: "Medicine Journal",
      noOfVolumes: 10,
      noOfIssues: 40,
    },
    {
      icon: Stethoscope,
      title: "Medicine Journal",
      noOfVolumes: 10,
      noOfIssues: 40,
    },
    {
      icon: Stethoscope,
      title: "Medicine Journal",
      noOfVolumes: 10,
      noOfIssues: 40,
    },
    {
      icon: Stethoscope,
      title: "Medicine Journal",
      noOfVolumes: 10,
      noOfIssues: 40,
    },
  ];

  const volumes = [
    {
      volume: 1,
      numOfIssues: 4,
      href: "/volumes/1",
    },
    {
      volume: 2,
      numOfIssues: 3,
      href: "/volumes/2",
    },
    {
      volume: 3,
      numOfIssues: 2,
      href: "/volumes/3",
    },
    {
      volume: 4,
      numOfIssues: 5,
      href: "/volumes/4",
    },
    {
      volume: 5,
      numOfIssues: 1,
      href: "/volumes/5",
    },
    {
      volume: 6,
      numOfIssues: 3,
      href: "/volumes/6",
    },
    {
      volume: 7,
      numOfIssues: 2,
      href: "/volumes/7",
    },
    {
      volume: 8,
      numOfIssues: 4,
      href: "/volumes/8",
    },
    {
      volume: 9,
      numOfIssues: 2,
      href: "/volumes/9",
    },
    {
      volume: 10,
      numOfIssues: 3,
      href: "/volumes/10",
    },
  ];

  const featuredArticles = [
    {
      title:
        "Deep Learning in Medical Image Analysis: Current Trends and Future Prospects",
      authors: "Dr. Sarah Johnson, Dr. Michael Chen, Dr. Emily Rodriguez",
      abstract:
        "This comprehensive review examines the current state of deep learning applications in medical imaging...",
      volume: 8,
      issue: 4,
      pages: "45-67",
      doi: "10.5281/zenodo.1234567",
      downloads: 450,
      citations: 23,
      publishedDate: "2024-01-30",
    },
    {
      title:
        "Blockchain-Based Supply Chain Transparency: A Case Study in Pharmaceutical Industry",
      authors: "Dr. James Wilson, Dr. Lisa Wang, Prof. Robert Davis",
      abstract:
        "This paper presents a novel blockchain implementation for enhancing transparency in pharmaceutical supply chains...",
      volume: 8,
      issue: 4,
      pages: "68-89",
      doi: "10.5281/zenodo.1234568",
      downloads: 325,
      citations: 15,
      publishedDate: "2024-01-30",
    },
    {
      title: "IoT Security Framework for Smart City Infrastructure",
      authors: "Dr. Ahmed Hassan, Dr. Maria Garcia, Dr. Kevin Thompson",
      abstract:
        "As smart cities become more prevalent, securing IoT infrastructure becomes critical...",
      volume: 8,
      issue: 3,
      pages: "12-34",
      doi: "10.5281/zenodo.1234569",
      downloads: 567,
      citations: 31,
      publishedDate: "2024-01-15",
    },
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
    "Chemistry",
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
                <BreadcrumbPage>{category}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{category}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Journal Stats */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Journal Issues */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {volumes.map((volume) => (
                <Volume
                  href={`/journal-categories/${category}/${volume.volume}`}
                  number={volume.volume}
                  numOfIssues={volume.numOfIssues}
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
