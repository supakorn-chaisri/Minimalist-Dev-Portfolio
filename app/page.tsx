import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/features/home/Hero";
import { Bio } from "@/components/features/home/Bio";
import { Arsenal } from "@/components/features/home/Arsenal";
import { Experience } from "@/components/features/home/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Arsenal />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
