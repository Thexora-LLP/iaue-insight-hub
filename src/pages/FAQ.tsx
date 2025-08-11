import React, { useMemo } from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useQuery } from '@tanstack/react-query'
import { getFAQs } from '@/lib/api'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQ() {
  const { data, isLoading } = useQuery({ queryKey: ['faqs-public'], queryFn: getFAQs })
  const items = data?.items ?? []

  const faqJsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }), [items])

  return (
    <PageLayout title="Frequently Asked Questions" description="Common author, reviewer, and conference questions.">
      {isLoading ? (
        <div className="h-6 w-40 bg-muted animate-pulse rounded"/>
      ) : (
        <>
          <Accordion type="single" collapsible className="w-full animate-fade-in">
            {items.map((f, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        </>
      )}
    </PageLayout>
  )
}
