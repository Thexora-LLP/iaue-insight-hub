import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { 
  FileText, 
  Upload, 
  Users, 
  Info, 
  CreditCard, 
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  X,
  Plus
} from "lucide-react";

const SubmitManuscript = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedType, setSelectedType] = useState("");
  const [authors, setAuthors] = useState([{ name: "", email: "", affiliation: "", orcid: "", isCorresponding: true }]);

  const totalSteps = 6;
  const progress = (currentStep / totalSteps) * 100;

  const manuscriptTypes = [
    {
      id: "research",
      title: "Research Article",
      description: "Original research findings with novel contributions",
      timeline: "6-8 weeks review",
      icon: FileText
    },
    {
      id: "review",
      title: "Review Article",
      description: "Comprehensive analysis of existing literature",
      timeline: "4-6 weeks review",
      icon: FileText
    },
    {
      id: "case-study",
      title: "Case Study",
      description: "Detailed analysis of specific cases or scenarios",
      timeline: "4-5 weeks review",
      icon: FileText
    }
  ];

  const categories = [
    "Computer Science & Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Biomedical Engineering",
    "Environmental Science",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Life Sciences"
  ];

  const addAuthor = () => {
    setAuthors([...authors, { name: "", email: "", affiliation: "", orcid: "", isCorresponding: false }]);
  };

  const removeAuthor = (index: number) => {
    if (authors.length > 1) {
      setAuthors(authors.filter((_, i) => i !== index));
    }
  };

  const updateAuthor = (index: number, field: string, value: any) => {
    const updated = authors.map((author, i) => 
      i === index ? { ...author, [field]: value } : author
    );
    setAuthors(updated);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Select Manuscript Type</h2>
              <p className="text-muted-foreground">Choose the type that best describes your manuscript</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {manuscriptTypes.map((type) => (
                <Card 
                  key={type.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedType === type.id ? 'border-primary ring-2 ring-primary/20' : ''
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <CardContent className="p-6 text-center">
                    <type.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                    <Badge variant="secondary">{type.timeline}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Upload Files</h2>
              <p className="text-muted-foreground">Upload your manuscript and supporting documents</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Main Manuscript
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm font-medium text-foreground mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">DOC, DOCX, PDF (max 10MB)</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Cover Letter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm font-medium text-foreground mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">DOC, DOCX, PDF (max 5MB)</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Additional Files (Optional)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm font-medium text-foreground mb-1">Upload figures, datasets, or supplementary materials</p>
                  <p className="text-xs text-muted-foreground">Multiple files accepted (max 50MB total)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Author Information</h2>
              <p className="text-muted-foreground">Add all authors and their details</p>
            </div>

            <div className="space-y-6">
              {authors.map((author, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Author {index + 1}</CardTitle>
                    {authors.length > 1 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeAuthor(index)}
                        className="text-destructive hover:text-destructive"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`name-${index}`}>Full Name *</Label>
                        <Input
                          id={`name-${index}`}
                          value={author.name}
                          onChange={(e) => updateAuthor(index, "name", e.target.value)}
                          placeholder="Dr. John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`email-${index}`}>Email Address *</Label>
                        <Input
                          id={`email-${index}`}
                          type="email"
                          value={author.email}
                          onChange={(e) => updateAuthor(index, "email", e.target.value)}
                          placeholder="john.doe@university.edu"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor={`affiliation-${index}`}>Affiliation *</Label>
                      <Input
                        id={`affiliation-${index}`}
                        value={author.affiliation}
                        onChange={(e) => updateAuthor(index, "affiliation", e.target.value)}
                        placeholder="Department, University, Country"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`orcid-${index}`}>ORCID ID (Optional)</Label>
                        <Input
                          id={`orcid-${index}`}
                          value={author.orcid}
                          onChange={(e) => updateAuthor(index, "orcid", e.target.value)}
                          placeholder="0000-0000-0000-0000"
                        />
                      </div>
                      <div className="flex items-center space-x-2 pt-6">
                        <Checkbox
                          id={`corresponding-${index}`}
                          checked={author.isCorresponding}
                          onCheckedChange={(checked) => updateAuthor(index, "isCorresponding", checked)}
                        />
                        <Label htmlFor={`corresponding-${index}`}>Corresponding Author</Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button
                variant="outline"
                onClick={addAuthor}
                className="w-full border-dashed"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Another Author
              </Button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Manuscript Details</h2>
              <p className="text-muted-foreground">Provide details about your manuscript</p>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <Label htmlFor="title">Manuscript Title *</Label>
                  <Input
                    id="title"
                    placeholder="Enter the full title of your manuscript"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="abstract">Abstract *</Label>
                  <Textarea
                    id="abstract"
                    placeholder="Provide a comprehensive abstract (150-300 words)"
                    className="mt-1 min-h-[120px]"
                  />
                </div>

                <div>
                  <Label htmlFor="keywords">Keywords *</Label>
                  <Input
                    id="keywords"
                    placeholder="Enter 5-8 keywords separated by commas"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="category">Subject Category *</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="funding">Funding Information (Optional)</Label>
                  <Textarea
                    id="funding"
                    placeholder="List funding sources, grant numbers, and acknowledgments"
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Review & Submit</h2>
              <p className="text-muted-foreground">Please review all information before submitting</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Manuscript Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Type</p>
                    <p className="text-foreground">Research Article</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Title</p>
                    <p className="text-foreground">AI-Driven Healthcare Solutions</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Authors</p>
                    <p className="text-foreground">Dr. John Doe (Corresponding), Dr. Jane Smith</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Category</p>
                    <p className="text-foreground">Computer Science & Engineering</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Publication Fees</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Article Processing Charge</span>
                    <span className="font-medium">$299</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fast Track Review (Optional)</span>
                    <span className="font-medium">$99</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">$398</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the <Button variant="link" className="p-0 h-auto text-primary">Terms and Conditions</Button> and 
                    <Button variant="link" className="p-0 h-auto text-primary">Publication Ethics</Button>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="copyright" />
                  <Label htmlFor="copyright" className="text-sm">
                    I confirm that all authors have contributed significantly and agree to the submission
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Payment</h2>
              <p className="text-muted-foreground">Complete your payment to submit the manuscript</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-16 justify-start">
                    <div className="text-left">
                      <p className="font-medium">Credit/Debit Card</p>
                      <p className="text-sm text-muted-foreground">Visa, Mastercard, American Express</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-16 justify-start">
                    <div className="text-left">
                      <p className="font-medium">Bank Transfer</p>
                      <p className="text-sm text-muted-foreground">Direct bank payment</p>
                    </div>
                  </Button>
                </div>

                <div className="border rounded-lg p-6 bg-muted/50">
                  <h4 className="font-semibold mb-4">Payment Summary</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Article Processing Charge</span>
                      <span>$299.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fast Track Review</span>
                      <span>$99.00</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total Amount</span>
                      <span className="text-primary">$398.00</span>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Complete Payment & Submit
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

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
                <BreadcrumbPage>Submit Manuscript</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Submit Manuscript</h1>
              <p className="text-muted-foreground mt-1">Step {currentStep} of {totalSteps}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Estimated time</p>
              <p className="font-medium">15-20 minutes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Progress</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {renderStep()}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            {currentStep < totalSteps ? (
              <Button
                onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                disabled={currentStep === 1 && !selectedType}
                className="bg-primary hover:bg-primary/90"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button className="bg-success hover:bg-success/90">
                <CheckCircle className="mr-2 h-4 w-4" />
                Submit Manuscript
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitManuscript;