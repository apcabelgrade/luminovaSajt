// Next generates its own bare out/404.html from the internal not-found route.
// GitHub Pages serves exactly that file for unmatched paths, so replace it
// with the branded fallback in static/. Run from the "postbuild" npm script.
import { copyFile } from 'node:fs/promises';

await copyFile('static/404.html', 'out/404.html');
console.log('postbuild: static/404.html -> out/404.html');
