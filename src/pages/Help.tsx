import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useQuery } from '@tanstack/react-query'
import { getHelpContent } from '@/lib/api'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Help() {
  const { data, isLoading } = useQuery({ queryKey: ['help-topics'], queryFn: getHelpContent })
  const topics = data?.topics ?? []

  return (
    <PageLayout title="Help & Support" description="Find answers and get assistance.">
      {isLoading ? (
        <div className="h-6 w-40 bg-muted animate-pulse rounded"/>
      ) : (
        <div className="grid gap-md md:grid-cols-2 animate-fade-in">
          {topics.map((g, i) => (
            <Card key={i} className="hover-scale">
              <CardHeader>
                <CardTitle>{g.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {g.items.map((f, idx) => (
                    <AccordionItem key={idx} value={`q-${idx}`}>
                      <AccordionTrigger>{f.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
          <Card>
            <CardHeader>
              <CardTitle>Still need help?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Contact our support team: support@makandu.ng</p>
              <p>Response time: under 24 hours (Mon–Fri)</p>
            </CardContent>
          </Card>
        </div>
      )}
    </PageLayout>
  )
}
