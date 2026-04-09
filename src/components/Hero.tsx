import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column - Typography & Image */}
        <div className="lg:col-span-8 flex flex-col items-start w-full relative">
          <h1 className="font-bebas text-fluid-h1 text-wero-accent uppercase tracking-tighter w-full leading-none group z-10 mix-blend-multiply">
            <span className="block hover:translate-x-4 transition-transform duration-300">WERONIKA</span>
            <span className="block text-right hover:-translate-x-4 transition-transform duration-300">TARGOŃSKA</span>
          </h1>

          <div className="w-full max-w-sm md:max-w-md mt-[-8%] md:mt-[-12%] self-center lg:self-start grayscale hover:grayscale-0 transition-all duration-500 z-0">
            <div className="aspect-[4/5] relative bg-neutral-300 overflow-hidden w-full">
              <Image 
                src="/hero-placeholder.jpg" 
                alt="Weronika Targońska"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Column - Services & Bio */}
        <div className="lg:col-span-4 flex flex-col gap-12 pt-8 lg:pt-24 h-full z-10 w-full relative">
          <ul className="flex flex-col gap-4 font-bebas text-3xl md:text-5xl text-wero-accent border-l-4 border-wero-accent pl-6 py-2">
            <li className="hover:translate-x-2 transition-transform cursor-default">DIGITAL HOST</li>
            <li className="hover:translate-x-2 transition-transform cursor-default">COPYWRITING</li>
            <li className="hover:translate-x-2 transition-transform cursor-default">CREATIVE DIRECTION</li>
            <li className="hover:translate-x-2 transition-transform cursor-default">CONTENT CREATION</li>
          </ul>

          <p className="font-sans text-xl md:text-2xl font-semibold leading-relaxed max-w-md">
            „do matury nie wiedziałam kim zostanę jak będę dorosła. potem dowiedziałam się, że można wymyślać pomysły za pieniądze.”
          </p>
        </div>
      </div>
    </section>
  );
}
