import { useParams, useNavigate } from "react-router-dom";
import { conferences } from "./Conferences";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Ticket, ArrowLeft } from "lucide-react";

const ViewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const conference = conferences.find((c) => c.id === Number(id));

  if (!conference) {
    return (
      <div className="p-6 text-center text-red-600">
        <p>Conference not found.</p>
        <Button onClick={() => navigate(-1)} className="mt-4">
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="outline"
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>{conference.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>{conference.description}</p>
          <div className="space-y-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> {conference.date}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {conference.location}
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" /> {conference.speakers} Speakers
            </div>
            <div className="flex items-center gap-2">
              <Ticket className="h-4 w-4" /> {conference.attendees}
            </div>
          </div>

          <div className="pt-4">
            <Button
              onClick={() => navigate(`/register-conference/${conference.id}`)}
              className="bg-primary text-white"
            >
              Register Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewDetails;
