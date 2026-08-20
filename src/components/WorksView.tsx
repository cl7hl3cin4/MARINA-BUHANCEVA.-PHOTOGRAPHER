import React from 'react';
import { motion } from 'motion/react';
import { WorkCategory, WorkItem } from '../types';

interface WorksViewProps {
  works: WorkItem[];
  selectedCategory: WorkCategory;
  viewMode: 'feed' | 'grid';
}

const POSTIMG_FALLBACKS: Record<string, string> = {
  '54.png': 'https://i.postimg.cc/Gpwpw2B7/54.png',
  '72.png': 'https://i.postimg.cc/SsP53XR9/72.png',
  'IMG-8030.jpg': 'https://i.postimg.cc/gJysqnRG/IMG-8030.jpg',
  'image-1.png': 'https://i.postimg.cc/G2jPT6w1/image-1.png',
  'IMG-6796.jpg': 'https://i.postimg.cc/T2g10np4/IMG-6796.jpg',
  'DSC05699-1-(1).png': 'https://i.postimg.cc/Njf0QVbm/DSC05699-1-(1).png',
  'IMG-8476.jpg': 'https://i.postimg.cc/9MTmxjFw/IMG-8476.jpg',
  'DSC05496 10.png': 'https://i.postimg.cc/RV0rhB51/DSC05496-10.png',
  'DSC08661-2.png': 'https://i.postimg.cc/HWZZS8Ry/DSC08661-2.png',
  'DSC08530-1.png': 'https://i.postimg.cc/NF3R3tR7/DSC08530-1.png',
  'DSC07437-1.png': 'https://i.postimg.cc/XJh55W1W/DSC07437-1.png',
  'IMG-6755.jpg': 'https://i.postimg.cc/zGSQ8z0B/IMG-6755.jpg',
  'IMG-9044.jpg': 'https://i.postimg.cc/zDbP3Sxf/IMG-9044.jpg',
  'image-39.png': 'https://i.postimg.cc/Dwyr477X/image-39.png',
  'IMG-8379.jpg': 'https://i.postimg.cc/28dGBHv9/IMG-8379.jpg',
};

export const WorksView: React.FC<WorksViewProps> = ({
  works,
  selectedCategory,
  viewMode,
}) => {
  const filteredWorks =
    selectedCategory === 'ALL'
      ? works
      : works.filter((w) => w.category === selectedCategory);

  if (filteredWorks.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="font-mono-meta text-xs text-black/40 uppercase tracking-widest">
          NO WORKS FOUND
        </p>
      </div>
    );
  }

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    title: string
  ) => {
    const target = e.currentTarget;
    if (!target.dataset.triedFallback) {
      target.dataset.triedFallback = '1';
      const fallback = POSTIMG_FALLBACKS[title];
      if (fallback && target.src !== fallback) {
        target.src = fallback;
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
      {viewMode === 'feed' ? (
        /* Single-Column Editorial Photo Stream (Pure photography) */
        <div className="flex flex-col gap-8 sm:gap-14">
          {filteredWorks.map((work) => (
            <motion.div
              key={work.id}
              id={`work-item-${work.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <div
                className={`relative w-full overflow-hidden bg-neutral-100/50 ${
                  work.hasBorder ? 'border border-black/25' : ''
                }`}
              >
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageError(e, work.title)}
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* 2-Column Grid (Pure photography) */
        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          {filteredWorks.map((work) => (
            <motion.div
              key={work.id}
              id={`work-grid-${work.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <div
                className={`relative overflow-hidden bg-neutral-100 ${
                  work.hasBorder ? 'border border-black/25' : ''
                }`}
              >
                <div className={`w-full ${work.aspectRatio} overflow-hidden`}>
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageError(e, work.title)}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
