import {
  AirVent,
  Cctv,
  CookingPot,
  DoorOpen,
  Droplets,
  Grid2X2,
  Layers3,
  Paintbrush,
  PanelsTopLeft,
  Refrigerator,
  Umbrella,
  Zap,
} from "lucide-react";

const icons = {
  AirVent,
  Cctv,
  CookingPot,
  DoorOpen,
  Droplets,
  Grid2X2,
  Layers3,
  Paintbrush,
  PanelsTopLeft,
  Refrigerator,
  Umbrella,
  Zap,
};

interface ServiceIconProps {
  name: string;
  className?: string;
}

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = icons[name as keyof typeof icons] ?? Zap;

  return <Icon className={className} />;
}
