import { Suspense } from "react"
import { MoveRight } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import EventsGrid from "@/components/events-grid"
import StaffHiringCTA from "@/components/staff-hiring-cta"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import EventsGridSkeleton from "@/components/skeletons/events-grid-skeleton"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <HeroSection />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Events</h2>
            <p className="mt-2 text-muted-foreground">Discover and book tickets for the hottest events</p>
          </div>
          <Link href="/events" className="group flex items-center gap-2 text-sm font-medium">
            View all events
            <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <Suspense fallback={<EventsGridSkeleton />}>
          <EventsGrid />
        </Suspense>
      </section>

      <StaffHiringCTA />

      <FAQSection />

      <Footer />
    </main>
  )
}
