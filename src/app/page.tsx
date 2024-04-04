import Cards from "@/components/Cards";
import FeaturedCard from "@/components/FeaturedCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhyChooseus from "@/components/WhyChooseus";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
      <Hero />
      <FeaturedCard />
      <WhyChooseus />
      <Cards />
      <Footer />
    </main>
  );
}
