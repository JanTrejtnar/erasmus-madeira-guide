import { Bus, GraduationCap, Home, ShoppingCart, Smartphone, Mountain, FileText, Siren, type LucideProps } from 'lucide-react';
import type { ComponentType } from 'react';

const icons: Record<string, ComponentType<LucideProps>> = {
  Bus, GraduationCap, Home, ShoppingCart, Smartphone, Mountain, FileText, Siren,
};
export function Icon({ name, ...p }: { name: string } & LucideProps) {
  const C = icons[name] ?? FileText;
  return <C aria-hidden="true" {...p} />;
}
