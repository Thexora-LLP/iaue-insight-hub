import PageLayout from "@/components/layout/PageLayout";
import { useQuery } from "@tanstack/react-query";
import { getTerms } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  const { data, isLoading } = useQuery({
    queryKey: ["terms-of-service"],
    queryFn: getTerms,
  });

  const sections = data?.sections ?? [];

  return (
    <PageLayout
      title="Terms & Conditions"
      description="Please review our policies and user agreement below.">
      {isLoading ? (
        <div className="h-6 w-40 bg-muted animate-pulse rounded" />
      ) : (
        <section className="space-y-8 animate-fade-in">
          <div className="flex items-center gap-2 text-sm text-gray-500 italic">
            Last updated: {data?.lastUpdated}
          </div>

          {sections.map((section, index) => (
            <Card
              key={index}
              className="rounded-2xl border border-blue-800 shadow-sm hover:shadow-md transition bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold text-blue-800 tracking-wide">
                  {section.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                  {section.content.map((item: string, i: number) => (
                    <li key={i} className="text-sm md:text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </section>
      )}
    </PageLayout>
  );
}
