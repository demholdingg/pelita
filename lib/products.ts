export interface SpecTableRow {
  parameter: string;
  ar?: string;
  ad?: string;
  db?: string;
  daf?: string;
  method?: string;
  value?: string;
  unit?: string;
}

export interface SpecTableSection {
  title: string;
  subtitle?: string;
  group?: string;
  type?: "multi-basis" | "simple" | "elements-grid";
  rows: SpecTableRow[];
}

export interface ProductItem {
  id: number;
  name: string;
  category: string;
  slug: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  applications?: string[];
  labNote?: string;
  detailedSpecs?: SpecTableSection[];
}

export const products: ProductItem[] = [
  {
    id: 1,
    name: "Wood Pellets",
    category: "Biomass",
    slug: "wood-pellets",
    description:
      "Premium, high-density biomass fuel manufactured from 100% sustainably managed wood fibers. Engineered with optimal mechanical durability, low ash, and high calorific density, our wood pellets provide superior combustion efficiency for industrial steam boilers, district heating, and coal co-firing in thermal power stations.",
    image: "/images/wood-pallets.jpg",
    specs: [
      { label: "Gross Calorific Value (AR)", value: "4,312 - 4,363 kcal/kg" },
      { label: "Gross Calorific Value (DB)", value: "4,588 - 4,672 kcal/kg" },
      { label: "Total Moisture (AR)", value: "7.7%" },
      { label: "Ash Content (AR)", value: "1.37% - 1.40%" },
      { label: "Bulk Density", value: "670 kg/m³" },
      { label: "Diameter", value: "8.40 mm" },
    ],
    applications: [
      "Industrial Boilers & Steam Generation",
      "Thermal Power Plant Coal Co-Firing",
      "Commercial & District Heating Plants",
      "Pellet Burners & Gasification Units",
    ],
    labNote:
      "Independent laboratory testing conducted by PT SGS Indonesia (Ref: JS65-201 Rev 01, February 2025) and Sucofindo Surabaya (July 2026) for PT. Pelita Bioenergi Nusantara.",
    detailedSpecs: [
      // === WOOD PELLET SPECIFICATIONS I (PT SGS Indonesia) ===
      {
        group: "Wood Pellet Specifications I (SGS Indonesia Lab Report)",
        title: "1. Physical Characteristics & Dimensions",
        subtitle: "Mechanical properties and dimension metrics",
        type: "simple",
        rows: [
          {
            parameter: "Diameter",
            value: "8.40",
            unit: "mm",
            method: "SGS Test",
          },
          {
            parameter: "Length",
            value: "45.70",
            unit: "mm",
            method: "SGS Test",
          },
          {
            parameter: "Bulk Density",
            value: "670",
            unit: "kg/m³",
            method: "SGS Test",
          },
          {
            parameter: "Fines (+2.00 mm)",
            value: "90.86%",
            unit: "%",
            method: "SGS Test",
          },
          {
            parameter: "Fines (-2.00 mm)",
            value: "9.14%",
            unit: "%",
            method: "SGS Test",
          },
        ],
      },
      {
        group: "Wood Pellet Specifications I (SGS Indonesia Lab Report)",
        title: "2. Proximate Analysis & Calorific Value",
        subtitle: "Combustion performance and thermodynamic parameters",
        type: "multi-basis",
        rows: [
          {
            parameter: "Total Moisture",
            ar: "7.7%",
            ad: "6.8%",
            db: "-",
            daf: "-",
            method: "SGS Lab / ISO",
          },
          {
            parameter: "Ash Content",
            ar: "1.4%",
            ad: "1.7%",
            db: "1.9%",
            daf: "-",
            method: "SGS Lab / ISO",
          },
          {
            parameter: "Volatile Matter",
            ar: "75.2%",
            ad: "75.9%",
            db: "81.4%",
            daf: "83.4%",
            method: "SGS Lab / ISO",
          },
          {
            parameter: "Fixed Carbon",
            ar: "14.9%",
            ad: "15.1%",
            db: "16.2%",
            daf: "16.6%",
            method: "By Calculation",
          },
          {
            parameter: "Total Sulfur",
            ar: "0.02%",
            ad: "0.02%",
            db: "0.02%",
            daf: "0.02%",
            method: "SGS Lab / ISO",
          },
          {
            parameter: "Gross Calorific Value (GCV)",
            ar: "4,312 kcal/kg",
            ad: "4,354 kcal/kg",
            db: "4,672 kcal/kg",
            daf: "4,785 kcal/kg",
            method: "SGS Lab / ISO",
          },
          {
            parameter: "Net CV (Constant Pressure)",
            ar: "3,991 kcal/kg",
            ad: "4,035 kcal/kg",
            db: "4,372 kcal/kg",
            daf: "-",
            method: "SGS Lab / ISO",
          },
        ],
      },
      {
        group: "Wood Pellet Specifications I (SGS Indonesia Lab Report)",
        title: "3. Ash Fusion Temperature (Reducing Atmosphere)",
        subtitle: "High-temperature slagging and fouling behavior",
        type: "simple",
        rows: [
          {
            parameter: "Initial Deformation Temperature (IDT)",
            value: "> 1,600",
            unit: "°C",
            method: "SGS Test",
          },
          {
            parameter: "Softening Temperature (ST)",
            value: "> 1,600",
            unit: "°C",
            method: "SGS Test",
          },
          {
            parameter: "Hemispherical Temperature (HT)",
            value: "> 1,600",
            unit: "°C",
            method: "SGS Test",
          },
          {
            parameter: "Fluid Temperature (FT)",
            value: "> 1,600",
            unit: "°C",
            method: "SGS Test",
          },
        ],
      },
      {
        group: "Wood Pellet Specifications I (SGS Indonesia Lab Report)",
        title: "4. Elemental & Minor Metal Content (Dry Basis)",
        subtitle: "Elemental trace analysis and heavy metal composition",
        type: "elements-grid",
        rows: [
          { parameter: "Chlorine (Cl)", value: "0.02%", unit: "%" },
          { parameter: "Copper (Cu)", value: "1.89", unit: "ppm" },
          { parameter: "Sodium (Na)", value: "143", unit: "ppm" },
          { parameter: "Nickel (Ni)", value: "3.04", unit: "ppm" },
          { parameter: "Potassium (K)", value: "1,722", unit: "ppm" },
          { parameter: "Lead (Pb)", value: "3.07", unit: "ppm" },
          { parameter: "Iron (Fe)", value: "193", unit: "ppm" },
          { parameter: "Zinc (Zn)", value: "17.39", unit: "ppm" },
          { parameter: "Arsenic (As)", value: "0.90", unit: "ppm" },
          { parameter: "Mercury (Hg)", value: "0.02", unit: "ppm" },
          { parameter: "Cadmium (Cd)", value: "0.26", unit: "ppm" },
          { parameter: "Chromium (Cr)", value: "0.75", unit: "ppm" },
        ],
      },

      // === WOOD PELLET SPECIFICATIONS II (Sucofindo Surabaya) ===
      {
        group: "Wood Pellet Specifications II (Sucofindo Surabaya Report)",
        title: "1. Main Combustion Analysis & Calorific Value",
        subtitle: "Calorific output, ash content, and total sulfur",
        type: "multi-basis",
        rows: [
          {
            parameter: "Ash Content",
            ar: "1.37%",
            ad: "1.40%",
            db: "1.44%",
            daf: "-",
            method: "ASTM E1534-24",
          },
          {
            parameter: "Total Sulfur",
            ar: "0.07%",
            ad: "0.07%",
            db: "0.07%",
            daf: "-",
            method: "Standard Test",
          },
          {
            parameter: "Gross Calorific Value (GCV)",
            ar: "4,363 kcal/kg",
            ad: "4,466 kcal/kg",
            db: "4,588 kcal/kg",
            daf: "-",
            method: "PO/SBA-MIN-BB/46",
          },
        ],
      },
      {
        group: "Wood Pellet Specifications II (Sucofindo Surabaya Report)",
        title: "2. Ultimate Analysis",
        subtitle:
          "*Hydrogen and Oxygen values exclude the H and O content present in the sample moisture.",
        type: "multi-basis",
        rows: [
          {
            parameter: "Carbon (C)",
            ar: "48.79%",
            ad: "49.94%",
            db: "51.30%",
            daf: "-",
            method: "ASTM D5373-21 Method A",
          },
          {
            parameter: "Hydrogen (H) *",
            ar: "4.99%",
            ad: "5.11%",
            db: "5.24%",
            daf: "-",
            method: "ASTM D5373-21 Method A",
          },
          {
            parameter: "Nitrogen (N)",
            ar: "0.31%",
            ad: "0.32%",
            db: "0.33%",
            daf: "-",
            method: "ASTM D5373-21 Method A",
          },
          {
            parameter: "Oxygen (O) *",
            ar: "39.58%",
            ad: "40.51%",
            db: "41.62%",
            daf: "-",
            method: "ASTM D3176-24",
          },
        ],
      },
      {
        group: "Wood Pellet Specifications II (Sucofindo Surabaya Report)",
        title: "3. Additional Elemental Parameters",
        subtitle: "Total chlorine and potassium composition",
        type: "simple",
        rows: [
          {
            parameter: "Total Chlorine (Cl)",
            value: "0.08",
            unit: "% wt",
            method: "PO/BB/46",
          },
          {
            parameter: "Potassium (K)",
            value: "0.19",
            unit: "% wt",
            method: "ASTM D4326-21",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Wood Chips",
    category: "Biomass",
    slug: "wood-chips",
    description:
      "Uniform solid biomass chipped from sustainable forestry residuals, ideal for direct combustion, fluidised bed boilers, and pulp raw material.",
    image: "/images/wood-chips.jpg",
    specs: [
      { label: "Gross Calorific Value (AR)", value: "2,436 kcal/kg" },
      { label: "Gross Calorific Value (ADB)", value: "4,531 kcal/kg" },
      { label: "Gross Calorific Value (DB)", value: "4,715 kcal/kg" },
      { label: "Total Moisture (AR)", value: "48.33%" },
    ],
    applications: [
      "Biomass Power Generation (CFB / Stoker Boilers)",
      "Pulp & Paper Manufacturing Feedstock",
      "Gasification & Syngas Production",
      "Industrial Thermal Energy Plants",
    ],
    detailedSpecs: [
      {
        title: "1. Laboratory Analytical Specifications",
        subtitle: "Key thermodynamic & total moisture parameters",
        type: "multi-basis",
        rows: [
          {
            parameter: "Total Moisture",
            ar: "48.33%",
            ad: "-",
            db: "-",
            daf: "-",
            method: "ASTM E871-24",
          },
          {
            parameter: "Gross Calorific Value (GCV)",
            ar: "2,436 kcal/kg",
            ad: "4,531 kcal/kg",
            db: "4,715 kcal/kg",
            daf: "-",
            method: "PO/SBA-MIN-BB/46",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    name: "Palm Kernel Shell",
    category: "Biomass",
    slug: "palm-kernel-shell",
    description:
      "Premium, high-density biomass residual derived from sustainable palm oil milling. Featuring high calorific output, low ash, and minimal sulfur, Palm Kernel Shell (PKS) is the premier renewable solid fuel for coal substitution in power generation, cement kilns, and heavy industrial boilers.",
    image: "/images/pks.jpg",
    specs: [
      { label: "Gross Calorific Value (ar)", value: "4,446 kcal/kg" },
      { label: "Gross Calorific Value (db)", value: "5,012 kcal/kg" },
      { label: "Total Moisture (ar)", value: "11.3%" },
      { label: "Ash Content (ar)", value: "1.4%" },
      { label: "Fixed Carbon (ar)", value: "18.0%" },
      { label: "Total Sulfur", value: "0.02%" },
    ],
    applications: [
      "Coal Co-Firing in Thermal Power Stations",
      "Industrial Steam Boilers & Heat Exchangers",
      "Cement Kilns & Lime Burning Facilities",
      "Activated Carbon & High-Grade Charcoal Manufacturing",
    ],
    detailedSpecs: [
      {
        title: "1. Proximate Analysis",
        subtitle: "Key thermodynamic & combustion properties",
        type: "multi-basis",
        rows: [
          {
            parameter: "Total Moisture",
            ar: "11.3%",
            ad: "3.3%",
            db: "-",
            daf: "-",
            method: "ISO 18134-1 / ISO 18134-3",
          },
          {
            parameter: "Ash Content",
            ar: "1.4%",
            ad: "1.5%",
            db: "1.6% (db) / 2.6%",
            daf: "-",
            method: "ISO 18122-2022",
          },
          {
            parameter: "Volatile Matter",
            ar: "69.3%",
            ad: "75.5%",
            db: "78.1%",
            daf: "79.3%",
            method: "ISO 18123-2023",
          },
          {
            parameter: "Fixed Carbon",
            ar: "18.0%",
            ad: "19.7%",
            db: "20.3%",
            daf: "20.7%",
            method: "By Calculation",
          },
          {
            parameter: "Total Sulfur",
            ar: "0.02%",
            ad: "0.02%",
            db: "0.02%",
            daf: "0.02%",
            method: "ISO 19579-2006",
          },
        ],
      },
      {
        title: "2. Calorific Value",
        subtitle: "Gross & Net Thermal Output Profiles",
        type: "multi-basis",
        rows: [
          {
            parameter: "Gross Calorific Value (GCV)",
            ar: "4,446 kcal/kg",
            ad: "4,847 kcal/kg",
            db: "5,012 kcal/kg",
            daf: "5,091 kcal/kg",
            method: "ISO 18125-2017",
          },
          {
            parameter: "Net CV (Constant Pressure)",
            ar: "4,120 kcal/kg",
            ad: "4,544 kcal/kg",
            db: "4,719 kcal/kg",
            daf: "-",
            method: "ISO 1928",
          },
          {
            parameter: "Net CV (Constant Volume)",
            ar: "4,137 kcal/kg",
            ad: "4,560 kcal/kg",
            db: "4,735 kcal/kg",
            daf: "-",
            method: "ISO 1928",
          },
        ],
      },
      {
        title: "3. Ultimate Analysis & Additional Elements",
        subtitle: "Elemental composition and trace mineral content",
        type: "multi-basis",
        rows: [
          {
            parameter: "Total Carbon (C)",
            ar: "47.8%",
            ad: "52.1%",
            db: "53.9%",
            daf: "54.7%",
            method: "ISO 16948-2015",
          },
          {
            parameter: "Total Hydrogen (H) (incl. moisture)",
            ar: "6.26%",
            ad: "5.82%",
            db: "5.64%",
            daf: "5.73%",
            method: "ISO 16948-2015",
          },
          {
            parameter: "Total Nitrogen (N)",
            ar: "0.35%",
            ad: "0.38%",
            db: "0.39%",
            daf: "0.40%",
            method: "ISO 16948-2015",
          },
          {
            parameter: "Oxygen (O) (by difference, incl. moisture)",
            ar: "44.17%",
            ad: "40.18%",
            db: "38.45%",
            daf: "39.15%",
            method: "ISO 16948-2015",
          },
          {
            parameter: "Chlorine (Cl)",
            ar: "-",
            ad: "0.01% (adb)",
            db: "-",
            daf: "-",
            method: "ISO 587-2020",
          },
          {
            parameter: "Sodium (Na)",
            ar: "-",
            ad: "-",
            db: "14 ppm",
            daf: "-",
            method: "ASTM D6349-21",
          },
          {
            parameter: "Potassium (K)",
            ar: "-",
            ad: "-",
            db: "0.005%",
            daf: "-",
            method: "ASTM D6349-21",
          },
        ],
      },
    ],
  },
];

export type Product = ProductItem;
