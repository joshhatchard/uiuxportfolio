import type { CaseTemplateContent } from "@/components/shared/CaseTemplate";

export type CreativeImageBlock = {
  id: string;
  image: string;
  alt: string;
};

export type CreativeContent = CaseTemplateContent;

export const creativeContent: Record<string, CreativeContent> = {
  "sudata-merchandise": {
    title: "MERCHANDISE",
    subtitle: "SUDATA - MAY 2026",
    sections: [
      {
        type: "heroFeature",
        id: "feature",
        label: "OVERVIEW",
        src: "/creative/merch/hoodie.png",
        alt: "SUDATA merchandise hero image",
        subEyebrow: "THE REVAMP",
        heading: "A new identity to match their dominant presence",
        body:
          "Every piece in this collection was designed to reflect SUDATA's core values and aesthetic. From packaging to product design, consistency and quality were paramount in creating a memorable brand experience.",
      },
      {
        type: "hero",
        src: "/creative/merch/shirtv2.jpg",
        alt: "SUDATA merchandise shirt version two",
      },
      {
        type: "galleryGrid",
        id: "gallery",
        label: "Gallery",
        images: [
            { id: "image-one", image: "/creative/merch/hoodiefront.jpg", alt: "Merchandise hoodie front" },
            { id: "image-two", image: "/creative/merch/shirtfront.jpg", alt: "Merchandise shirt front" },
            { id: "image-three", image: "/creative/merch/hoodieback.jpg", alt: "Merchandise hoodie back" },
            { id: "image-four", image: "/creative/merch/shirtback.jpg", alt: "Merchandise shirt back" },
        ],
      },
    ],
  },
  "sudata-logo-redesign": {
    title: "LOGO REDESIGN",
    subtitle: "SUDATA - APR 2026",
    sections: [
      {
        type: "heroFeature",
        id: "feature",
        label: "OVERVIEW",
        src: "/creative/logo/mock.png",
        alt: "SUDATA logo redesign hero image",
        subEyebrow: "Brand Identity",
        heading: "A new identity to match their dominant presence",
        body:
          "The new logo maintains the essence of SUDATA while introducing contemporary design principles. The refined letterforms and improved spacing ensure clarity at any scale, from social media to large-format applications.",
      },
      {
        type: "galleryGrid",
        id: "gallery",
        label: "Gallery",
        images: [
          { id: "image-one", image: "/creative/logo/variations.png", alt: "Logo redesign logo variations" },
          { id: "image-two", image: "/creative/logo/colours.png", alt: "Logo redesign colors exploration" },
          { id: "image-three", image: "/creative/logo/screens.png", alt: "Logo redesign screen applications" },
          { id: "image-four", image: "/creative/logo/laptop.png", alt: "Logo redesign laptop mockup" },
        ],
      },
    ],
  },
};

export function getCreativeContent(slug: string) {
  return creativeContent[slug];
}