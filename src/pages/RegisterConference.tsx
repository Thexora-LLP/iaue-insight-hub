import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Tag, CreditCard, DollarSign } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { conferences } from "./Conferences"; 

function RegisterConference() {
  const [submitted, setSubmitted] = useState(false);
  const [ticketType, setTicketType] = useState("earlyBird");
  const { id } = useParams();

  const conference = conferences.find((c) => c.id === Number(id));

  if (!conference) {
    return <div className="text-center text-gray-600 py-10">Conference not found</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const priceMap = {
    earlyBird: Number(conference.earlyBirdPrice.replace("$", "")),
    regular: Number(conference.price.replace("$", "")),
    vip: Number(conference.price.replace("$", "")) + 100, // optional VIP
  };

  const selectedPrice = priceMap[ticketType as keyof typeof priceMap];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
      <Card className="border border-blue-200 shadow-sm">
        <CardHeader className="border-b border-blue-100 pb-4">
          <CardTitle className="text-2xl font-bold text-blue-800">
            {conference.title}
          </CardTitle>
          <p className="text-gray-600 mt-2">{conference.description}</p>
        </CardHeader>

        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span>{conference.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>{conference.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-600" />
              <span>
                {conference.speakers} speakers · {conference.attendees} attendees
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-blue-600" />
              <span>Deadline: {conference.deadline}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-3">
            {conference.topics.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border border-blue-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-blue-800 font-semibold">
            Register & Payment
          </CardTitle>
          <p className="text-gray-600 text-sm mt-1">
            Complete your registration and choose a ticket type below.
          </p>
        </CardHeader>

        <CardContent>
          {submitted ? (
            <div className="text-center py-10">
              <h3 className="text-lg font-semibold text-blue-700">
                🎉 Registration Successful!
              </h3>
              <p className="text-gray-600 mt-2">
                Your payment has been received. A confirmation email will be sent shortly.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded-md px-3 py-2"/>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ticket Type
                </label>
                <div className="space-y-2">
                  {Object.keys(priceMap).map((key) => (
                    <label
                      key={key}
                      className="flex items-center justify-between border rounded-md px-3 py-2 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="ticketType"
                          value={key}
                          checked={ticketType === key}
                          onChange={(e) => setTicketType(e.target.value)}
                        />
                        <span className="capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                      </div>
                      <span className="font-semibold text-blue-700">
                        ${priceMap[key as keyof typeof priceMap]}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3">
                <CreditCard className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700 text-sm">
                  Total:{" "}
                  <strong className="text-blue-700">${selectedPrice}</strong>
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800">
                <DollarSign className="inline h-4 w-4 mr-1" />
                Confirm & Pay
              </button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default RegisterConference;
