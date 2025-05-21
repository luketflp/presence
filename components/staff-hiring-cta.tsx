"use client"

import React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Users, Calendar, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { StaffPosition } from "@/lib/types"

// Mock data for featured positions
const featuredPositions: StaffPosition[] = [
  {
    id: "1",
    title: "Event Coordinator",
    hourlyRate: 25,
    location: "New York, NY",
    type: "Full-time",
  },
  {
    id: "2",
    title: "Bartender",
    hourlyRate: 18,
    location: "Los Angeles, CA",
    type: "Part-time",
  },
  {
    id: "3",
    title: "Security Personnel",
    hourlyRate: 22,
    location: "Chicago, IL",
    type: "Contract",
  },
  {
    id: "4",
    title: "Sound Technician",
    hourlyRate: 30,
    location: "Austin, TX",
    type: "Freelance",
  },
  {
    id: "5",
    title: "Catering Staff",
    hourlyRate: 16,
    location: "Miami, FL",
    type: "Part-time",
  },
]

// Timeline steps for hiring process
const timelineSteps = [
  {
    title: "Create Profile",
    description: "Sign up and create your professional profile",
    icon: Users,
  },
  {
    title: "Browse Opportunities",
    description: "Find events that match your skills and availability",
    icon: Calendar,
  },
  {
    title: "Apply & Get Hired",
    description: "Apply for positions and get hired quickly",
    icon: CheckCircle,
  },
  {
    title: "Work & Get Paid",
    description: "Work at amazing events and receive payment fast",
    icon: Clock,
  },
]

// Stats for counter animation
const stats = [
  { value: 500, label: "Successful Hires" },
  { value: 200, label: "Partner Companies" },
  { value: 50, label: "Cities Covered" },
]

export default function StaffHiringCTA() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/20 dark:from-secondary/10 dark:via-background dark:to-primary/10" />

      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Find Work at Amazing Events</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join our network of event professionals and find flexible work opportunities
            </p>
          </motion.div>
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card rounded-lg p-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
              >
                <CounterAnimation
                  targetValue={stat.value}
                  isInView={isInView}
                  className="text-4xl font-bold text-primary"
                />
                <span className="text-4xl font-bold text-primary">+</span>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Animation */}
        <div className="mb-12">
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="relative md:text-center"
                >
                  <div className="flex md:block md:text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                        delay: 0.3 + 0.2 * index,
                      }}
                      className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground md:mx-auto"
                    >
                      <step.icon className="h-6 w-6" />
                    </motion.div>
                    <div className="ml-4 md:ml-0 md:mt-4">
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Slider */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Featured Positions</h3>
          <div ref={scrollContainerRef} className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide">
            {featuredPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex-shrink-0 w-[280px]"
              >
                <Card>
                  <CardContent className="p-4">
                    <div
                      className={cn(
                        "text-xs font-medium mb-2 inline-block px-2 py-1 rounded",
                        position.type === "Full-time" &&
                          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
                        position.type === "Part-time" &&
                          "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
                        position.type === "Contract" &&
                          "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
                        position.type === "Freelance" &&
                          "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100",
                      )}
                    >
                      {position.type}
                    </div>
                    <h4 className="font-semibold">{position.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{position.location}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-bold">${position.hourlyRate}/hr</span>
                      <Button size="sm" variant="outline">
                        Apply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" className="group">
              Browse All Positions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

interface CounterAnimationProps {
  targetValue: number
  isInView: boolean
  className?: string
}

function CounterAnimation({ targetValue, isInView, className }: CounterAnimationProps) {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2000
    const increment = targetValue / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      setCount(Math.min(Math.floor(start), targetValue))

      if (start >= targetValue) {
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, targetValue])

  return <span className={className}>{count}</span>
}
