"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhotoCard from "./components/PhotoCard";
import { gallery } from "./data";
import { Photo } from "./types";
import Image from "next/image";
import { ScrollToTop } from "./components/ScrollToTop";

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <>
      <div className="min-h-screen bg-black pb-4 w-full">
        <div className="w-full max-w-[1280px] mx-auto px-4 ">
          <header className="my-6 flex items-center">
            <Image
              src="/logo.png"
              alt="FotoGraph"
              width={200}
              height={100}
              className="mx-auto"
            />
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2px] ">
            {gallery.map((g: Photo) => (
              <PhotoCard
                key={g.id}
                imageSrc={g.url}
                onClick={() => setSelectedPhoto(g.url)}
                title={g.title}
              />
            ))}

            <AnimatePresence>
              {selectedPhoto && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedPhoto(null)}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm cursor-zoom-out"
                >
                  <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    src={selectedPhoto}
                    className="max-w-[90vw] max-h-[90vh] object-contain shadow-2xl rounded-sm"
                    alt="Preview"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <footer className="py-8 text-center">
          <p className="text-neutral-500 text-sm tracking-widest uppercase">
            Gonzalo Barrera • Fotógrafo
          </p>
          <p className="text-neutral-600 text-xs mt-2">
            © 2026 Santiago, Chile
          </p>
        </footer>
      </div>
      <ScrollToTop />
    </>
  );
};

export default App;
