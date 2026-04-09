import VideoCard from "./VideoCard";

export default function SectionRealizacje() {
  return (
    <section id="realizacje" className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 scroll-mt-24">
      <h2 className="font-bebas text-fluid-h2 text-wero-accent mb-16">Realizacje</h2>

      <div className="flex flex-col gap-24">
        
        {/* Digital Host */}
        <div>
          <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase mb-8 border-b-2 border-black inline-block pb-2">
            Digital Host
          </h3>
          <p className="font-sans text-lg mb-8 max-w-3xl">TVN, Meloradio, House, Dawtona, Surf.inc, Imagination Day, Young Creatives</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <VideoCard embedIframe='<iframe src="https://www.tiktok.com/embed/v2/111" loading="lazy"></iframe>' type="VERTICAL" />
            <VideoCard embedIframe='<iframe src="https://www.tiktok.com/embed/v2/222" loading="lazy"></iframe>' type="VERTICAL" />
            <VideoCard embedIframe='<iframe src="https://www.tiktok.com/embed/v2/333" loading="lazy"></iframe>' type="VERTICAL" />
            <VideoCard embedIframe='<iframe src="https://www.tiktok.com/embed/v2/444" loading="lazy"></iframe>' type="VERTICAL" />
          </div>
        </div>

        {/* Creative Direction */}
        <div>
          <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase mb-8 border-b-2 border-black inline-block pb-2">
            Creative Direction
          </h3>
          <p className="font-sans text-lg mb-8 max-w-3xl">Reserved, Zalando, Rayban, Adidas</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <VideoCard embedIframe='<iframe src="https://www.instagram.com/reel/111/embed" loading="lazy"></iframe>' type="VERTICAL" />
            <VideoCard embedIframe='<iframe src="https://www.instagram.com/reel/222/embed" loading="lazy"></iframe>' type="VERTICAL" />
            <VideoCard embedIframe='<iframe src="https://www.instagram.com/reel/333/embed" loading="lazy"></iframe>' type="VERTICAL" />
            <VideoCard embedIframe='<iframe src="https://www.instagram.com/reel/444/embed" loading="lazy"></iframe>' type="VERTICAL" />
          </div>
        </div>

        {/* Copywriting */}
        <div>
          <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase mb-8 border-b-2 border-black inline-block pb-2">
            Copywriting
          </h3>
          <p className="font-sans text-lg mb-8 max-w-3xl">Noizz x GEN Z Sister, Reserved x Maciej Musiał</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <VideoCard embedIframe='<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>' type="HORIZONTAL" />
            <VideoCard embedIframe='<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>' type="HORIZONTAL" />
          </div>
        </div>

        {/* Content Creation / Influencer */}
        <div>
          <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase mb-8 border-b-2 border-black inline-block pb-2">
            Content Creation / Influencer
          </h3>
          <p className="font-sans text-lg mb-8 max-w-3xl">Pokket, House Brand, TVN, Bandit</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <VideoCard embedIframe='<iframe src="https://www.tiktok.com/embed/v2/555" loading="lazy"></iframe>' type="VERTICAL" />
            <VideoCard embedIframe='<iframe src="https://www.tiktok.com/embed/v2/666" loading="lazy"></iframe>' type="VERTICAL" />
            <VideoCard embedIframe='<iframe src="https://www.tiktok.com/embed/v2/777" loading="lazy"></iframe>' type="VERTICAL" />
            <VideoCard embedIframe='<iframe src="https://www.tiktok.com/embed/v2/888" loading="lazy"></iframe>' type="VERTICAL" />
          </div>
        </div>

      </div>
    </section>
  );
}
