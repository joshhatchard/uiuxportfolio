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
    <figure className="m-0">
      <img src={src} alt={alt} className="w-full h-auto" />
    </figure>
  );
}

export function GallerySection({ images }: GallerySectionProps) {
  return (
    <div className="space-y-14 sm:space-y-18">
      {images.map((image) => (
        <article key={image.id} id={image.id} className="scroll-mt-24">
          <GalleryFrame src={image.image} alt={image.alt} />
        </article>
      ))}
    </div>
  );
}

export default GallerySection;
