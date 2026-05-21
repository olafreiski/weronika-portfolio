import VideoCard from "./VideoCard";

function WavyDivider() {
  return (
    <div className="w-full relative h-[60px] md:h-[100px] text-[#2B30FF] overflow-visible -mt-8 md:-mt-12 mb-8 md:mb-16">
      <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full overflow-visible" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M -50,50 Q 50,-10 150,50 C 200,80 250,90 280,30 C 310,-30 350,-10 380,50 Q 410,110 500,50 T 650,40 C 710,90 750,110 800,60 C 850,10 900,10 950,50 Q 1050,130 1250,50" />
      </svg>
    </div>
  );
}

export default function SectionIntroVideo() {
  return (
    <section className="w-full bg-[#CDCCC8] pb-16 md:pb-24 flex flex-col items-center justify-center">
      
      {/* Wavy divider line separating the sections */}
      <WavyDivider />

      <div className="w-full max-w-7xl px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
        
        {/* Left Side: Video (Horizontal, large) */}
        <div className="w-full md:w-[60%] lg:w-[65%] shadow-2xl rounded-2xl overflow-hidden border-4 border-[#2B30FF] bg-[#CDCCC8] shrink-0">
          <VideoCard videoSrc="/wideo-intro.mp4" type="HORIZONTAL" muted={false} />
        </div>

        {/* Right Side: Blue Texts */}
        <div className="w-full md:w-[40%] lg:w-[35%] flex flex-col items-center md:items-start gap-4 md:gap-6 text-[#2B30FF]">
          
          <div className="flex items-end gap-2 group cursor-pointer">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.05em] leading-none mb-1">CONTENT CREATION</span>
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-none text-[#2B30FF] -translate-y-1">!</span>
          </div>

          <div className="flex items-end gap-1 group cursor-pointer">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.05em] leading-none">COPYWRITING</span>
          </div>

          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.05em] leading-none">SOCIAL MEDIA</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 -translate-y-[1px]">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>

          <div className="flex items-end gap-1 group cursor-pointer">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.05em] leading-none">CREATIVE DIRECTION</span>
          </div>

          <div className="mt-2 text-[#2B30FF]">
            <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="w-[100px] md:w-[150px] lg:w-[180px]">
              <path d="M5 10 Q 40 0 85 8 M 10 22 Q 50 15 90 22 M 20 34 Q 55 25 80 32" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}
