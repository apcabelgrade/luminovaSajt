import fs from 'node:fs';
import path from 'node:path';
import FramedPhoto from '@/components/FramedPhoto';
import RotatingExhibit, { type ExhibitSlide } from '@/components/RotatingExhibit';
import type { Dictionary } from '@/lib/content';

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

/**
 * Collects the main-page panorama plates at build time:
 * belgrade-panorama.* first, then everything in /public/photos/panorama/
 * (sorted by name). Drop images into that folder and they join the
 * rotation on the next build — untouched, as delivered.
 */
export default function PanoramaExhibit({ dict }: { dict: Dictionary }) {
  const photosDir = path.join(process.cwd(), 'public', 'photos');
  const slides: ExhibitSlide[] = [];

  for (const ext of EXTENSIONS) {
    const name = `belgrade-panorama.${ext}`;
    if (fs.existsSync(path.join(photosDir, name))) {
      slides.push({ src: `/photos/${name}`, alt: dict.panorama.alt });
      break;
    }
  }

  const panoramaDir = path.join(photosDir, 'panorama');
  if (fs.existsSync(panoramaDir)) {
    const files = fs
      .readdirSync(panoramaDir)
      .filter((f) => EXTENSIONS.includes(f.split('.').pop()?.toLowerCase() ?? ''))
      .sort();
    for (const f of files) {
      slides.push({ src: `/photos/panorama/${f}`, alt: dict.panorama.alt });
    }
  }

  if (slides.length === 0) {
    return (
      <FramedPhoto
        photo={dict.panorama}
        ratio="wide"
        placeholderTitle={dict.exhibit.placeholderTitle}
        placeholderHint={dict.exhibit.placeholderHint}
      />
    );
  }

  return (
    <RotatingExhibit
      slides={slides}
      caption={dict.panorama.caption}
      markerLabel={dict.exhibit.markerLabel}
    />
  );
}
