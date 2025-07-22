"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("events")

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 dark:from-primary/10 dark:via-background dark:to-secondary/10" />

      {/* Floating Elements - Decorative */}
      <motion.div
        className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 8,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 h-48 w-48 rounded-full bg-secondary/10 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 10,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Your Gateway to Exceptional <span className="text-primary">Events</span> &{" "}
              <span className="text-primary">Talent</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Discover and book tickets for amazing events or find the perfect staff for your next occasion
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <Tabs defaultValue="events" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="flex w-full max-w-md mx-auto bg-zinc-200/80 dark:bg-zinc-900/70 rounded-xl p-1 gap-2 shadow-lg">
                <TabsTrigger
                  value="events"
                  className="flex-1 rounded-lg py-2 px-4 transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-white

                    dark:data-[state=active]:bg-primary dark:data-[state=active]:text-white hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-white text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Find Catering
                </TabsTrigger>
                <TabsTrigger
                  value="staffing"
                 className="flex-1 rounded-lg py-2 px-4 transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-white

                    dark:data-[state=active]:bg-primary dark:data-[state=active]:text-white hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-white text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Find Staff
                </TabsTrigger>
              </TabsList>
              <TabsContent value="events" className="mt-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search Catering..." className="pl-9" aria-label="Search events" />
                  </div>
                  <div className="relative sm:w-40">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="date" className="pl-9" aria-label="Select date" />
                  </div>
                  <div className="relative sm:w-40">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Location" className="pl-9" aria-label="Enter location" />
                  </div>
                  <Button type="submit">Search</Button>
                </div>
              </TabsContent>
              <TabsContent value="staffing" className="mt-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search positions..." className="pl-9" aria-label="Search positions" />
                  </div>
                  <div className="relative sm:w-40">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="date" className="pl-9" aria-label="Select date" />
                  </div>
                  <div className="relative sm:w-40">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Location" className="pl-9" aria-label="Enter location" />
                  </div>
                  <Button type="submit">Search</Button>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ y: -5 }} whileTap={{ y: 0 }}>
              <Button size="lg" className="w-full sm:w-auto">
                {activeTab === "events" ? "Sell Tickets" : "Find Work"}
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} whileTap={{ y: 0 }}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                {activeTab === "events" ? "Browse Events" : "Post a Job"}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
