import VideoCard from "./VideoCard";

export default function SectionContact() {
  return (
    <section id="kontakt" className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row items-center text-center md:text-left justify-center min-h-[calc(100vh-80px)] scroll-mt-20 gap-12 md:gap-24">
      
      <div className="flex flex-col items-center flex-1 max-w-2xl text-center">
        
        <p className="font-sans text-wero-accent uppercase tracking-[0.25em] md:tracking-[0.3em] text-sm md:text-base font-bold mb-6">
          MASZ PYTANIE?
        </p>

        <h2 className="font-bebas text-fluid-h1 text-wero-accent uppercase leading-[0.9] mb-1 italic">
          KTO PYTA
        </h2>
        <h2 className="font-bebas text-fluid-h1 text-wero-accent uppercase leading-[0.9] mb-10 italic">
          NIE BŁĄDZI
        </h2>

        <p className="font-sans font-bold text-wero-accent uppercase mb-16 tracking-[0.25em] md:tracking-[0.3em] underline decoration-[3px] underline-offset-[10px] text-sm md:text-lg">
          ZAPYTAJ I TY
        </p>

        <div className="flex flex-col gap-5 w-full items-center">
          <a 
            href="mailto:weronika.targonska@gmail.com" 
            className="flex items-center justify-center font-sans text-sm md:text-base font-bold tracking-[0.15em] bg-wero-accent text-wero-bg px-8 py-5 rounded-full w-full max-w-[400px] transition-transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            NAPISZ MAILA
          </a>
          
          <a 
            href="https://www.instagram.com/weronika.targonska/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center font-sans text-sm md:text-base font-bold tracking-[0.15em] border-[3px] border-wero-accent text-wero-accent px-8 py-5 rounded-full w-full max-w-[400px] transition-all hover:scale-105 hover:bg-wero-accent hover:text-wero-bg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-3">
              <rect width="18" height="18" x="3" y="3" rx="4" />
              <circle cx="12" cy="12" r="4" />
              <path d="M16.5 7.5h.01" />
            </svg>
            @WERONIKA.TARGONSKA
          </a>
        </div>
      </div>

      <div className="w-full max-w-[320px] relative z-10 flex-none mt-16 md:mt-0">
        <div className="shadow-2xl w-full">
          <VideoCard videoSrc="/filmik10.mp4" type="AUTO" />
        </div>
        <a 
          href="https://www.tiktok.com/@weronika.targonska/video/7462423515321437462?embed_source=121374463%2C121468991%2C121439635%2C121749182%2C121433650%2C121404358%2C121497414%2C122221973%2C122122240%2C121351166%2C121811500%2C121960941%2C122122244%2C122122243%2C122122242%2C121487028%2C122258714%2C121331973%2C120811592%2C120810756%2C121885509%3Bnull%3Bembed_blank&refer=embed&referer_url=canva-embed.com%2Fapi%2Fiframe%3Fapp%3D1%26url%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540weronika.targonska%252Fvideo%252F7462423515321437462%26key%3D462812a26b593f2dbfbfcbb14f6d699a&referer_video_id=7462423515321437462" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block mt-4 mb-12 lg:mb-0 text-center font-sans font-bold text-[#2B30FF] text-lg uppercase underline decoration-2 underline-offset-4 hover:opacity-75 transition-opacity"
        >
          LINK
        </a>
      </div>

    </section>
  );
}
