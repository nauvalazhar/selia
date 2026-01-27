import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { blocks } from 'components/blocks';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, '-');
}

export function slugToCategory(slug: string): string {
  const categories = [...new Set(Object.values(blocks).map(b => b.category))];
  return categories.find(c => categoryToSlug(c) === slug) || '';
}
