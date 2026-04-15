import Hero from "@/components/Hero";
import SectionRealizacje from "@/components/SectionRealizacje";
import SectionKlienci from "@/components/SectionKlienci";

import SectionContact from "@/components/SectionContact";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <Hero />
        <SectionKlienci />
        <SectionRealizacje />

        <SectionContact />
      </main>
      <FloatingButton />
    </>
  );
}
