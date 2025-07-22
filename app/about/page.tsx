"use client"

import Image from "next/image";
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function AboutPage() {
  return (
    <>
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-8 w-8 rounded-full bg-primary">
              <span className="absolute inset-0 flex items-center justify-center text-primary-foreground font-bold">
                E
              </span>
            </div>
          </motion.div>
          <span className="font-bold text-xl">EventHub</span>
        </Link>
      </div>
      <main className="bg-gradient-to-b from-white to-zinc-100 dark:from-background dark:to-zinc-900 min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-16 pb-8 text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r bg-gradient-to-r text-[#7C3AED]">Find the perfect place for your special moment</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
           At EventHub, we connect you with the best venues to celebrate. Whether it's a birthday, a meeting, or any other special occasion, our mission is to facilitate access to incredible venues in a simple, fair, and transparent way. Discover, book, and make your experience unforgettable all in one place.
          </p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl h-72 md:h-96 mx-auto rotate-2 shadow-xl rounded-xl overflow-hidden">
              <Image
                src="/vibrant-music-festival.png"
                alt="Festival de música vibrante"
                fill
                style={{objectFit: 'cover'}}
                priority
              />
            </div>
          </div>
        </section>

      
        {/* Seção 1 */}
        <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold mb-4">
             We connect  <span className="bg-gradient-to-r text-[#7C3AED]">celebrations</span> a <span className="bg-gradient-to-rbg-gradient-to-r text-[#7C3AED]">places</span> incredible
            </h2>
            <p className="text-muted-foreground mb-4">
            Here, your search for the ideal space to celebrate takes a new direction. Our platform connects those who want to celebrate with those who offer the best environments for it. You tell us what you want to celebrate—we show you who's ready to host. Partner companies and venues are available, and you choose the location that best suits your event. Everything is simple, transparent, and designed to facilitate your experience from start to finish.
            </p>
            <p  className="text-primary font-medium">
              <a href="#" className="underline hover:text-secondary transition-colors">
                Find out how it works
              </a>
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/art-exhibition.png"
                alt="Exposição de arte"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
          </div>
        </section>

        {/* Seção 2 */}
        <section className="bg-zinc-900 py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center order-2 md:order-1">
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/tech-conference.png"
                  alt="Conferência de tecnologia"
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
            </div>
            <div className="flex-1 text-left order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r bg-gradient-to-r text-[#7C3AED]">Supporting artists</span> and the live events sector
              </h2>
              <p className="text-zinc-200 mb-4">
               
               EventHub connects organizers, artists, and audiences, promoting culture and entertainment. We work to value professionals and ensure everyone has access to unique opportunities and experiences.
              </p>
              <p  className="text-primary font-medium">
              <a href="#" className="underline hover:text-secondary transition-colors">
                Join our community!
              </a>
            </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}