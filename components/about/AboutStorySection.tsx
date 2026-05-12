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
    heading: "Design x Tech is kind of my thing",
    body:
      "I'm currently studied Design and Computer Science at USYD and honestly it's just clicked. I've been hooked ever since, deep in startups, coding and building things people actually enjoy using.",
    textAbove: false,
  },
  {
    image: "/about/rocks.jpg",
    alt: "Josh Hatchard balancing on rocks by the ocean",
    heading: "A bit about me",
    body:
      "I'm Josh Hatchard. A creative who lives and breathes tech and genuienly can't sit still. If it involves building something, whether a product, an interface or an idea. I'm in.",
    textAbove: true,
  },
  {
    image: "/about/city.jpg",
    alt: "City skyline reflected on the water",
    heading: "My moments in time",
    body:
      "I'm always chasing the view. Beautiful landscapes and places that stop you in your tracks. I travel for those moments and snap and quick photo while I'm there.",
    textAbove: false,
  },
  {
    image: "/about/dock.jpg",
    alt: "Harbor and water at the beach",
    heading: "Away from the screen",
    body:
      "The beach is where I feel complete. Just the water and the sun. Other than that you'll find me at the gym, driving, exploring random places and picking up whatever new skill catches my eye.",
    textAbove: true,
  },
];

function StoryText({ heading, body }: Pick<StoryTile, "heading" | "body">) {
  return (
    <div className="max-w-xl px-4 py-8">
      <h3 className="text-about-heading" style={{ color: "var(--color-secondary)" }}>{heading}</h3>
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
                {index === 2 && (
                  <div className="max-w-xl px-4 py-0">
                    <h3 className="text-about-body" style={{ color: "var(--color-secondary)", fontWeight: 600 }}>Thanks for stopping by :)</h3>
                  </div>
                )}
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
}

export default AboutStorySection;
