import { parse } from 'yaml';
import type { Localized } from '../i18n';
import menuYaml from '../content/menu.yaml?raw';
import scheduleYaml from '../content/schedule.yaml?raw';
import siteYaml from '../content/site.yaml?raw';

export interface MenuItem {
  name: Localized;
  description?: Localized;
  price?: number;
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

export interface ScheduleEvent {
  date: string;
  title: Localized;
  place?: string;
  hours?: string;
  mapUrl?: string;
}

export interface Schedule {
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
  catering: { intro: Localized; points?: Localized[] };
  gallery: GalleryImage[];
}

export const menu = parse(menuYaml) as Menu;
export const schedule = parse(scheduleYaml) as Schedule;
export const site = parse(siteYaml) as Site;

export const formatPrice = (isk: number) =>
  `${new Intl.NumberFormat('is-IS').format(isk)} kr.`;
