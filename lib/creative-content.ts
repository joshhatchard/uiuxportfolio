export type CreativeImageBlock = {
  id: string;
  image: string;
  alt: string;
};

export type CreativeTemplateContent = {
  title: string;
  subtitle: string;
  contents: { id: string; label: string }[];
  heroImage: string;
  heroImageAlt: string;
  blocks: CreativeImageBlock[];
};

export const creativeContent: Record<string, CreativeTemplateContent> = {
  "creative-one": {
    title: "Creative One",
    subtitle: "Visual experiments - 2026",
    contents: [
      { id: "overview", label: "Overview" },
      { id: "image-one", label: "Image One" },
      { id: "image-two", label: "Image Two" },
      { id: "image-three", label: "Image Three" },
    ],
    heroImage: "/about/flipped.jpg",
    heroImageAlt: "Creative hero image",
    blocks: [
      { id: "image-one", image: "/about/rocks.jpg", alt: "Creative image one" },
      { id: "image-two", image: "/about/city.jpg", alt: "Creative image two" },
      { id: "image-three", image: "/about/dock.jpg", alt: "Creative image three" },
    ],
  },
  "creative-two": {
    title: "Creative Two",
    subtitle: "Visual experiments - 2026",
    contents: [
      { id: "overview", label: "Overview" },
      { id: "image-one", label: "Image One" },
      { id: "image-two", label: "Image Two" },
      { id: "image-three", label: "Image Three" },
    ],
    heroImage: "/about/city.jpg",
    heroImageAlt: "Creative hero image",
    blocks: [
      { id: "image-one", image: "/about/dock.jpg", alt: "Creative image one" },
      { id: "image-two", image: "/about/flipped.jpg", alt: "Creative image two" },
      { id: "image-three", image: "/about/rocks.jpg", alt: "Creative image three" },
    ],
  },
};

export function getCreativeContent(slug: string) {
  return creativeContent[slug];
}