import Image from "next/image";

export type GalleryImage = {
  id: string;
  image: string;
  alt: string;
};

type GallerySectionProps = {
  images: GalleryImage[];
};

function GalleryFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative min-h-72 overflow-hidden rounded-[40px] bg-[#2b2b2b] sm:min-h-96 lg:min-h-128">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 80vw, 100vw" />
    </div>
  );
}

export function GallerySection({ images }: GallerySectionProps) {
  return (
    <div className="space-y-14 sm:space-y-18">
      {images.map((image) => (
        <section key={image.id} id={image.id} className="scroll-mt-24">
          <GalleryFrame src={image.image} alt={image.alt} />
        </section>
      ))}
    </div>
  );
}

export default GallerySection;
