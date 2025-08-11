import React from "react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

interface AuthShellProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
  icon?: React.ReactNode;
}

const AuthShell: React.FC<AuthShellProps> = ({ title, description, children, backHref = "/", backLabel = "Back to Home", icon }) => {
  useSEO({ title, description });

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to={backHref} className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              <span>{backLabel}</span>
            </Link>
          </Button>
        </div>

        <Card className="shadow-elegant">
          <CardHeader className="text-center space-y-4">
            {icon && <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">{icon}</div>}
            <div>
              <CardTitle className="text-2xl">{title}</CardTitle>
              {description && <CardDescription>{description}</CardDescription>}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">{children}</CardContent>
        </Card>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>
            By continuing, you agree to our {" "}
            <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and {" "}
            <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthShell;
