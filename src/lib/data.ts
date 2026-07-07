import yaml from 'js-yaml';
import fs from 'node:fs';
import path from 'node:path';

export const variant = process.env.SITE_VARIANT || 'ios';
const dataDir = path.join(process.cwd(), 'src/data', variant);
// Root site mirrors the iOS content variant, including which blog posts it shows.
export const blogCategory = variant === 'bim' ? 'bim' : 'ios';

export function load(file: string): any {
  const filePath = path.join(dataDir, file);
  try {
    return yaml.load(fs.readFileSync(filePath, 'utf8')) || {};
  } catch {
    return {};
  }
}

// Lord Icon color themes
export const LI = {
  dark: 'primary:#1A1D23,secondary:#2E5090',
  light: 'primary:#ffffff,secondary:#ffffff',
  blue: 'primary:#2E5090,secondary:#2E5090',
};

// Lord Icon CDN URL from hash
export const liSrc = (hash: string) => `https://cdn.lordicon.com/${hash}.json`;
