"use client"

import type React from "react"
import { useState } from "react"
import { AtSign, Mail, MapPin, Phone } from "lucide-react"

export function ContactFooter() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0">
        <img
          src="/images/joburg-city-lights.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 lg:px-10 lg:pt-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: pitch + contact details */}
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
              <span className="h-px w-10 bg-primary" />
              Get in Touch
            </p>
            <h2 className="max-w-xl text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s create something worth watching.
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Tell us about your project — a shoot, a campaign, or an idea you can&apos;t stop thinking about. We&apos;ll
              get back to you within 24 hours.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:hello@sychemedia.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-primary" />
                hello@sychemedia.com
              </a>
              <a
                href="tel:+27210000000"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4 text-primary" />
                +27 21 000 0000
              </a>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" />
                Cape Town &amp; Johannesburg, South Africa
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <AtSign className="size-4 text-primary" />
                @sychemedia
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm lg:p-10">
            {submitted ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                <h3 className="font-serif text-3xl">Thank you.</h3>
                <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                  Your message is on its way. We&apos;ll be in touch shortly to talk through your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input id="name" name="name" required placeholder="Your name" className={inputClass} />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Service" htmlFor="service">
                  <select id="service" name="service" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Content Creation</option>
                    <option>Marketing</option>
                    <option>Advertising</option>
                    <option>Photography</option>
                  </select>
                </Field>

                <Field label="Project details" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us what you have in mind..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-border py-10 sm:flex-row">
          <a href="#top" className="flex items-baseline gap-1 font-serif text-xl leading-none">
            <span>Syche</span>
            <span className="text-primary">Media.</span>
          </a>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Syche Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs uppercase tracking-wider text-muted-foreground">
            <a href="#work" className="transition-colors hover:text-foreground">
              Work
            </a>
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}

const inputClass =
  "w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary"

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
