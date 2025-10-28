import { useState } from "react";
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
  Gavel,
} from "lucide-react";
import { Book, Microscope, Brain, Globe, Palette } from 'lucide-react';

const Journals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  const journalCategory = [
    {
      icon: Stethoscope,
      title: "Clinical Medicine Journal",
      noOfVolumes: 15,
      noOfIssues: 60,
    },
    {
      icon: Gavel,
      title: "International Law Review",
      noOfVolumes: 80,
      noOfIssues: 8,
    },
    {
      icon: Microscope,
      title: "Biological Sciences Journal",
      noOfVolumes: 25,
      noOfIssues: 100,
    },
    {
      icon: Brain,
      title: "Neuroscience Advances",
      noOfVolumes: 12,
      noOfIssues: 48,
    },
    {
      icon: Globe,
      title: "Environmental Studies Journal",
      noOfVolumes: 20,
      noOfIssues: 80,
    },
    {
      icon: Palette,
      title: "Art & Design Review",
      noOfVolumes: 8,
      noOfIssues: 32,
    },
    {
      icon: FileText,
      title: "Literary Criticism Quarterly",
      noOfVolumes: 30,
      noOfIssues: 120,
    },
    {
      icon: Book,
      title: "Historical Research Journal",
      noOfVolumes: 50,
      noOfIssues: 200,
    },
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
                <BreadcrumbPage>Journal Categories</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Journal Categories
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Journal Categories */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-1">
              {journalCategory.map((category) => (
                <Journal 
                  href={`/journal-categories/${category.title}`}
                  key={category.title}
                  icon={<category.icon className="text-primary" size={30} />}
                  title={category.title}
                  noOfVolumes={category.noOfVolumes}
                  noOfIssues={category.noOfIssues}
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
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