interface MediaItem {
  type: 'video' | 'image';
  src: string;
  alt?: string;
}

const mediaItems: MediaItem[] = [
  {
    type: 'image',
    src: '/images/Handcrafted-Hero.jpg',
    alt: 'Artisanal pastry craftsmanship',
  }
];

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={import.meta.env.BASE_URL + mediaItems[0].src}
          alt={mediaItems[0].alt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Enhanced gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]" />
        {/* Additional overlay for mobile */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] md:hidden" />
      </div>
    </div>
  );
};

export default HeroBackground; 