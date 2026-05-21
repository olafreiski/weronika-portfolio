import VideoCard from "./VideoCard";

export default function SectionIntroVideo() {
  return (
    <section className="w-full bg-[#CDCCC8] py-16 md:py-24 flex flex-col items-center justify-center border-t border-wero-accent/10">
      <div className="w-full max-w-[320px] px-4 md:px-0 relative z-10">
        <div className="shadow-2xl w-full">
          <VideoCard videoSrc="/filmik10.mp4" type="AUTO" />
        </div>
        <a 
          href="https://www.tiktok.com/@weronika.targonska/video/7462423515321437462?embed_source=121374463%2C121468991%2C121439635%2C121749182%2C121433650%2C121404358%2C121497414%2C122221973%2C122122240%2C121351166%2C121811500%2C121960941%2C122122244%2C122122243%2C122122242%2C121487028%2C122258714%2C121331973%2C120811592%2C120810756%2C121885509%3Bnull%3Bembed_blank&refer=embed&referer_url=canva-embed.com%2Fapi%2Fiframe%3Fapp%3D1%26url%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540weronika.targonska%252Fvideo%252F7462423515321437462%26key%3D462812a26b593f2dbfbfcbb14f6d699a&referer_video_id=7462423515321437462" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block mt-4 text-center font-sans font-bold text-[#2B30FF] text-lg uppercase underline decoration-2 underline-offset-4 hover:opacity-75 transition-opacity"
        >
          LINK
        </a>
      </div>
    </section>
  );
}
