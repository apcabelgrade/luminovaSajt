import fs from 'node:fs';
import path from 'node:path';
import { GlyphFacade } from '@/components/engravings';
import DrawOnView from '@/components/DrawOnView';
import type { ServicePhoto } from '@/lib/content';

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

/**
 * A photograph hangs as a framed exhibit inside a brass hairline frame,
 * displayed exactly as supplied — no color treatment (user decision).
 * `photo.file` is the base name; any of jpg/jpeg/png/webp under
 * /public/photos/ is picked up. Until the file arrives, the frame shows
 * a designed placeholder that names exactly which file it is waiting for.
 */
export default function FramedPhoto({
  photo,
  ratio = 'standard',
  placeholderTitle,
  placeholderHint,
}: {
  photo: ServicePhoto;
  ratio?: 'standard' | 'wide';
  placeholderTitle: string;
  placeholderHint: string;
}) {
  const found = EXTENSIONS.map((ext) => `${photo.file}.${ext}`).find((name) =>
    fs.existsSync(path.join(process.cwd(), 'public', 'photos', name)),
  );

  return (
    <figure className={`exhibit exhibit--ratio-${ratio}`}>
      <div className="exhibit__frame">
        <div className="exhibit__media">
          {found ? (
            <img src={`/photos/${found}`} alt={photo.alt} loading="lazy" />
          ) : (
            <div
              className="exhibit__placeholder"
              style={{ aspectRatio: ratio === 'wide' ? '21 / 9' : '3 / 2' }}
            >
              <DrawOnView className="exhibit__placeholder-glyph">
                <GlyphFacade />
              </DrawOnView>
              <p className="exhibit__placeholder-title">{placeholderTitle}</p>
              <p className="exhibit__placeholder-hint">
                {placeholderHint} <code>/public/photos/{photo.file}.jpg</code>
              </p>
            </div>
          )}
        </div>
      </div>
      <figcaption className="exhibit__caption">{photo.caption}</figcaption>
    </figure>
  );
}
