"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import type { FAQ } from "@/lib/types"

// Mock data for FAQs
const faqs: Record<string, FAQ[]> = {
  ticketing: [
    {
      question: "How do I purchase tickets for an event?",
      answer:
        "You can purchase tickets by navigating to the event page and clicking the 'Book Now' button. Follow the checkout process to complete your purchase.",
    },
    {
      question: "Can I get a refund for my tickets?",
      answer:
        "Refund policies vary by event. Please check the specific event's refund policy on the event details page or contact the event organizer directly.",
    },
    {
      question: "How do I access my tickets after purchase?",
      answer:
        "After purchasing, your tickets will be emailed to you and also available in your account under 'My Tickets'. You can print them or use the mobile version.",
    },
    {
      question: "Can I transfer my tickets to someone else?",
      answer:
        "Yes, most tickets can be transferred to another person. Go to 'My Tickets' in your account, select the ticket, and choose the transfer option.",
    },
  ],
  staffing: [
    {
      question: "How do I apply for event staff positions?",
      answer:
        "Create an account, complete your profile with relevant skills and experience, then browse and apply for positions that match your qualifications.",
    },
    {
      question: "What types of staff positions are available?",
      answer:
        "We offer various positions including event coordinators, bartenders, security personnel, sound technicians, catering staff, and more.",
    },
    {
      question: "How quickly will I get paid after working an event?",
      answer:
        "Payment is typically processed within 3-5 business days after the event concludes and your hours are approved by the event organizer.",
    },
    {
      question: "What qualifications do I need to work as event staff?",
      answer:
        "Requirements vary by position. Some roles require specific certifications or experience, while others are entry-level. Check each job listing for details.",
    },
  ],
  general: [
    {
      question: "How do I create an account?",
      answer:
        "Click the 'Sign Up' button in the top right corner of the page and follow the prompts to create your account with your email or social media accounts.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we use industry-standard security measures to protect your data. You can review our Privacy Policy for more details on how we handle your information.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team via email at support@eventhub.com, through live chat on our website, or by phone at (555) 123-4567.",
    },
    {
      question: "Do you have a mobile app?",
      answer:
        "Yes, our mobile app is available for both iOS and Android devices. Search for 'EventHub' in the App Store or Google Play Store to download.",
    },
  ],
}

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted-foreground">Find answers to common questions about our platform</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Tabs defaultValue="ticketing" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="ticketing">Ticketing</TabsTrigger>
              <TabsTrigger value="staffing">Staffing</TabsTrigger>
              <TabsTrigger value="general">General</TabsTrigger>
            </TabsList>
            {Object.entries(faqs).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-6">
                <FAQAccordion items={items} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

interface FAQAccordionProps {
  items: FAQ[]
}

function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="border rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className={cn(
              "flex w-full items-center justify-between p-4 text-left font-medium transition-colors",
              openIndex === index ? "bg-muted hover:bg-muted/80" : "hover:bg-muted/50",
            )}
            aria-expanded={openIndex === index}
            aria-controls={`faq-${index}`}
          >
            <span>{item.question}</span>
            <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                id={`faq-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 pt-0 text-muted-foreground">{item.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
