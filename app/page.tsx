import { HeroSection } from "./components/hero-section";
import { Navigation } from "./components/navigation";


export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
    </main>
  )
}
