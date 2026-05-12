import type { GalleryImage } from "@/components/shared/GallerySection";

type GalleryGridSectionProps = {
  images: GalleryImage[];
};

export function GalleryGridSection({ images }: GalleryGridSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
      {images.map((image) => (
        <img key={image.id} src={image.image} alt={image.alt} className="h-auto w-full" />
      ))}
    </div>
  );
}

export default GalleryGridSection;
