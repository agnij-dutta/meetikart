"use client";

import { FadeImage } from "@/components/fade-image";

const accessories = [
  {
    id: 1,
    name: "Handcrafted Leather Diary",
    description: "Hand-stitched journal with premium cotton pages",
    price: "₹1,299",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800",
  },
  {
    id: 2,
    name: "Rosewood Fountain Pen",
    description: "Artisan-carved pen with smooth ink flow",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=800",
  },
  {
    id: 3,
    name: "Miniature Canvas Art",
    description: "Hand-painted artwork on premium canvas",
    price: "₹899",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800",
  },
  {
    id: 4,
    name: "Calligraphy Brush Set",
    description: "Traditional bamboo brushes for fine strokes",
    price: "₹449",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?q=80&w=800",
  },
  {
    id: 5,
    name: "Wax Seal Kit",
    description: "Custom brass seal with premium sealing wax",
    price: "₹349",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800",
  },
  {
    id: 6,
    name: "Watercolor Travel Set",
    description: "Portable palette with artist-grade pigments",
    price: "₹749",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
  },
];

export function CollectionSection() {
  return (
    <section id="stationery" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Curated Stationery
        </h2>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="text-lg font-medium text-foreground">
                    {accessory.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="font-medium text-foreground text-2xl">
                    {accessory.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
