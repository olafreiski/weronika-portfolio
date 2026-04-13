import Hero from "@/components/Hero";
import SectionRealizacje from "@/components/SectionRealizacje";
import SectionKlienci from "@/components/SectionKlienci";
import SectionFeedback from "@/components/SectionFeedback";
import SectionContact from "@/components/SectionContact";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <Hero />
        <SectionRealizacje />
        <SectionKlienci />
        <SectionFeedback />
        <SectionContact />
      </main>
      <FloatingButton />
    </>
  );
}
