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
      <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full overflow-visible" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M -50,50 Q 50,-10 150,50 C 200,80 250,90 280,30 C 310,-30 350,-10 380,50 Q 410,110 500,50 T 650,40 C 710,90 750,110 800,60 C 850,10 900,10 950,50 Q 1050,130 1250,50" />
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
            <div className="flex flex-col gap-12 lg:gap-0 lg:h-[1350px] w-full relative z-10">

              {/* Row 1 */}
              <div className="flex flex-wrap lg:flex-nowrap justify-center items-center lg:items-start w-full px-4 lg:px-12">
                <div className="w-full sm:w-[45%] lg:w-[270px] lg:flex-none lg:mt-[320px] lg:mr-[100px] xl:mr-[120px] relative z-30">
                  <div className="shadow-2xl transition-transform w-full">
                    <VideoCard videoSrc="/Filmik1.mp4" type="AUTO" />
                  </div>
                  <a
                    href="https://www.tiktok.com/@house_brand/video/7522112891051347222?embed_source=121374463%2C121468991%2C121439635%2C121749182%2C121433650%2C121404358%2C121497414%2C122221973%2C122122240%2C121351166%2C121811500%2C121960941%2C122122244%2C122122243%2C122122242%2C121487028%2C122258714%2C121331973%2C120811592%2C120810756%2C121885509%3Bnull%3Bembed_blank&refer=embed&referer_url=canva-embed.com%2Fapi%2Fiframe%3Fapp%3D1%26url%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540house_brand%252Fvideo%252F7522112891051347222%253Fis_from_webapp%253D1%2526sender_device%253Dpc%2526web_id%253D7491357198682736150%26key%3D462812a26b593f2dbfbfcbb14f6d699a&referer_video_id=7522112891051347222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 mb-12 lg:mb-0 text-center font-sans font-bold text-[#2B30FF] text-lg uppercase underline decoration-2 underline-offset-4 hover:opacity-75 transition-opacity"
                  >
                    LINK
                  </a>
                </div>

                <div className="w-full sm:w-[45%] lg:w-[270px] lg:flex-none lg:mt-[40px] lg:mr-[30px] xl:mr-[40px] relative z-30">
                  <div className="shadow-xl transition-transform w-full">
                    <VideoCard videoSrc="/filmik2.mp4" type="AUTO" />
                  </div>
                  <a
                    href="https://www.tiktok.com/@tvn.pl/video/7540916756009766166?referer_url=canva-embed.com%2Fapi%2Fiframe%3Fapp%3D1%26url%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540tvn.pl%252Fvideo%252F7540916756009766166%26key%3D462812a26b593f2dbfbfcbb14f6d699a&refer=embed&embed_source=121374463%2C121468991%2C121439635%2C121749182%2C121433650%2C121404358%2C121497414%2C122221973%2C122122240%2C121351166%2C121811500%2C121960941%2C122122244%2C122122243%2C122122242%2C121487028%2C122258714%2C121331973%2C120811592%2C120810756%2C121885509%3Bnull%3Bembed_blank&referer_video_id=7540916756009766166"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 mb-12 lg:mb-0 text-center font-sans font-bold text-[#2B30FF] text-lg uppercase underline decoration-2 underline-offset-4 hover:opacity-75 transition-opacity"
                  >
                    LINK
                  </a>
                </div>

                <div className="w-full sm:w-[45%] lg:w-[270px] lg:flex-none lg:mt-[180px] relative z-30">
                  <div className="shadow-2xl transition-transform w-full">
                    <VideoCard videoSrc="/filmik3.mp4" type="AUTO" />
                  </div>
                  <a
                    href="https://www.tiktok.com/@allegro/video/7605970705745775894?_r=1&_t=ZN-95ZHvmok926"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 mb-12 lg:mb-0 text-center font-sans font-bold text-[#2B30FF] text-lg uppercase underline decoration-2 underline-offset-4 hover:opacity-75 transition-opacity"
                  >
                    LINK
                  </a>
                </div>
              </div>

              {/* Content creation heading placed centrally between the 6 videos! */}
              <div className="flex items-center justify-center lg:absolute lg:left-1/2 lg:top-[720px] lg:-translate-x-1/2 lg:-translate-y-1/2 z-40 w-full lg:w-auto mt-12 mb-8 lg:mt-0 lg:mb-0 lg:scale-[0.80] xl:scale-90 origin-center transition-transform">
                <DrawnHeading
                  title="CONTENT CREATION"
                  subtitle="SOCIAL MEDIA/TIKTOK/INSTAGRAM"
                  clients="POKKET, HOUSE BRAND, TVN, BANDIT"
                />
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap lg:flex-nowrap justify-center items-center lg:items-start w-full px-4 lg:px-12 lg:-mt-[50px]">
                <div className="w-full sm:w-[45%] lg:w-[270px] lg:flex-none lg:mt-[80px] lg:mr-[80px] xl:mr-[100px] relative z-30">
                  <div className="shadow-2xl transition-transform w-full">
                    <VideoCard videoSrc="/filmik4.mp4" type="AUTO" />
                  </div>
                  <a
                    href="https://www.tiktok.com/@tvn.pl/video/7541051110618926358?embed_source=121374463%2C121468991%2C121439635%2C121749182%2C121433650%2C121404358%2C121497414%2C122221973%2C122122240%2C121351166%2C121811500%2C121960941%2C122122244%2C122122243%2C122122242%2C121487028%2C122258714%2C121331973%2C120811592%2C120810756%2C121885509%3Bnull%3Bembed_blank&refer=embed&referer_url=canva-embed.com%2Fapi%2Fiframe%3Fapp%3D1%26url%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540tvn.pl%252Fvideo%252F7541051110618926358%253Fis_from_webapp%253D1%2526sender_device%253Dpc%2526web_id%253D7491357198682736150%26key%3D462812a26b593f2dbfbfcbb14f6d699a&referer_video_id=7541051110618926358"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 mb-12 lg:mb-0 text-center font-sans font-bold text-[#2B30FF] text-lg uppercase underline decoration-2 underline-offset-4 hover:opacity-75 transition-opacity"
                  >
                    LINK
                  </a>
                </div>

                <div className="w-full sm:w-[45%] lg:w-[270px] lg:flex-none lg:mt-[220px] lg:mr-[50px] xl:mr-[70px] relative z-30">
                  <div className="shadow-xl transition-transform w-full">
                    <VideoCard videoSrc="/filmik5.mp4" type="AUTO" />
                  </div>
                  <a
                    href="https://www.instagram.com/reels/DKJ-QvtNoCz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 mb-12 lg:mb-0 text-center font-sans font-bold text-[#2B30FF] text-lg uppercase underline decoration-2 underline-offset-4 hover:opacity-75 transition-opacity"
                  >
                    LINK
                  </a>
                </div>

                <div className="w-full sm:w-[45%] lg:w-[270px] lg:flex-none lg:mt-[40px] relative z-30">
                  <div className="shadow-2xl transition-transform w-full">
                    <VideoCard videoSrc="/filmik6.mp4" type="AUTO" />
                  </div>
                  <a
                    href="https://www.tiktok.com/@pokket_pl/video/7468387510985493782?referer_url=canva-embed.com%2Fapi%2Fiframe%3Fapp%3D1%26url%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540pokket_pl%252Fvideo%252F7468387510985493782%253F_r%253D1%2526_t%253DZN-8uomO6xuvzy%26key%3D462812a26b593f2dbfbfcbb14f6d699a&refer=embed&embed_source=121374463%2C121468991%2C121439635%2C121749182%2C121433650%2C121404358%2C121497414%2C122221973%2C122122240%2C121351166%2C121811500%2C121960941%2C122122244%2C122122243%2C122122242%2C121487028%2C122258714%2C121331973%2C120811592%2C120810756%2C121885509%3Bnull%3Bembed_blank&referer_video_id=7468387510985493782&fbclid=IwY2xjawRMzAxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEegqsbXTJQ3GgWnRO92tEqHWXT34jPhAAAP8EMrmEONeqwyu78Ac8IQqahVzQ_aem_evpVZiOClSXKfXv_jdtyeQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 mb-12 lg:mb-0 text-center font-sans font-bold text-[#2B30FF] text-lg uppercase underline decoration-2 underline-offset-4 hover:opacity-75 transition-opacity"
                  >
                    LINK
                  </a>
                </div>
              </div>
            </div>
          </div>
          <GiantSquiggle />
        </div>



        {/* === COPYWRITING === */}
        <div className="w-full relative py-12">
          <div className="flex flex-col items-center w-full px-4 lg:px-12 relative z-20">
            <div className="flex flex-col w-full max-w-5xl relative">

              {/* The Text Block */}
              <div className="relative inline-block z-20 mb-10 self-start">
                <div className="bg-[#2B30FF] p-4 md:p-6 pb-6 relative z-10 w-full md:min-w-[650px] text-left border border-[#2B30FF]">
                  <h3 className="font-sans text-3xl md:text-[3.5rem] font-bold uppercase italic text-[#CDCCC8] mb-1 leading-[0.9] tracking-widest relative z-20">
                    COPYWRITING
                  </h3>
                  <p className="font-sans text-sm md:text-lg font-semibold italic text-[#CDCCC8] mb-3 leading-tight uppercase relative z-20 opacity-90 tracking-wide mt-2">
                    COWRITING THE VO/ COWRITING THE SCRIPT
                  </p>
                  <p className="font-sans text-xs md:text-sm font-light italic text-[#CDCCC8] uppercase leading-snug relative z-20 opacity-80">
                    RESERVED, NOIZZ X PAPAYA YOUNG CREATORS
                  </p>
                </div>

                {/* Loops TOP */}
                <div className="absolute -top-5 left-0 w-full h-6 text-[#2B30FF] pointer-events-none scale-y-[-1] z-20">
                  <svg viewBox="0 0 600 30" fill="none" preserveAspectRatio="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full overflow-visible">
                    <path d="M 0 20 C 10 -5 20 -5 15 25 C 25 -5 35 -5 30 25 C 40 -5 50 -5 45 25 C 55 -5 65 -5 60 25 C 70 -5 80 -5 75 25 C 85 -5 95 -5 90 25 C 100 -5 110 -5 105 25 C 115 -5 125 -5 120 25 C 130 -5 140 -5 135 25 C 145 -5 155 -5 150 25 C 160 -5 170 -5 165 25 C 175 -5 185 -5 180 25 C 190 -5 200 -5 195 25 C 205 -5 215 -5 210 25 C 220 -5 230 -5 225 25 C 235 -5 245 -5 240 25 C 250 -5 260 -5 255 25 C 265 -5 275 -5 270 25 C 280 -5 290 -5 285 25 C 295 -5 305 -5 300 25 C 310 -5 320 -5 315 25 C 325 -5 335 -5 330 25 C 340 -5 350 -5 345 25 C 355 -5 365 -5 360 25 C 370 -5 380 -5 375 25 C 385 -5 395 -5 390 25 C 400 -5 410 -5 405 25 C 415 -5 425 -5 420 25 C 430 -5 440 -5 435 25 C 445 -5 455 -5 450 25 C 460 -5 470 -5 465 25 C 475 -5 485 -5 480 25 C 490 -5 500 -5 495 25 C 505 -5 515 -5 510 25 C 520 -5 530 -5 525 25 C 535 -5 545 -5 540 25 C 550 -5 560 -5 555 25 C 565 -5 575 -5 570 25 C 580 -5 590 -5 585 25 C 595 -5 605 -5 600 25" />
                  </svg>
                </div>

                {/* Loops BOTTOM */}
                <div className="absolute -bottom-5 left-0 w-full h-6 text-[#2B30FF] pointer-events-none z-20">
                  <svg viewBox="0 0 600 30" fill="none" preserveAspectRatio="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full overflow-visible">
                    <path d="M 0 20 C 10 -5 20 -5 15 25 C 25 -5 35 -5 30 25 C 40 -5 50 -5 45 25 C 55 -5 65 -5 60 25 C 70 -5 80 -5 75 25 C 85 -5 95 -5 90 25 C 100 -5 110 -5 105 25 C 115 -5 125 -5 120 25 C 130 -5 140 -5 135 25 C 145 -5 155 -5 150 25 C 160 -5 170 -5 165 25 C 175 -5 185 -5 180 25 C 190 -5 200 -5 195 25 C 205 -5 215 -5 210 25 C 220 -5 230 -5 225 25 C 235 -5 245 -5 240 25 C 250 -5 260 -5 255 25 C 265 -5 275 -5 270 25 C 280 -5 290 -5 285 25 C 295 -5 305 -5 300 25 C 310 -5 320 -5 315 25 C 325 -5 335 -5 330 25 C 340 -5 350 -5 345 25 C 355 -5 365 -5 360 25 C 370 -5 380 -5 375 25 C 385 -5 395 -5 390 25 C 400 -5 410 -5 405 25 C 415 -5 425 -5 420 25 C 430 -5 440 -5 435 25 C 445 -5 455 -5 450 25 C 460 -5 470 -5 465 25 C 475 -5 485 -5 480 25 C 490 -5 500 -5 495 25 C 505 -5 515 -5 510 25 C 520 -5 530 -5 525 25 C 535 -5 545 -5 540 25 C 550 -5 560 -5 555 25 C 565 -5 575 -5 570 25 C 580 -5 590 -5 585 25 C 595 -5 605 -5 600 25" />
                  </svg>
                </div>
              </div>

              {/* Videos Container - Side by side, exactly aligned at top */}
              <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 lg:gap-6 w-full relative z-10">
                <div className="w-full lg:flex-1 shadow-2xl max-w-[500px] xl:max-w-[550px] mx-auto lg:mx-0">
                  <VideoCard embedIframe='<iframe src="https://www.youtube.com/embed/KnIlb1KneeY" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>' type="HORIZONTAL" />
                </div>
                <div className="w-full lg:flex-1 shadow-2xl max-w-[500px] xl:max-w-[550px] mx-auto lg:mx-0">
                  <VideoCard embedIframe='<iframe src="https://www.youtube.com/embed/URhcNhJ-ayU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>' type="HORIZONTAL" />
                </div>
              </div>


              {/* Hand-drawn decoration - Wire on right and bottom */}
              <div className="absolute top-24 -right-12 w-32 h-[120%] text-[#2B30FF] pointer-events-none z-0 hidden lg:block overflow-visible">
                <svg viewBox="0 0 150 600" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full overflow-visible">
                  <path d="M 0 0 C 60 20, 10 50, 50 100 C 10 150, 80 200, 20 250 C 70 300, 0 350, 50 400 C -10 450, 40 500, -60 550 C -110 580, -220 530, -320 580 C -400 610, -500 550, -570 570" />
                </svg>
              </div>

            </div>
          </div>
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

            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center lg:items-start pb-16 lg:pb-32 gap-8 lg:gap-12 w-full px-4 lg:px-12 relative z-10 lg:pl-[100px] lg:pr-[250px] xl:pr-[350px]">
              <div className="w-full sm:w-[45%] lg:flex-1 lg:max-w-[340px] lg:mt-[80px]">
                <div className="shadow-xl transition-transform w-full">
                  <VideoCard videoSrc="/filmik7.mp4" type="AUTO" />
                </div>
                <a
                  href="https://www.instagram.com/reels/CvMuPx7Ak8l/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 mb-12 lg:mb-0 text-center font-sans font-bold text-[#2B30FF] text-lg uppercase underline decoration-2 underline-offset-4 hover:opacity-75 transition-opacity"
                >
                  LINK
                </a>
              </div>
              <div className="w-full sm:w-[45%] lg:flex-1 lg:max-w-[340px] lg:mt-[220px]">
                <div className="shadow-2xl transition-transform w-full">
                  <VideoCard videoSrc="/filmik8.mp4" type="AUTO" />
                </div>
                <a
                  href="https://www.instagram.com/reels/CkBE_1YK67V/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 mb-12 lg:mb-0 text-center font-sans font-bold text-[#2B30FF] text-lg uppercase underline decoration-2 underline-offset-4 hover:opacity-75 transition-opacity"
                >
                  LINK
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
