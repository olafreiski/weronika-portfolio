export default function SectionKlienci() {
  const brands = [
    { name: "Reserved", category: "Fashion" },
    { name: "Zalando", category: "E-commerce" },
    { name: "Rayban", category: "Accessories" },
    { name: "Adidas", category: "Sportswear" },
    { name: "TVN", category: "Media" },
    { name: "Noizz", category: "Media" },
    { name: "Pokket", category: "Finance" },
    { name: "House", category: "Fashion" },
    { name: "Surf.inc", category: "Fashion" },
    { name: "Meloradio", category: "Radio" },
    { name: "Dawtona", category: "FMCG" },
    { name: "Bandit", category: "Lifestyle" },
    { name: "Allegro", category: "E-commerce" },
    { name: "SAR", category: "Marketing Communication Association" }
  ];
  
  return (
    <section id="klienci" className="py-4 md:py-6 bg-wero-accent overflow-hidden flex flex-col justify-center border-y border-wero-accent/10">
      <h2 className="sr-only">Klienci</h2>
      <div className="relative w-full flex overflow-hidden group">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center shrink-0">
              <div className="flex flex-col justify-center px-12 md:px-20">
                <span className="text-[16px] md:text-[18px] font-bold text-wero-bg leading-tight tracking-[0.02em]">{brand.name}</span>
                <span className="text-[14px] md:text-[15px] font-medium text-wero-bg/70 leading-tight mt-0.5">{brand.category}</span>
              </div>
              <div className="h-8 md:h-10 w-[1px] bg-wero-bg/20 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
