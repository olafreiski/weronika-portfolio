import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SvgDivider from "@/components/SvgDivider";
import SectionRealizacje from "@/components/SectionRealizacje";
import SectionKlienci from "@/components/SectionKlienci";
import SectionFeedback from "@/components/SectionFeedback";
import SectionContact from "@/components/SectionContact";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="w-full">
        <Hero />
        <SvgDivider />
        <SectionRealizacje />
        <SectionKlienci />
        <SectionFeedback />
        <SectionContact />
      </main>
      <FloatingButton />
    </>
  );
}
