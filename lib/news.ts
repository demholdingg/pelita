export type NewsCategory =
  | "Events & Exhibitions"
  | "Sustainability"
  | "Company Update";

export type NewsSection =
  | { type: "heading"; title: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  sections?: NewsSection[];
  category: NewsCategory;
  publishedAt: string;
  readTime: string;
  author: string;
  image: string;
  gallery?: string[];
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "pelita-bioenergi-at-national-product-exhibition",
    title:
      "PT Pelita Bioenergi Nusantara Showcases Renewable Energy Innovations at National Product Exhibition",
    excerpt:
      "A concrete step toward supporting the green energy transition and sustainability through flagship bioenergy products",
    content: [
      "PT Pelita Bioenergi Nusantara reaffirmed its commitment to advancing Indonesia's clean energy transition by participating in a national product exhibition",
      "Presence served as a platform to introduce eco-friendly bioenergy solutions to industry players, government representatives, and the general public",
      "At the exhibition, PT Pelita Bioenergi Nusantara highlighted its flagship lineup of biomass and bioenergy products engineered to lower reliance on fossil fuels and reduce carbon emissions.",
    ],
    sections: [
      { type: "heading", title: "Presenting Future Energy Solutions" },
      {
        type: "paragraph",
        text: "Visitors to PT Pelita Bioenergi Nusantara's booth experienced firsthand the company's latest technological innovations, including:",
      },
      {
        type: "list",
        items: [
          "Processed Biomass Products: Efficient alternative fuel options for commercial and industrial applications.",
          "High-Efficiency Processing: Eco-conscious production standards ensuring supply chain sustainability from source to end-product.",
          "Consultation & Strategic Partnerships: Dedicated advisory services for businesses seeking a phased transition to clean energy.",
        ],
      },
      { type: "heading", title: "Strengthening Commitment to Sustainability" },
      {
        type: "paragraph",
        text: "A representative from PT Pelita Bioenergi Nusantara emphasized that participating in this event goes beyond displaying products—it is about fostering education and collaboration to accelerate Net Zero Emission targets.",
      },
      {
        type: "quote",
        text: "We believe bioenergy is a cornerstone of Indonesia's energy future. Through this exhibition, we aim to expand our partnerships and demonstrate that renewable energy can be implemented effectively and economically.",
      },
      { type: "heading", title: "Positive Visitor Response" },
      {
        type: "paragraph",
        text: "The booth drew significant engagement from industry stakeholders and policy advocates discussing potential business collaborations. Attendees commended the reliability and quality of the bioenergy solutions as a direct answer to modern sustainability challenges.",
      },
      { type: "heading", title: "About PT Pelita Bioenergi Nusantara" },
      {
        type: "paragraph",
        text: "PT Pelita Bioenergi Nusantara is a company dedicated to the supply and development of renewable bioenergy products. Committed to high quality standards and environmental stewardship, the company continuously innovates to deliver affordable, sustainable green energy for local and global markets.",
      },
      { type: "heading", title: "Media Contact & Further Information" },
      {
        type: "paragraph",
        text: "For media inquiries, partnership opportunities, and further information, please contact the PT Pelita Bioenergi Nusantara team through the company's official communication channels.",
      },
    ],
    category: "Events & Exhibitions",
    publishedAt: "2026-07-18",
    readTime: "5 min read",
    author: "Pelita Bioenergi Nusantara",
    image: "/images/news/event pelita.jpeg",
    gallery: [
      "/images/news/event pelita 2.jpeg",
      "/images/news/event pelita 3.jpeg",
      "/images/news/event pelita 4.jpeg",
      "/images/news/event pelita 5.jpeg",
      "/images/news/event pelita 6.jpeg",
      "/images/news/event pelita 7.jpeg",
    ],
    featured: true,
  },
  {
    slug: "powering-sustainable-industries-with-biomass-energy",
    title:
      "Transforming forestry residues and agricultural by-products into high-value, low-emission renewable energy solutions.",
    excerpt:
      "A robust biomass supply chain starts with the selection of raw material sources. Every touchpoint needs to have a clear inspection process so that quality, material origin, and delivery schedules can be monitored.",
    content: [
      "A robust biomass supply chain starts with the selection of raw material sources. Every touchpoint needs to have a clear inspection process so that quality, material origin, and delivery schedules can be monitored.",
      "For industrial customers, this visibility aids production planning and makes supplier evaluation more objective.",
    ],
    category: "Sustainability",
    publishedAt: "2026-06-04",
    readTime: "4 min read",
    author: "Pelita Bioenergi Nusantara",
    image: "/images/wood-chips.jpg",
    gallery: ["/images/saw-dust.jpg", "/images/pks.jpg"],
  },
  {
    slug: "quality-control-for-consistent-combustion-performance",
    title: "Quality Control for Consistent Combustion Performance",
    excerpt:
      "Parameters such as moisture content, ash, and calorific value influence operational decisions in the boiler room.",
    content: [
      "Consistent combustion performance requires consistent specifications. That is why checking moisture content, ash content, calorific value, and physical characteristics is an important step before products are shipped.",
      "Test data helps operational teams select the right product for their systems and anticipate performance changes during use.",
    ],
    category: "Company Update",
    publishedAt: "2026-05-21",
    readTime: "3 min read",
    author: "Pelita Bioenergi Nusantara",
    image: "/images/wood-pallets.jpg",
    gallery: ["/images/wood-chips.jpg", "/images/saw-dust.jpg"],
  },
  {
    slug: "biomass-wood-pellet-sustainable-energy-solution",
    title:
      "Biomass Wood Pellet: Sustainable Energy Solution for Industrial Applications",
    excerpt:
      "Wood pellets, palm kernel shells, and wood chips represent a renewable and efficient energy alternative that reduces dependence on fossil fuels while supporting circular economy principles.",
    content: [
      "Biomass wood pellets have emerged as a leading renewable energy solution for industries seeking sustainable alternatives to traditional fossil fuels. PT Pelita Bioenergi Nusantara specializes in producing high-quality biomass products including wood pellets, palm kernel shells (PKS), and wood chips engineered to meet international standards.",
      "Our commitment to sustainability extends beyond product quality to encompassing responsible sourcing practices and efficient processing technologies that maximize energy output while minimizing environmental impact.",
      "These versatile biomass materials serve diverse industrial applications, from power generation and heating systems to specialized industrial processes, offering reliability and cost-effectiveness.",
    ],
    sections: [
      { type: "heading", title: "Understanding Biomass Wood Pellets" },
      {
        type: "paragraph",
        text: "Wood pellets are compressed biomass materials manufactured from sawdust, wood shavings, and other forestry residues. Through a specialized compression process, these materials achieve high energy density, making them ideal for automated feeding systems and large-scale industrial applications.",
      },
      { type: "heading", title: "Key Biomass Product Categories" },
      {
        type: "list",
        items: [
          "Wood Pellets: Uniform cylindrical shapes with consistent moisture and calorific values, ideal for heating boilers and power generation systems.",
          "Palm Kernel Shells (PKS): Agricultural by-products from palm oil processing with excellent combustion properties, offering both environmental benefits and economic value.",
          "Wood Chips: Various sized wood fragments suitable for direct combustion or further processing, derived from sustainable forestry operations and wood processing waste.",
        ],
      },
      { type: "heading", title: "Quality Standards and Specifications" },
      {
        type: "paragraph",
        text: "PT Pelita Bioenergi Nusantara maintains rigorous quality control protocols ensuring our biomass products meet international standards for moisture content, ash content, and calorific value. Each batch undergoes comprehensive testing to guarantee consistent performance in customer applications.",
      },
      { type: "heading", title: "Environmental and Economic Benefits" },
      {
        type: "paragraph",
        text: "Choosing biomass energy from sustainable sources contributes to carbon emission reduction while utilizing agricultural and forestry residues that might otherwise be wasted. This circular economy approach supports Indonesia's commitment to climate targets while generating economic value from previously unused resources.",
      },
      {
        type: "quote",
        text: "Our biomass products represent the intersection of environmental responsibility and industrial efficiency. By transforming forestry residues into premium energy solutions, we create value for our customers while advancing sustainability.",
      },
      { type: "heading", title: "Industrial Applications" },
      {
        type: "paragraph",
        text: "Industries ranging from food processing and manufacturing to district heating systems and power plants benefit from PT Pelita Bioenergi Nusantara's biomass solutions. The reliability and consistent quality of our products enable seamless integration into existing operations.",
      },
    ],
    category: "Sustainability",
    publishedAt: "2026-08-15",
    readTime: "6 min read",
    author: "Pelita Bioenergi Nusantara",
    image: "/images/news/biomass 1.jpeg",
    gallery: [
      "/images/news/biomass 2.jpeg",
      "/images/news/biomass 3.jpeg",
      "/images/news/biomass 4.jpeg",
      "/images/news/biomass 5.jpeg",
      "/images/news/biomass 6.jpeg",
    ],
  },
  {
    slug: "expanding-global-biomass-export-markets",
    title:
      "Expanding Global Biomass Export Markets: PT Pelita Bioenergi's International Growth Strategy",
    excerpt:
      "With increasing global demand for renewable energy, PT Pelita Bioenergi Nusantara is expanding its biomass export operations to serve international markets and support the worldwide transition to clean energy.",
    content: [
      "The global renewable energy market continues to experience robust growth as nations worldwide commit to reducing carbon emissions and transitioning from fossil fuel dependency. PT Pelita Bioenergi Nusantara is positioned at the forefront of this movement, leveraging Indonesia's rich biomass resources to supply high-quality renewable fuel to international partners.",
      "Our strategic expansion into key export markets reflects both the growing global demand for sustainable energy solutions and our confidence in the quality and reliability of our products. International customers recognize PT Pelita Bioenergi Nusantara as a dependable supplier of premium biomass products meeting rigorous global standards.",
      "Through continuous investment in production capacity, logistics infrastructure, and quality assurance systems, we are strengthening our position as a leading biomass exporter while creating economic opportunities within Indonesia.",
    ],
    sections: [
      { type: "heading", title: "Global Demand for Biomass Energy" },
      {
        type: "paragraph",
        text: "European countries, Asia-Pacific regions, and other global markets have implemented renewable energy targets requiring substantial biomass supplies. These policies create significant opportunities for established suppliers like PT Pelita Bioenergi Nusantara to meet growing international demand.",
      },
      { type: "heading", title: "PT Pelita Bioenergi's Export Advantages" },
      {
        type: "list",
        items: [
          "Abundant Raw Materials: Indonesia's extensive forestry and agricultural resources provide reliable access to high-quality biomass feedstock.",
          "Strategic Geographic Location: Indonesia's position in Southeast Asia enables efficient shipping to major markets in Europe, Asia, and beyond.",
          "Quality Assurance: Our comprehensive testing and certification processes meet international standards, ensuring customer satisfaction across all markets.",
          "Competitive Pricing: Efficient production processes and economies of scale allow us to offer competitive pricing without compromising quality.",
          "Supply Chain Reliability: Established logistics partnerships and export infrastructure ensure consistent, on-time delivery.",
        ],
      },
      { type: "heading", title: "Export Market Highlights" },
      {
        type: "paragraph",
        text: "PT Pelita Bioenergi Nusantara has successfully established supply agreements with customers across multiple continents. Our exports have grown steadily as international partners recognize our commitment to quality, reliability, and sustainable practices.",
      },
      { type: "heading", title: "Supporting Global Sustainability Goals" },
      {
        type: "paragraph",
        text: "Each shipment of biomass products exported by PT Pelita Bioenergi Nusantara contributes to global carbon reduction initiatives. By providing renewable alternatives to fossil fuels, our exports support international efforts to achieve climate neutrality while promoting economic development in Indonesia.",
      },
      {
        type: "quote",
        text: "Our export operations represent a win-win scenario: international customers gain access to premium renewable energy sources, while Indonesia benefits from value-added economic activity and sustainability leadership.",
      },
      { type: "heading", title: "Future Export Growth" },
      {
        type: "paragraph",
        text: "As renewable energy policies strengthen globally, PT Pelita Bioenergi Nusantara continues expanding production capacity and market presence. We are investing in technology, infrastructure, and partnerships to meet rising international demand and position Indonesia as a preferred biomass supplier.",
      },
    ],
    category: "Company Update",
    publishedAt: "2026-08-22",
    readTime: "6 min read",
    author: "Pelita Bioenergi Nusantara",
    image: "/images/news/ekspor 1.jpeg",
    gallery: ["/images/news/ekspor 2.jpeg", "/images/news/ekspor 3.jpeg"],
  },
  {
    slug: "direksi-meeting-prospective-customers",
    title:
      "PT Pelita Bioenergi Nusantara Executive Team Meets with Prospective Customers for Strategic Partnerships",
    excerpt:
      "High-level discussions between company directors and potential clients demonstrate PT Pelita Bioenergi Nusantara's commitment to expanding market presence and fostering long-term business relationships.",
    content: [
      "PT Pelita Bioenergi Nusantara's executive team recently engaged in a series of strategic meetings with prospective customers from various industrial sectors. These meetings represented a crucial opportunity to showcase the company's comprehensive biomass solutions and discuss customized supply arrangements tailored to individual client requirements.",
      "The discussions highlighted the company's technical expertise, production capacity, quality assurance standards, and commitment to reliable delivery schedules. Prospective customers gained firsthand insights into PT Pelita Bioenergi Nusantara's competitive advantages and how biomass solutions can optimize their operational efficiency while supporting sustainability goals.",
      "These productive meetings underscore PT Pelita Bioenergi Nusantara's proactive approach to market expansion and its dedication to building strong, long-term partnerships with industrial clients seeking sustainable energy alternatives.",
    ],
    sections: [
      { type: "heading", title: "Executive Leadership in Action" },
      {
        type: "paragraph",
        text: "Company directors participated directly in these client meetings, demonstrating PT Pelita Bioenergi Nusantara's commitment to personalized service and high-level engagement. This direct involvement from senior management signals the importance placed on client relationships and partnership development.",
      },
      { type: "heading", title: "Key Discussion Topics" },
      {
        type: "list",
        items: [
          "Product Specifications: Detailed presentation of biomass products including wood pellets, palm kernel shells, and wood chips with technical performance data.",
          "Supply Chain Solutions: Discussion of flexible supply arrangements, delivery logistics, and inventory management tailored to client needs.",
          "Quality Assurance: Overview of rigorous quality control processes, testing protocols, and international certification standards.",
          "Pricing and Commercial Terms: Competitive pricing structures and favorable commercial arrangements for volume commitments.",
          "Technical Support: Commitment to ongoing technical assistance and customer support throughout the partnership.",
        ],
      },
      { type: "heading", title: "Diverse Industry Interest" },
      {
        type: "paragraph",
        text: "The prospective customers represented various industrial sectors including manufacturing, power generation, heating systems, and food processing. This diverse interest reflects the broad applicability of PT Pelita Bioenergi Nusantara's biomass solutions across multiple industries.",
      },
      { type: "heading", title: "Building Long-Term Partnerships" },
      {
        type: "paragraph",
        text: "Rather than pursuing short-term transactions, PT Pelita Bioenergi Nusantara emphasized the development of sustainable, long-term partnerships. The company's focus on reliability, quality, and customer support creates a foundation for stable business relationships that benefit both suppliers and clients.",
      },
      {
        type: "quote",
        text: "Our meetings with prospective customers reinforce our market leadership in biomass solutions. By engaging directly with industrial partners, we ensure we fully understand their requirements and can deliver tailored solutions that drive their operational success.",
      },
      { type: "heading", title: "Next Steps in Partnership Development" },
      {
        type: "paragraph",
        text: "Following these productive meetings, PT Pelita Bioenergi Nusantara's team is working closely with interested prospects to finalize agreements, conduct facility visits, and establish supply frameworks. The company anticipates converting several prospective relationships into active partnerships in the coming months.",
      },
      { type: "heading", title: "Strengthening Market Position" },
      {
        type: "paragraph",
        text: "These initiatives contribute to PT Pelita Bioenergi Nusantara's strategic objective of expanding its customer base while maintaining the highest standards of product quality and service excellence. The company's ability to engage senior management in client development demonstrates its confidence in its market position and growth prospects.",
      },
    ],
    category: "Events & Exhibitions",
    publishedAt: "2026-08-28",
    readTime: "7 min read",
    author: "Pelita Bioenergi Nusantara",
    image: "/images/news/pertemuan 1.jpeg",
    gallery: [
      "/images/news/pertemuan 2.jpeg",
      "/images/news/pertemuan 3.jpeg",
      "/images/news/pertemuan 4.jpeg",
      "/images/news/pertemuan 5.jpeg",
      "/images/news/pertemuan 6.jpeg",
      "/images/news/pertemuan 7.jpeg",
      "/images/news/pertemuan 8.jpeg",
      "/images/news/pertemuan 9.jpeg",
      "/images/news/pertemuan 10.jpeg",
    ],
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
