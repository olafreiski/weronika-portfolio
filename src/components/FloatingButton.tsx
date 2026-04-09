export default function FloatingButton() {
  return (
    <a 
      href="#kontakt"
      className="fixed bottom-6 right-4 md:bottom-10 md:right-10 bg-wero-accent text-wero-bg px-6 py-4 rounded-full font-sans font-bold tracking-wide uppercase shadow-xl hover:scale-105 transition-transform z-50 focus:outline-none focus:ring-4 focus:ring-black"
      aria-label="Przejdź do formularza kontaktowego"
    >
      Napisz do mnie
    </a>
  );
}
