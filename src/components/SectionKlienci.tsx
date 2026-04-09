export default function SectionKlienci() {
  const brands = [
    "Reserved", "Zalando", "Rayban", "Adidas", "TVN", 
    "Noizz", "Pokket", "House Brand", "Surf.inc", 
    "Meloradio", "Dawtona", "Bandit"
  ];
  
  return (
    <section id="klienci" className="py-24 bg-wero-accent text-wero-bg overflow-hidden flex flex-col gap-8 scroll-mt-20">
      <h2 className="sr-only">Klienci</h2>
      <div className="relative w-[300vw] flex overflow-hidden group">
        {/* Usunięto pause na hover by było płynne dla mobile, włączone tylko na motion-safe jeśli trzeba, ale standard to leci */}
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] motion-reduce:animate-none">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span key={i} className="font-bebas text-5xl md:text-7xl uppercase mx-6 lg:mx-12 shrink-0">
              {brand} <span className="text-wero-bg/30 px-6">X</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
