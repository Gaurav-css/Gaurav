import FeatureCards from "@/components/main/FeatureCards";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Internships from "@/components/main/Internships";
import Certifications from "@/components/main/Certifications";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Internships />
        <FeatureCards />
        <Certifications />
      </div>
    </main>
  );
}
