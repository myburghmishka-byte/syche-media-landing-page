import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { WorkGallery } from "@/components/work-gallery"
import { Services } from "@/components/services"
import { Audience } from "@/components/audience"
import { Studio } from "@/components/studio"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Marquee />
      <WorkGallery />
      <Services />
      <Audience />
      <Studio />
      <ContactFooter />
    </main>
  )
}
