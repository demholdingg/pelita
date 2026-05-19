export const products = [
  {
    id: 1,
    name: "Wood Pellets",
    category: "Biomass",
    slug: "wood-pellets",
    description:
      "High-calorie energy source produced from 100% sustainable wood fiber to effectively substitute fossil fuels in industrial heating.",
    image: "/images/wood-pallets.jpg",
    specs: [
      { label: "Gross Calorific Value", value: "4,600 - 4,800 kcal/kg" },
      { label: "Moisture", value: "< 10%" },
      { label: "Ash Content", value: "Max 1.0%" },
      { label: "Diameter", value: "6mm - 10mm" },
    ],
  },
  {
    id: 2,
    name: "Wood Chips",
    category: "Biomass",
    slug: "wood-chips",
    description:
      "Medium-sized solid material made by chipping wood, used as biomass fuel and raw material for wood pulp.",
    image: "/images/wood-chips.jpg",
    specs: [
      { label: "Calorific Value", value: "3,500 - 4,200 kcal/kg" },
      { label: "Moisture Content", value: "30% - 45%" },
      { label: "Size", value: "10mm - 50mm" },
    ],
  },
  {
    id: 3,
    name: "Sawdust",
    category: "Biomass",
    slug: "sawdust",
    description:
      "Fine particles of wood from sawing, serving as a versatile biomass source for various industrial applications.",
    image: "/images/saw-dust.jpg",
    specs: [
      { label: "Moisture Content", value: "Max 15%" },
      { label: "Purity", value: "99%" },
      { label: "Bulk Density", value: "150-200 kg/m3" },
    ],
  },
  {
    id: 4,
    name: "Palm Kernel Shell",
    category: "Biomass",
    slug: "palm-kernel-shell",
    description:
      "Renewable energy source derived from palm oil processing, widely used in industrial boilers and power plants.",
    image: "/images/pks.jpg  ",
    specs: [
      { label: "Calorific Value", value: "5,500 - 6,000 kcal/kg" },
      { label: "Fixed Carbon", value: "> 18%" },
      { label: "Chlorine", value: "< 0.05%" },
    ],
  },
];

export type Product = (typeof products)[0];
