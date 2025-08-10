import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useQuery } from '@tanstack/react-query'
import { getFAQs } from '@/lib/api'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function Help() {
  const { data, isLoading } = useQuery({ queryKey: ['help-faqs'], queryFn: getFAQs })
  const items = data?.items ?? []

  return (
    <PageLayout title="Help & Support" description="Find answers and get assistance.">
      {isLoading ? (
        <div className="h-6 w-40 bg-muted animate-pulse rounded"/>
      ) : (
        <Accordion type="single" collapsible className="w-full">
          {items.map((f, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </PageLayout>
  )
}
