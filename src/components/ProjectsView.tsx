import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectItem } from '../types';
import { ExternalLink, BookOpen, Loader2 } from 'lucide-react';

interface ProjectsViewProps {
  projects: ProjectItem[];
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ projects }) => {
  const project = projects[0] || {
    id: 'proj-photobook-01',
    title: '.11/25/2024   .transcription   .vol [01]',
    subtitle: 'PHOTOBOOK //',
    year: '2024',
    heyzineUrl: 'https://heyzine.com/flip-book/20f73bb6e5.html',
  };

  const customUrl = project.heyzineUrl?.trim() || 'https://heyzine.com/flip-book/20f73bb6e5.html';
  const [isLoaded, setIsLoaded] = useState(false);

  // Normalize Heyzine embed URL
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `https://heyzine.com/flip-book/${url}.html`;
  };

  const embedSrc = getEmbedUrl(customUrl);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="flex flex-col gap-4 sm:gap-6"
      >
        {/* Photobook Header */}
        <div className="border-b border-black pb-3 pt-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <h2 className="font-sans font-bold text-base sm:text-xl md:text-2xl lowercase tracking-normal text-black break-words leading-tight whitespace-pre-wrap">
            {project.title}
          </h2>
          <div className="flex items-center gap-3 text-xs font-mono-meta text-neutral-500">
            <span className="uppercase">{project.subtitle || 'PHOTOBOOK //'}</span>
            <span>•</span>
            <a
              href={customUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-black hover:underline uppercase tracking-wider"
            >
              <span>OPEN IN NEW TAB</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Heyzine Flipbook Interactive Embed Viewer */}
        <div
          id="heyzine-book-container"
          className="relative w-full bg-neutral-900 border border-neutral-300 overflow-hidden min-h-[420px] sm:min-h-[560px] aspect-[16/10]"
        >
          {/* Subtle loading spinner while iframe loads */}
          {!isLoaded && (
            <div className="absolute inset-0 z-0 bg-neutral-900 flex flex-col items-center justify-center gap-3 text-neutral-400 font-mono-meta text-xs">
              <Loader2 className="w-6 h-6 animate-spin text-white" />
              <span className="uppercase tracking-widest text-[11px]">Loading Photobook...</span>
            </div>
          )}

          {/* Heyzine Flipbook iframe with full browser permission headers */}
          {embedSrc ? (
            <iframe
              src={embedSrc}
              title={project.title}
              className="fp-iframe w-full h-full relative z-10"
              allowFullScreen
              // @ts-ignore
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allow="autoplay; fullscreen; clipboard-write; picture-in-picture; accelerometer; gyroscope; screen-wake-lock"
              referrerPolicy="no-referrer"
              scrolling="no"
              loading="eager"
              onLoad={() => setIsLoaded(true)}
              style={{ border: '1px solid lightgray', width: '100%', height: '100%', minHeight: '420px' }}
            />
          ) : (
            <div className="w-full h-full min-h-[400px] bg-neutral-900 flex flex-col items-center justify-center p-8 text-center text-neutral-400 font-mono-meta">
              <div className="max-w-md space-y-4 border border-neutral-800 p-6 sm:p-8 bg-neutral-950">
                <BookOpen className="w-8 h-8 mx-auto text-neutral-400" />
                <div className="text-xs uppercase tracking-widest text-neutral-500">
                  PHOTOBOOK //
                </div>
                <div className="text-sm sm:text-base text-white font-sans font-medium">
                  {project.title}
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
