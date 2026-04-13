import VideoCard from "./VideoCard";

// Organic blue wavy box component
function DrawnHeading({ title, subtitle, clients }: { title: string, subtitle: string, clients: string }) {
  return (
    <div className="relative inline-block mt-4 mb-12 lg:mb-0 ml-4 md:ml-12 self-start flex-shrink-0 z-20">
      {/* Solid blue box */}
      <div className="bg-[#2B30FF] p-4 md:p-6 pb-6 relative z-10 max-w-sm md:max-w-md">
        <h3 className="font-sans text-3xl md:text-[2.5rem] font-bold uppercase italic text-[#CDCCC8] mb-1 leading-[0.9] tracking-widest relative z-20">
          {title}
        </h3>
        {subtitle && (
          <p className="font-sans text-sm md:text-base font-semibold italic text-[#CDCCC8] mb-3 leading-tight uppercase relative z-20 opacity-90 tracking-wide">
            {subtitle}
          </p>
        )}
        <p className="font-sans text-xs md:text-sm font-light italic text-[#CDCCC8] uppercase leading-snug relative z-20 opacity-80">
          {clients}
        </p>
      </div>
      
      {/* Right wavy border SVG */}
      <div className="absolute top-[5%] -right-[25px] md:-right-[35px] h-[90%] w-[35px] z-0 text-[#2B30FF]">
        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 30 100" width="100%" height="100%" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0,5 C25,15 35,20 0,35 C25,45 35,50 0,65 C25,75 35,80 0,95" />
        </svg>
      </div>

      {/* Bottom wavy border SVG */}
      <div className="absolute -bottom-[15px] md:-bottom-[20px] left-[5%] w-[80%] h-[25px] z-0 text-[#2B30FF]">
        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 100 30" width="100%" height="100%" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5,0 C15,25 20,35 35,0 C45,25 50,35 65,0 C75,25 80,35 95,0" />
        </svg>
      </div>
    </div>
  );
}

// Giant bottom squiggly line component
function GiantSquiggle() {
  return (
    <div className="w-full relative h-[80px] md:h-[140px] mt-24 mb-16 text-[#2B30FF] overflow-visible">
      <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M -50,50 Q 50,-10 150,50 C 200,80 250,90 280,30 C 310,-30 350,-10 380,50 Q 420,110 500,50 T 650,40 C 700,40 750,110 800,60 C 850,10 900,10 950,50 Q 1050,110 1250,50" />
      </svg>
    </div>
  );
}

