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
          {/* Matura text placed below image */}
          <div className="text-center z-30 flex flex-col gap-1 sm:gap-2 text-white pointer-events-none drop-shadow-md mt-4">
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
