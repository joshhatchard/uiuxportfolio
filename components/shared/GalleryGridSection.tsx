import type { GalleryImage } from "@/components/shared/GallerySection";

type GalleryGridSectionProps = {
  images: GalleryImage[];
};

export function GalleryGridSection({ images }: GalleryGridSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
      {images.map((image) => (
        <figure key={image.id} className="m-0">
          <img src={image.image} alt={image.alt} className="h-auto w-full" />
        </figure>
      ))}
    </div>
  );
}

export default GalleryGridSection;
