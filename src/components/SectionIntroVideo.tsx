import VideoCard from "./VideoCard";

export default function SectionIntroVideo() {
  return (
    <section className="w-full bg-[#CDCCC8] py-16 md:py-24 flex flex-col items-center justify-center border-t border-wero-accent/10">
      <div className="w-full max-w-5xl px-4 md:px-8 relative z-10">
        
        {/* Large, horizontal video container (16:9 aspect ratio) */}
        <div className="shadow-2xl w-full rounded-2xl overflow-hidden border-4 border-[#2B30FF] bg-[#CDCCC8]">
          <VideoCard videoSrc="/wideo-intro.mp4" type="HORIZONTAL" />
        </div>

        {/* Instrukcja dla użytkownika */}
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-sm md:text-base font-sans text-[#2B30FF] font-semibold uppercase tracking-wider">
            Podmień plik w folderze: <code className="bg-[#2B30FF]/10 text-[#2B30FF] px-2 py-1 rounded not-italic select-all">public/wideo-intro.mp4</code> aby zmienić to wideo.
          </p>
        </div>

      </div>
    </section>
  );
}
