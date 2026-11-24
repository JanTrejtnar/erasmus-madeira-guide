import type { Guide } from '../types';
import { busCards } from './bus-cards';
import { umaCampus } from './uma-campus';

export const guides: Guide[] = [busCards, umaCampus];
export const guideById = (id: string) => guides.find((g) => g.id === id);
export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