export default function SectionRealizacje() {
  return (
    <section id="realizacje" className="w-full max-w-[1600px] mx-auto pt-16 md:pt-24 pb-8 scroll-mt-24 overflow-hidden">
      
      <div className="flex flex-col gap-8 w-full">
        
        {/* === DIGITAL HOST === */}
        <div className="w-full relative">
          <div className="flex flex-col lg:block w-full">
             
             {/* The drawn header acts as normal block on mobile, absolute on desktop */}
             <div className="lg:absolute lg:left-8 lg:top-8 z-20">
               <DrawnHeading 
                 title="DIGITAL HOST" 
                 subtitle="CONCEPT/SCRIPT/CREATIVE DIRECTION/STARRING/EDIT" 
                 clients="TVN, MELORADIO, HOUSE, DAWTONA, SURF.INC, IMAGINATION DAY, YOUNG CREATIVES" 
               />
             </div>

             {/* Videos Flex Container */}
             <div className="flex flex-wrap lg:flex-nowrap justify-center items-center lg:items-start lg:h-[750px] gap-8 lg:gap-6 w-full px-4 lg:px-12 relative z-10 lg:pl-[250px] xl:pl-[350px]">
                
                 <div className="w-full sm:w-[45%] lg:flex-1 lg:max-w-[340px] lg:mt-[260px] shadow-2xl transition-transform">
                   <VideoCard embedIframe='<iframe src="https://www.tiktok.com/embed/v2/7541051110618926358" loading="lazy"></iframe>' type="VERTICAL" />
                 </div>
                 
                 <div className="w-full sm:w-[45%] lg:flex-1 lg:max-w-[340px] lg:mt-[40px] shadow-xl transition-transform">
                   <VideoCard embedIframe='<iframe src="https://www.tiktok.com/embed/v2/7610337499444940054" loading="lazy"></iframe>' type="VERTICAL" />
                 </div>
                 
                 <div className="w-full sm:w-[45%] lg:flex-1 lg:max-w-[340px] lg:mt-[130px] shadow-2xl transition-transform">
                   <VideoCard embedIframe='<iframe src="https://www.instagram.com/reel/C_ne44goaki/embed/" loading="lazy" frameborder="0" scrolling="no" allowtransparency="true"></iframe>' type="VERTICAL" />
                 </div>
                 
                 <div className="w-full sm:w-[45%] lg:flex-1 lg:max-w-[340px] lg:mt-[20px] shadow-xl transition-transform">
                   <VideoCard embedIframe='<iframe src="https://www.instagram.com/reel/DDHyhSrvFjR/embed/" loading="lazy" frameborder="0" scrolling="no" allowtransparency="true"></iframe>' type="VERTICAL" />
                 </div>

             </div>
          </div>
          <GiantSquiggle />
        </div>

        {/* === CREATIVE DIRECTION === */}
        <div className="w-full relative">
          <div className="flex flex-col lg:block w-full">
             <div className="lg:absolute lg:right-8 lg:top-12 z-20">
               <DrawnHeading 
                 title="CREATIVE DIRECTION" 
                 subtitle="CAMPAIGNS/PHOTOSHOOTS/COMMERCIALS" 
                 clients="RESERVED, ZALANDO, RAYBAN, ADIDAS" 
               />
             </div>

             <div className="flex flex-wrap lg:flex-nowrap justify-center items-center lg:items-start lg:h-[750px] gap-8 lg:gap-6 w-full px-4 lg:px-12 relative z-10 lg:pr-[250px] xl:pr-[350px]">
                 <div className="w-full sm:w-[45%] lg:flex-1 lg:max-w-[340px] lg:mt-[50px] shadow-xl transition-transform">
                   <VideoCard embedIframe='<iframe src="https://www.instagram.com/reel/111/embed" loading="lazy"></iframe>' type="VERTICAL" />
                 </div>
                 <div className="w-full sm:w-[45%] lg:flex-1 lg:max-w-[340px] lg:mt-[180px] shadow-2xl transition-transform">
                   <VideoCard embedIframe='<iframe src="https://www.instagram.com/reel/222/embed" loading="lazy"></iframe>' type="VERTICAL" />
                 </div>
                 <div className="w-full sm:w-[45%] lg:flex-1 lg:max-w-[340px] lg:mt-[30px] shadow-xl transition-transform">
                   <VideoCard embedIframe='<iframe src="https://www.instagram.com/reel/333/embed" loading="lazy"></iframe>' type="VERTICAL" />
                 </div>
                 <div className="w-full sm:w-[45%] lg:flex-1 lg:max-w-[340px] lg:mt-[260px] shadow-2xl transition-transform">
                   <VideoCard embedIframe='<iframe src="https://www.instagram.com/reel/444/embed" loading="lazy"></iframe>' type="VERTICAL" />
                 </div>
             </div>
          </div>
          <GiantSquiggle />
        </div>

        {/* === COPYWRITING === */}
        <div className="w-full relative">
          <div className="flex flex-col lg:block w-full">
             <div className="lg:absolute lg:left-8 lg:top-8 z-20">
               <DrawnHeading 
                 title="COPYWRITING" 
                 subtitle="CM JINGLES/SCRIPTS/SLOGANS" 
                 clients="NOIZZ x GEN Z SISTER, RESERVED x MACIEJ MUSIAŁ" 
               />
             </div>

             <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:h-[500px] gap-12 lg:gap-16 w-full px-4 lg:px-12 relative z-10 lg:pl-[200px] xl:pl-[300px]">
                 <div className="w-full lg:flex-1 lg:max-w-[500px] lg:mt-[180px] shadow-2xl transition-transform">
                   <VideoCard embedIframe='<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>' type="HORIZONTAL" />
                 </div>
                 <div className="w-full lg:flex-1 lg:max-w-[500px] lg:mt-[40px] shadow-xl transition-transform">
                   <VideoCard embedIframe='<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>' type="HORIZONTAL" />
                 </div>
             </div>
          </div>
          <GiantSquiggle />
        </div>

        {/* === CONTENT CREATION === */}
        <div className="w-full relative">
          <div className="flex flex-col lg:block w-full">
             <div className="lg:absolute lg:right-8 lg:top-8 z-20">
               <DrawnHeading 
                 title="CONTENT CREATION" 
                 subtitle="SOCIAL MEDIA/TIKTOK/INSTAGRAM" 
                 clients="POKKET, HOUSE BRAND, TVN, BANDIT" 
               />
             </div>

             <div className="flex flex-wrap lg:flex-nowrap justify-center items-center lg:items-start lg:h-[750px] gap-8 lg:gap-6 w-full px-4 lg:px-12 relative z-10 lg:pr-[250px] xl:pr-[350px]">
                 <div className="w-full sm:w-[45%] lg:flex-1 lg:max-w-[340px] lg:mt-[220px] shadow-2xl transition-transform">
                   <VideoCard embedIframe='<iframe src="https://www.tiktok.com/embed/v2/555" loading="lazy"></iframe>' type="VERTICAL" />
                 </div>
                 <div className="w-full sm:w-[45%] lg:flex-1 lg:max-w-[340px] lg:mt-[60px] shadow-xl transition-transform">
                   <VideoCard embedIframe='<iframe src="https://www.tiktok.com/embed/v2/666" loading="lazy"></iframe>' type="VERTICAL" />
                 </div>
                 <div className="w-full sm:w-[45%] lg:flex-1 lg:max-w-[340px] lg:mt-[150px] shadow-2xl transition-transform">
                   <VideoCard embedIframe='<iframe src="https://www.tiktok.com/embed/v2/777" loading="lazy"></iframe>' type="VERTICAL" />
                 </div>
                 <div className="w-full sm:w-[45%] lg:flex-1 lg:max-w-[340px] lg:mt-[20px] shadow-xl transition-transform">
                   <VideoCard embedIframe='<iframe src="https://www.tiktok.com/embed/v2/888" loading="lazy"></iframe>' type="VERTICAL" />
                 </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
