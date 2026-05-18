export const products = [
  {
    id: 1,
    name: "Premium Wood Pellets",
    category: "Biomass",
    slug: "premium-wood-pellets",
    description:
      "High-calorific value energy source made from 100% sustainable wood fiber.",
    image:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=800",
    specs: [
      { label: "Gross Calorific Value", value: "4,600 - 4,800 kcal/kg" },
      { label: "Moisture", value: "< 10%" },
      { label: "Ash Content", value: "Max 1.0%" },
      { label: "Diameter", value: "6mm - 10mm" },
    ],
  },
  {
    id: 2,
    name: "Palm Kernel Shell",
    category: "Biomass",
    slug: "palm-kernel-shell",
    description:
      "Renewable energy source widely used in industrial boilers and power plants.",
    image:
      "https://images.unsplash.com/photo-1611270233033-3c3a1ad4da48?q=80&w=800",
    specs: [
      { label: "Calorific Value", value: "5,500 - 6,000 kcal/kg" },
      { label: "Fixed Carbon", value: "> 18%" },
      { label: "Chlorine", value: "< 0.05%" },
    ],
  },
  {
    id: 3,
    name: "Coconut Shell Charcoal",
    category: "Charcoal",
    slug: "industrial-coconut-charcoal",
    description:
      "Premium grade charcoal with long burning time and minimal ash content.",
    image:
      "https://images.unsplash.com/photo-1533659828870-95ee305cee3e?q=80&w=800",
    specs: [
      { label: "Fixed Carbon", value: "Min 75%" },
      { label: "Moisture", value: "Max 12%" },
      { label: "Ash Content", value: "Max 2.5%" },
      { label: "Calorific Value", value: "Min 7,000 kcal/kg" },
    ],
  },
  {
    id: 4,
    name: "Biodiesel B35",
    category: "Biofuel",
    slug: "biodiesel-b35",
    description:
      "Environmentally friendly fuel blend supporting the global energy transition.",
    image:
      "https://images.unsplash.com/photo-1532634896-26909d0d4b89?q=80&w=800",
    specs: [
      { label: "Cetane Number", value: "Min 51" },
      { label: "Flash Point", value: "Min 100°C" },
      { label: "Water Content", value: "Max 300 mg/kg" },
    ],
  },
  {
    id: 5,
    name: "Sawdust Briquettes",
    category: "Biomass",
    slug: "sawdust-briquettes",
    description:
      "Compressed wood waste providing high-density energy for industrial heating.",
    image:
      "https://images.unsplash.com/photo-1521503862198-2ae9a997bbc9?q=80&w=800",
    specs: [
      { label: "Density", value: "> 1.2 g/cm3" },
      { label: "Fixed Carbon", value: "15% - 20%" },
      { label: "Ash Content", value: "Max 1.0%" },
    ],
  },
];

export type Product = (typeof products)[0];
