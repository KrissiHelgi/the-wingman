import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parse } from 'yaml';
import type { Localized } from '../i18n';

const load = <T>(name: string): T =>
  parse(readFileSync(resolve(process.cwd(), 'src/content', name), 'utf8')) as T;

export type DayKey = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface MenuItem {
  name: Localized;
  description?: Localized;
  price: number;
  spice?: number;
  tag?: Localized;
  soldOut?: boolean;
}

export interface MenuCategory {
  title: Localized;
  items: MenuItem[];
}

export interface Sauce {
  name: Localized;
  spice?: number;
}

export interface Menu {
  categories: MenuCategory[];
  sauces: Sauce[];
}

export interface ScheduleStop {
  day: DayKey;
  closed?: boolean;
  place?: string;
  address?: string;
  hours?: string;
  mapUrl?: string;
  note?: Localized;
}

export interface ScheduleEvent {
  date: string;
  title: Localized;
  place?: string;
  hours?: string;
}

export interface Schedule {
  weekly: ScheduleStop[];
  events?: ScheduleEvent[];
}

export interface GalleryImage {
  image: string;
  caption?: Localized;
}

export interface Site {
  tagline: Localized;
  about: Localized[];
  ticker: Localized[];
  phone?: string;
  email: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  booking: { motto: Localized; cta: Localized };
  catering: { intro: Localized; points: Localized[] };
  gallery: GalleryImage[];
}

export const menu = load<Menu>('menu.yaml');
export const schedule = load<Schedule>('schedule.yaml');
export const site = load<Site>('site.yaml');

export const formatPrice = (isk: number) =>
  `${new Intl.NumberFormat('is-IS').format(isk)} kr.`;
