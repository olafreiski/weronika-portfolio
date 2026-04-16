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


    </section>
  );
}
