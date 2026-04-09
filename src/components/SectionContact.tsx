export default function SectionContact() {
  return (
    <section id="kontakt" className="max-w-[1400px] mx-auto px-4 md:px-8 py-32 flex flex-col items-center text-center justify-center min-h-[75vh] scroll-mt-20">
      <h2 className="font-bebas text-fluid-h1 text-wero-accent uppercase leading-none mb-2">
        KTO PYTA
      </h2>
      <h2 className="font-bebas text-fluid-h1 text-wero-accent uppercase leading-none mb-12">
        NIE BŁĄDZI
      </h2>
      <p className="font-bebas text-fluid-h2 text-wero-accent uppercase mb-20 underline decoration-4 md:decoration-8 underline-offset-[12px] decoration-black">
        ZAPYTAJ I TY
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-8 w-full justify-center items-center">
        <a 
          href="mailto:kontakt@weronikatargonska.pl" 
          className="font-sans text-xl md:text-2xl font-bold bg-wero-accent text-wero-bg px-10 py-5 rounded-full shadow-2xl hover:scale-105 transition-transform hover:bg-black w-full max-w-sm"
        >
          NAPISZ MAILA
        </a>
        <a 
          href="https://instagram.com/weronikatargonska" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-sans text-xl md:text-2xl font-bold border-4 border-wero-accent text-wero-accent px-10 py-5 rounded-full hover:scale-105 transition-transform hover:bg-wero-accent hover:text-wero-bg w-full max-w-sm"
        >
          @WERONIKATARGONSKA
        </a>
      </div>
    </section>
  );
}
