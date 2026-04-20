import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[750px] bg-[#CDCCC8] overflow-hidden flex flex-col items-center justify-center font-sans">

      {/* Central content container */}
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center flex-1">

        {/* Central Content Stack (Image + Texts) */}
        <div className="absolute top-[48%] sm:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 sm:gap-8 z-10 w-[95vw] sm:w-[50vw] md:w-max mt-4 sm:mt-0">
          
          {/* The Image Layer */}
          <div className="relative w-[70vw] sm:w-[50vw] md:w-[380px] lg:w-[480px] aspect-[4/5] select-none shrink-0">
            <Image
              src="/wero-bg.png"
              alt="Weronika Targońska"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>

          {/* Blue texts below image */}
          <div className="z-30 flex flex-col items-center gap-[6px] md:gap-2 text-[#2B30FF]">
            <div className="flex items-end gap-1 md:gap-2 group cursor-pointer">
              <span className="text-[11px] sm:text-xs md:text-xl font-medium uppercase tracking-[0.05em] leading-none mb-[2px] md:mb-[4px]">CONTENT CREATION</span>
              <span className="text-lg md:text-4xl font-black leading-none text-[#2B30FF]">!</span>
            </div>

            <div className="flex items-end gap-1 group cursor-pointer">
              <span className="text-[11px] sm:text-xs md:text-xl font-medium uppercase tracking-[0.05em] leading-none mb-[2px] md:mb-[4px]">COPYWRITING</span>
            </div>

            <div className="flex items-center gap-1 group cursor-pointer">
              <span className="text-[11px] sm:text-xs md:text-xl font-medium uppercase tracking-[0.05em] leading-none mb-[2px] md:mb-[4px]">SOCIAL MEDIA</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-6 md:h-6 -translate-y-[1px]">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>

            <div className="flex items-end gap-1 group cursor-pointer">
              <span className="text-[11px] sm:text-xs md:text-xl font-medium uppercase tracking-[0.05em] leading-none">CREATIVE DIRECTION</span>
            </div>

            <div className="mt-1 text-[#2B30FF]">
              <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="w-[70px] md:w-[110px]">
                <path d="M5 10 Q 40 0 85 8 M 10 22 Q 50 15 90 22 M 20 34 Q 55 25 80 32" />
              </svg>
            </div>
          </div>

          {/* Matura text placed below blue texts */}
          <div className="text-center z-30 flex flex-col gap-1 sm:gap-2 text-white pointer-events-none drop-shadow-md mt-2">
            <p className="text-[13px] sm:text-[18px] md:text-[26px] font-medium tracking-wide">
              Do matury nie wiedziałam kim zostanę jak będę dorosła.
            </p>
            <p className="text-[13px] sm:text-[18px] md:text-[26px] font-medium tracking-wide">
              Potem dowiedziałam się, że można wymyślać pomysły za pieniądze.
            </p>
          </div>
        </div>

        {/* Typography Text (Layer 2 - Overlaps Image) */}
        <div className="absolute top-[18%] md:top-[30%] left-1/2 -translate-x-1/2 -translate-y-[52%] z-20 w-full flex flex-col items-center pointer-events-none">

          <div className="relative flex justify-center w-full">
            <h1 className="text-[25vw] md:text-[200px] lg:text-[270px] font-extrabold leading-[0.75] tracking-normal text-[#2B30FF] m-0 p-0 flex justify-center items-center">
              <span>W</span><span>E</span><span>R</span><span>O</span>
            </h1>
          </div>

          <div className="relative flex justify-center w-full mt-[-2%] md:mt-[-4%] lg:mt-[-5%]">
            <h1
              className="text-[25vw] md:text-[200px] lg:text-[270px] font-extrabold leading-[0.75] tracking-normal text-transparent m-0 p-0 flex justify-center items-center"
              style={{ WebkitTextStroke: '2px #2B30FF' }}
            >
              NIKA
            </h1>
          </div>

          <div className="flex justify-center z-30 text-white font-medium text-xs sm:text-sm md:text-xl tracking-wide mt-4 md:mt-8 lg:mt-12 w-full lg:-ml-[10%]">
            creative portfolio
          </div>
        </div>



      </div>



    </section>
  );
}
