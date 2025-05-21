"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Event } from "@/lib/types"

// Mock data for featured events
const featuredEvents: Event[] = [
  {
    id: "1",
    title: "Summer Music Festival",
    description: "A three-day music festival featuring top artists from around the world",
    date: "2023-07-15",
    time: "12:00 PM",
    location: "Central Park, New York",
    price: 89.99,
    image: "/vibrant-music-festival.png",
    category: "Music",
  },
  {
    id: "2",
    title: "Tech Conference 2023",
    description: "The biggest tech conference of the year with keynotes from industry leaders",
    date: "2023-08-10",
    time: "9:00 AM",
    location: "Convention Center, San Francisco",
    price: 299.99,
    image: "/tech-conference.png",
    category: "Technology",
  },
  {
    id: "3",
    title: "Food & Wine Festival",
    description: "Taste exquisite dishes and wines from renowned chefs and wineries",
    date: "2023-09-05",
    time: "5:00 PM",
    location: "Waterfront Park, Chicago",
    price: 75.0,
    image: "/food-wine-festival.png",
    category: "Food",
  },
  {
    id: "4",
    title: "Art Exhibition Opening",
    description: "Opening night of the contemporary art exhibition featuring local artists",
    date: "2023-07-28",
    time: "7:00 PM",
    location: "Modern Art Gallery, Los Angeles",
    price: 25.0,
    image: "/art-exhibition.png",
    category: "Art",
  },
  {
    id: "5",
    title: "Marathon 2023",
    description: "Annual city marathon with routes for all experience levels",
    date: "2023-10-12",
    time: "6:00 AM",
    location: "Downtown, Boston",
    price: 50.0,
    image: "/placeholder-nlfcp.png",
    category: "Sports",
  },
  {
    id: "6",
    title: "Comedy Night",
    description: "A night of laughter with top stand-up comedians",
    date: "2023-08-18",
    time: "8:00 PM",
    location: "Comedy Club, Austin",
    price: 35.0,
    image: "/placeholder.svg?height=400&width=600&query=comedy+show",
    category: "Entertainment",
  },
]

export default function EventsGrid() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {featuredEvents.map((event) => (
        <motion.div key={event.id} variants={item}>
          <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
            <motion.div
              className="relative h-48 w-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={Number.parseInt(event.id) <= 3}
              />
              <div className="absolute top-2 right-2">
                <Badge
                  className={cn(
                    "text-xs",
                    event.category === "Music" && "bg-pink-500",
                    event.category === "Technology" && "bg-blue-500",
                    event.category === "Food" && "bg-orange-500",
                    event.category === "Art" && "bg-purple-500",
                    event.category === "Sports" && "bg-green-500",
                    event.category === "Entertainment" && "bg-yellow-500",
                  )}
                >
                  {event.category}
                </Badge>
              </div>
            </motion.div>
            <CardContent className="p-4">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="mr-1 h-3 w-3" />
                <span>
                  {formatDate(event.date)} • {event.time}
                </span>
              </div>
              <h3 className="font-semibold text-lg line-clamp-1">{event.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{event.description}</p>
              <div className="flex items-center text-sm text-muted-foreground mt-2">
                <MapPin className="mr-1 h-3 w-3" />
                <span className="truncate">{event.location}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex items-center justify-between">
              <div className="font-bold">${event.price.toFixed(2)}</div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm">Book Now</Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
