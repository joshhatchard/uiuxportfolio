import Image from "next/image";

type StoryTile = {
  image: string;
  alt: string;
  heading: string;
  body: string;
  textAbove?: boolean;
};

const storyTiles: StoryTile[] = [
  {
    image: "/about/flipped.jpg",
    alt: "Josh Hatchard doing a handstand on grass",
    heading: "Background in design and Computer Science",
    body:
      "Background in design and computerscience, want to merge tech and desing. Went to USYD to study, ever since been deeply addicted to desinging and creating and startups and coding and building products that people enjoy and that move people. Have a crazy eye for detail and pushing pixels perfectly.",
    textAbove: false,
  },
  {
    image: "/about/rocks.jpg",
    alt: "Josh Hatchard balancing on rocks by the ocean",
    heading: "A bit about me",
    body:
      "Hi, I’m Josh Hatchard and I love anything creative and anything technology. I cannot live without my MacBook Air Creative and spontaneous energy.",
    textAbove: true,
  },
  {
    image: "/about/city.jpg",
    alt: "City skyline reflected on the water",
    heading: "Creative and exploring infrastructure",
    body:
      "I love sketches, blueprints and drawings of buildings and architecture and exploring. Especially of landscapes and scenery. Picturesque view, and taking photos.",
    textAbove: false,
  },
  {
    image: "/about/dock.jpg",
    alt: "Harbor and water at the beach",
    heading: "Love the beach and free time",
    body:
      "Outside of work i love the beach and water. Its where I mentally reset and all the stress washes away, along side I love driving, gym, learning little new skills, seeing the capabilities of AI, exploring and meeting people.",
    textAbove: true,
  },
];

function StoryText({ heading, body }: Pick<StoryTile, "heading" | "body">) {
  return (
    <div className="max-w-xl px-4 py-8">
      <h3 className="text-about-heading text-white/90">{heading}</h3>
      <p className="mt-4 text-about-body">{body}</p>
    </div>
  );
}

export function AboutStorySection() {
  return (
    <section className="page-container mt-16 lg:mt-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
        {storyTiles.map((tile, index) => (
          <div
            key={tile.image}
            className={`flex flex-col ${index === 0 ? "order-2 md:order-0" : ""} ${index === 1 ? "order-1 md:order-0" : ""} ${index === 2 ? "order-4 md:order-0" : ""} ${index === 3 ? "order-3 md:order-0" : ""}`}
          >
            <div className={tile.textAbove ? "order-1 md:order-2" : ""}>
              <div className="overflow-hidden rounded-xs">
                <Image
                  src={tile.image}
                  alt={tile.alt}
                  width={900}
                  height={1100}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className={`${tile.textAbove ? "mt-6 md:mt-[-8] mb-[-16] md:mb-4 order-2 md:order-1" : "mt-6 mb-[-24]"}`}>
                <StoryText heading={tile.heading} body={tile.body} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutStorySection;