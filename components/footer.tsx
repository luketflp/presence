"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Please enter your email address")
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    // Simulate API call
    setTimeout(() => {
      setSubscribed(true)
      setEmail("")
    }, 500)
  }

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Safety Center", href: "/safety" },
        { label: "Community Guidelines", href: "/guidelines" },
        { label: "Sitemap", href: "/sitemap" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Accessibility", href: "/accessibility" },
      ],
    },
  ]

  const socialLinks = [
    { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  ]

  return (
    <footer className="bg-muted/40 pt-12 pb-6">
      <div className="container px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 rounded-full bg-primary">
                <span className="absolute inset-0 flex items-center justify-center text-primary-foreground font-bold">
                  E
                </span>
              </div>
              <span className="font-bold text-xl">EventHub</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your gateway to exceptional events and talent. Find and book tickets for amazing events or hire the
              perfect staff.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-muted-foreground hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold">Subscribe to our newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Get the latest news and updates delivered to your inbox.
            </p>
            {subscribed ? (
              <div className="mt-4 rounded-lg bg-primary/10 p-3 text-sm text-primary">
                Thanks for subscribing! Check your email for confirmation.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email address"
                    className="flex-1"
                  />
                  <Button type="submit" size="icon" aria-label="Subscribe">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
              </form>
            )}
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} EventHub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
