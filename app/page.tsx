import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import DetailsSection from "@/components/details-section"
import PhotosSection from "@/components/photos-section"
import RsvpSection from "@/components/rsvp-section"
import GiftsSection from "@/components/gifts-section"
import Footer from "@/components/footer"

export default function WeddingWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-mint-50 to-mint-100">
      <Header />
      <main>
        <HeroSection />
        <DetailsSection />
        <PhotosSection />
        <RsvpSection />
        <GiftsSection />
      </main>
      <Footer />
    </div>
  )
}
