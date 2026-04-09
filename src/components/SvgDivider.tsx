export default function SvgDivider() {
  return (
    <div className="w-full flex justify-center py-12 px-4 text-wero-accent overflow-hidden" aria-hidden="true">
      <svg className="min-w-[400px] max-w-full h-auto" viewBox="0 0 400 40">
        <path d="M0 20 Q50 5 100 20 Q150 35 200 20 Q250 5 300 20 Q350 35 400 20" fill="none" stroke="currentColor" strokeWidth="2"/>
      </svg>
    </div>
  );
}
