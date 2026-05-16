import type { CaseTemplateContent } from "@/components/shared/CaseTemplate";

export type CreativeImageBlock = {
  id: string;
  image: string;
  alt: string;
};

export type CreativeContent = CaseTemplateContent;

export const creativeContent: Record<string, CreativeContent> = {
  "sudata-merchandise": {
    title: "MERCH",
    subtitle: "SUDATA - MAY 2026",
    sections: [
      {
        type: "heroFeature",
        id: "feature",
        label: "OVERVIEW",
        src: "/creative/merch/hoodie.png",
        alt: "SUDATA merchandise hero image",
        subEyebrow: "Merch Design",
        heading: "Merch that makes a statement",
        body:
          "Designed to be worn with intent, the SUDATA merch collection brings neobrutalism to campus. The black hoodie and tee put the mascot front and centre, using a sharp blue and white palette to create pieces that feel bold, unified, and unmistakably SUDATA.",
      },
      {
        type: "galleryGrid",
        id: "gallery",
        label: "Gallery",
        images: [
            { id: "image-one", image: "/creative/merch/shirtfront.jpg", alt: "Merchandise shirt front" },
            { id: "image-two", image: "/creative/merch/shirtback.jpg", alt: "Merchandise shirt back" },
            { id: "image-three", image: "/creative/merch/hoodiefront.jpg", alt: "Merchandise hoodie front" },
            { id: "image-four", image: "/creative/merch/hoodieback.jpg", alt: "Merchandise hoodie back" },
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
        subEyebrow: "Logo Design",
        heading: "A mark built for scale",
        body:
          "With over 800 members, SUDATA had grown into one of the most dominant student communities on campus, but their visual identity hadn't kept pace. The new logo bridges that gap, weaving together the precision of data science, the uniformity of a professional organisation, and the energy of community into a mark that finally matches the scale of what they've built.",
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