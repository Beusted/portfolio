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
    <>
      <Header />
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="mb-6 text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Photo Gallery
          </h1>

          {/* Responsive grid that auto-fills columns with a minimum width of 200px */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
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
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 ease-out hover:scale-105"
                    priority={imageFiles.indexOf(file) < 4}
                    quality={75}
                    loading={imageFiles.indexOf(file) < 4 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPjA+OjU/RUVHUFBQUFtbW1tbW1tbW1tbW1v/2wBDARUXFyAeIB4gHR4dICEgW1FRW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 