import Image from "next/image";

export default function SectionFeedback() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-24">
      <h2 className="font-bebas text-fluid-h2 text-wero-accent max-w-5xl uppercase leading-none mb-16 border-l-8 border-wero-accent pl-6">
        ENERGIA · AUTENTYCZNOŚĆ · ENGAGEMENT · HUMOR · STORYTELLING
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col gap-8">
          <div className="relative w-full aspect-[4/3] bg-neutral-200 overflow-hidden flex items-center justify-center p-8 text-center text-neutral-500">
             <Image src="/placeholder-feedback.jpg" alt="Komentarz o energii i humorze" fill className="object-cover opacity-10" />
             <p className="z-10 font-sans font-bold">Screenshot komentarza #1</p>
          </div>
          <div className="relative w-full aspect-[16/9] bg-neutral-200 overflow-hidden flex items-center justify-center p-8 text-center text-neutral-500">
             <Image src="/placeholder-feedback.jpg" alt="Komentarz o autentyczności" fill className="object-cover opacity-10" />
             <p className="z-10 font-sans font-bold">Screenshot komentarza #2</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="relative w-full aspect-[9/16] bg-neutral-200 overflow-hidden flex items-center justify-center p-8 text-center text-neutral-500">
             <Image src="/placeholder-feedback.jpg" alt="Komentarz o zaangażowaniu" fill className="object-cover opacity-10" />
             <p className="z-10 font-sans font-bold">Screenshot komentarza #3</p>
          </div>
          <div className="relative w-full aspect-[4/3] bg-neutral-200 overflow-hidden flex items-center justify-center p-8 text-center text-neutral-500">
             <Image src="/placeholder-feedback.jpg" alt="Ogólny feedback od widzów" fill className="object-cover opacity-10" />
             <p className="z-10 font-sans font-bold">Screenshot komentarza #4</p>
          </div>
        </div>
      </div>
    </section>
  );
}
