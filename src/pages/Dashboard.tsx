import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  FileText, 
  Users, 
  BookOpen, 
  Calendar, 
  TrendingUp, 
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign
} from "lucide-react";

const Dashboard = () => {
  const userRole = "user"; // This would come from auth context

  const quickStats = [
    { title: "Active Submissions", value: "3", icon: FileText, color: "text-primary" },
    { title: "Published Papers", value: "12", icon: BookOpen, color: "text-success" },
    { title: "Conference Registrations", value: "2", icon: Calendar, color: "text-warning" },
    { title: "Total Citations", value: "145", icon: TrendingUp, color: "text-accent" }
  ];

  const recentActivity = [
    { action: "Manuscript submitted", title: "AI in Healthcare Systems", date: "2 hours ago", status: "pending" },
    { action: "Review completed", title: "Machine Learning Applications", date: "1 day ago", status: "completed" },
    { action: "Conference registered", title: "IEEE AI Conference 2024", date: "3 days ago", status: "confirmed" }
  ];

  const manuscripts = [
    { 
      title: "Deep Learning Approaches in Medical Diagnosis", 
      status: "Under Review", 
      submitted: "2024-01-15",
      progress: 60
    },
    { 
      title: "Blockchain Technology in Supply Chain", 
      status: "Revision Required", 
      submitted: "2024-01-10",
      progress: 40
    },
    { 
      title: "IoT Security Framework", 
      status: "Accepted", 
      submitted: "2023-12-20",
      progress: 100
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Welcome back, Dr. John Doe</h1>
                <p className="text-muted-foreground">Computer Science Department, MIT</p>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Submit New Manuscript
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start bg-primary hover:bg-primary/90" size="lg">
                <FileText className="mr-2 h-4 w-4" />
                Submit Manuscript
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <BookOpen className="mr-2 h-4 w-4" />
                Browse Journals
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Calendar className="mr-2 h-4 w-4" />
                Register for Conference
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Users className="mr-2 h-4 w-4" />
                Find Collaborators
              </Button>
            </CardContent>
          </Card>

          {/* My Manuscripts */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  My Manuscripts
                </span>
                <Button variant="outline" size="sm">View All</Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {manuscripts.map((manuscript, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{manuscript.title}</h4>
                        <p className="text-sm text-muted-foreground">Submitted: {manuscript.submitted}</p>
                      </div>
                      <Badge 
                        variant={manuscript.status === "Accepted" ? "default" : 
                                manuscript.status === "Under Review" ? "secondary" : "destructive"}
                        className="ml-4"
                      >
                        {manuscript.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{manuscript.progress}%</span>
                      </div>
                      <Progress value={manuscript.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 py-3 border-b last:border-b-0">
                  <div className="flex-shrink-0">
                    {activity.status === "completed" && <CheckCircle className="h-5 w-5 text-success" />}
                    {activity.status === "pending" && <Clock className="h-5 w-5 text-warning" />}
                    {activity.status === "confirmed" && <CheckCircle className="h-5 w-5 text-primary" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;