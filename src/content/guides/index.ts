import type { Guide } from '../types';
import { giroCards } from './giro-cards';
import { busesTimetables } from './buses-timetables';
import { airportAerobus } from './airport-aerobus';
import { umaCampus } from './uma-campus';

export const guides: Guide[] = [giroCards, busesTimetables, airportAerobus, umaCampus];
export const guideById = (id: string) => guides.find((g) => g.id === id);
export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
