/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages serves plain files — no Node server, so the whole site is
  // pre-rendered into out/ at build time.
  output: 'export',
  // Every route becomes a directory with an index.html, which is what static
  // hosts resolve most reliably.
  trailingSlash: true,
  // The image optimizer needs a server; there is none.
  images: { unoptimized: true },
  compress: true,
};

export default nextConfig;
