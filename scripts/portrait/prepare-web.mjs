/**
 * Prepares Rahat's real headshot for the sidebar "portrait.png" thumbnail.
 *
 * Local-only. Run it, inspect the output, re-tune CROP if needed, done:
 *
 *     node scripts/portrait/prepare-web.mjs
 *
 * Reads scripts/portrait/../../design/portrait-source/rahat-source.jpeg (gitignored — the
 * raw photo never enters git) and writes a cropped, EXIF-stripped, web-sized copy to
 * site/public/images/portrait.jpg.
 *
 * CROP is tuned to THIS photo's specific composition (studio headshot, subject roughly
 * centered, hair starting near the very top of a square 4096x4096 frame) — it is not a
 * general-purpose crop and would need retuning against a different photo.
 */

import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(resolve(here, '../../site/package.json'));
const sharp = require('sharp');

const sourceFile = resolve(here, '../../design/portrait-source/rahat-source.jpeg');
const outFile = resolve(here, '../../site/public/images/portrait.jpg');

// Fractions of the full square source frame. Hair starts very close to the top of frame;
// shoulders spread wide by ~0.6 down. Keeps head + neck + upper shoulder, a little headroom
// above the hair, trimmed a bit off both sides of the plain background.
const CROP = { left: 0.08, top: 0.0, width: 0.84, height: 0.62 };

mkdirSync(dirname(outFile), { recursive: true });

const meta = await sharp(sourceFile).rotate().metadata();

await sharp(sourceFile)
  .rotate() // bakes EXIF orientation into pixels before EXIF is dropped
  .extract({
    left: Math.round(meta.width * CROP.left),
    top: Math.round(meta.height * CROP.top),
    width: Math.round(meta.width * CROP.width),
    height: Math.round(meta.height * CROP.height),
  })
  .resize({ width: 480 })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(outFile);

const outMeta = await sharp(outFile).metadata();
if (outMeta.exif || outMeta.xmp || outMeta.iptc) {
  console.error('Metadata survived the rewrite — refusing to leave the file in place.');
  process.exit(1);
}

console.log(`wrote ${outFile} (${outMeta.width}x${outMeta.height}, metadata verified clean)`);
