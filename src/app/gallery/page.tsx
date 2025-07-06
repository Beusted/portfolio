import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Header from '@/components/sections/Header';
import type { Metadata } from 'next';

// Retrieve image filenames from the public/images directory at request/build time.
function getImageFiles() {
  const imagesDir = path.join(process.cwd(), 'public', 'images', 'gallery');
  // Filter for common image extensions
  return fs
    .readdirSync(imagesDir)
    .filter((file) => /\.(jpe?g|png|gif|webp|avif|jpeg)$/i.test(file));
}

export const metadata: Metadata = {
  title: 'Gallery',
  description: "Photo gallery showcasing Brian's projects and memories.",
};

export default function GalleryPage() {
  const imageFiles = getImageFiles();

  return (
    <main className="min-h-screen pt-20 px-4 pb-8">
      <Header />
      <h1 className="mb-6 text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
        Photo Gallery
      </h1>

      {/* Responsive grid that auto-fills columns with a minimum width of 200px */}
      <div className="mx-auto grid max-w-7xl gap-4 px-2 sm:grid-cols-2 md:grid-cols-3">
        {imageFiles.map((file) => (
          <div
            key={file}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md"
          >
            {/\.heic$/i.test(file) ? (
              // Fallback to native <img> for HEIC files, since Next.js Image optimization doesn't support them
              <img
                src={`/images/gallery/${file}`}
                alt={file.replace(/[-_]/g, ' ').split('.')[0]}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
              />
            ) : (
              <Image
                src={`/images/gallery/${file}`}
                alt={file.replace(/[-_]/g, ' ').split('.')[0]}
                fill
                sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 ease-out hover:scale-105"
                unoptimized
              />
            )}
          </div>
        ))}
      </div>
    </main>
  );
} 