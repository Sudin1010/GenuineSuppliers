export interface Project {
  slug: string;
  name: string;
  category: string[];
  type: "Residential" | "Commercial" | "Industrial";
  location: string;
  year: number;
  description: string;
  gradient: string;
  image: string;
}

export const projects: Project[] = [
  {
    slug: "modern-villa-bhainsepati",
    name: "Modern Villa Renovation",
    category: ["Electric", "Plumbing", "Tiles & Marble", "Painting"],
    type: "Residential",
    location: "Bhainsepati, Lalitpur",
    year: 2024,
    description:
      "Complete renovation of a 3-storey residential villa with electrical rewiring, bathroom plumbing, Italian marble flooring and interior/exterior painting.",
    gradient: "from-[#1a0505] to-[#0B0F19]",
    image: "/images/projects/modern-villa-bhainsepati.png",
  },
  {
    slug: "office-cctv-patan",
    name: "Office Security System",
    category: ["CCTV"],
    type: "Commercial",
    location: "Patan, Lalitpur",
    year: 2024,
    description:
      "16-camera CCTV with NVR setup, remote monitoring and cable management for a 4-floor commercial office.",
    gradient: "from-[#0B0F19] to-[#161F30]",
    image: "/images/projects/office-cctv-patan.png",
  },
  {
    slug: "modular-kitchen-ekantakuna",
    name: "Modular Kitchen & Interior",
    category: ["Furniture", "Tiles & Marble"],
    type: "Residential",
    location: "Ekantakuna, Lalitpur",
    year: 2023,
    description:
      "Custom modular kitchen with Italian tiles, built-in appliances and premium aluminium shutters.",
    gradient: "from-[#161F30] to-[#1a0505]",
    image: "/images/projects/modular-kitchen-ekantakuna.png",
  },
  {
    slug: "ac-installation-satdobato",
    name: "Multi-Unit AC Installation",
    category: ["AC"],
    type: "Commercial",
    location: "Satdobato, Lalitpur",
    year: 2024,
    description:
      "12 split AC units across a commercial showroom with full electrical load balancing.",
    gradient: "from-[#0d1520] to-[#161F30]",
    image: "/images/projects/ac-installation-satdobato.png",
  },
  {
    slug: "waterproofing-bhaisepati",
    name: "Rooftop Waterproofing",
    category: ["Waterproofing"],
    type: "Residential",
    location: "Bhaisepati, Lalitpur",
    year: 2023,
    description:
      "Chemical waterproofing for a 2,200 sq ft rooftop and three bathrooms.",
    gradient: "from-[#1a0505] to-[#0d1520]",
    image: "/images/projects/waterproofing-bhaisepati.png",
  },
  {
    slug: "false-ceiling-kupandole",
    name: "False Ceiling & Lighting",
    category: ["False Ceiling", "Electric"],
    type: "Residential",
    location: "Kupandole, Lalitpur",
    year: 2024,
    description:
      "POP false ceiling with cove lighting, recessed LED and cement board partitions for a luxury apartment.",
    gradient: "from-[#161F30] to-[#0B0F19]",
    image: "/images/projects/false-ceiling-kupandole.png",
  },
  {
    slug: "aluminium-work-jawalakhel",
    name: "Aluminium Doors & Windows",
    category: ["Metal & Aluminium"],
    type: "Commercial",
    location: "Jawalakhel, Lalitpur",
    year: 2023,
    description:
      "Full aluminium door and window system for a 6-floor commercial building including sliding doors and railings.",
    gradient: "from-[#0B0F19] to-[#1a0a0a]",
    image: "/images/projects/aluminium-work-jawalakhel.png",
  },
  {
    slug: "wooden-flooring-sanepa",
    name: "Wooden Parquet Flooring",
    category: ["Parqueting"],
    type: "Residential",
    location: "Sanepa, Lalitpur",
    year: 2024,
    description:
      "Premium engineered wooden parquet across 1,800 sq ft with matching skirting boards.",
    gradient: "from-[#1a1005] to-[#161F30]",
    image: "/images/projects/wooden-flooring-sanepa.png",
  },
  {
    slug: "apartment-amc-imadol",
    name: "Apartment Complex AMC",
    category: ["AMC"],
    type: "Residential",
    location: "Imadol, Lalitpur",
    year: 2024,
    description:
      "Enterprise AMC for 24 apartment units with quarterly electrical, plumbing, AC and CCTV maintenance.",
    gradient: "from-[#1a0505] to-[#161F30]",
    image: "/images/projects/apartment-amc-imadol.png",
  },
  {
    slug: "painting-thasikhel",
    name: "Villa Interior & Exterior Painting",
    category: ["Painting"],
    type: "Residential",
    location: "Thasikhel, Lalitpur",
    year: 2023,
    description:
      "Full interior and exterior painting of a 4-storey villa with premium weather-resistant paint and texture finish.",
    gradient: "from-[#0d1520] to-[#0B0F19]",
    image: "/images/projects/painting-thasikhel.png",
  },
  {
    slug: "plumbing-gwarko",
    name: "Complete Plumbing Overhaul",
    category: ["Plumbing"],
    type: "Residential",
    location: "Gwarko, Lalitpur",
    year: 2023,
    description:
      "Full CPVC pipe replacement, bathroom fittings, kitchen sink, underground drainage and water tank.",
    gradient: "from-[#0a1020] to-[#161F30]",
    image: "/images/projects/plumbing-gwarko.png",
  },
  {
    slug: "commercial-renovation-pulchowk",
    name: "Commercial Office Renovation",
    category: ["Electric", "False Ceiling", "Furniture", "Painting", "Tiles & Marble"],
    type: "Commercial",
    location: "Pulchowk, Lalitpur",
    year: 2024,
    description:
      "End-to-end renovation of a 3,500 sq ft office including electrical work, false ceiling, custom furniture, tiling and painting.",
    gradient: "from-[#161F30] to-[#1a0505]",
    image: "/images/projects/commercial-renovation-pulchowk.png",
  },
];
