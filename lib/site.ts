export interface Service {
  name: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    name: "Electric & Electronics",
    description: "Safe wiring, fixtures, upgrades and reliable power solutions.",
    icon: "Zap",
  },
  {
    name: "Plumbing",
    description: "Precision pipework, fittings, drainage and water systems.",
    icon: "Droplets",
  },
  {
    name: "Tiles & Marble",
    description: "Premium floor and wall surfaces with refined finishes.",
    icon: "Grid2X2",
  },
  {
    name: "Painting",
    description: "Durable interior and exterior coatings with clean detail.",
    icon: "Paintbrush",
  },
  {
    name: "False Ceiling / Cement Board",
    description: "Elegant ceiling systems, partitions and lighting features.",
    icon: "PanelsTopLeft",
  },
  {
    name: "CCTV Installation",
    description: "Smart surveillance systems for confidence and visibility.",
    icon: "Cctv",
  },
  {
    name: "Furniture & Modular Kitchen",
    description: "Custom joinery and kitchens shaped around modern living.",
    icon: "CookingPot",
  },
  {
    name: "AC Installation & Servicing",
    description: "Efficient cooling installation, maintenance and repair.",
    icon: "AirVent",
  },
  {
    name: "Metal & Aluminium Work",
    description: "Windows, doors, railings and fabrication built precisely.",
    icon: "DoorOpen",
  },
  {
    name: "Parqueting",
    description: "Warm engineered wood floors with meticulous installation.",
    icon: "Layers3",
  },
  {
    name: "Water Proofing",
    description: "Protection for roofs and wet areas against lasting damage.",
    icon: "Umbrella",
  },
  {
    name: "Microoven & Fridge Repair",
    description: "Practical appliance diagnostics and dependable repairs.",
    icon: "Refrigerator",
  },
];

export const projectCategories = [
  "Electric",
  "Plumbing",
  "Tiles & Marble",
  "Painting",
  "False Ceiling",
  "CCTV",
  "Furniture",
  "AC",
  "Metal & Aluminium",
  "Parqueting",
  "Waterproofing",
  "Appliance Repair",
  "AMC",
];

export const stats = [
  { value: 200, suffix: "+", label: "Projects" },
  { value: 12, suffix: "+", label: "Services" },
  { value: 2, suffix: "+", label: "Years" },
  { value: 100, suffix: "%", label: "Satisfaction" },
];
