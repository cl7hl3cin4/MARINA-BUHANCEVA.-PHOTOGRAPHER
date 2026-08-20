import React from 'react';
import { motion } from 'motion/react';
import { TabType, WorkCategory } from '../types';
import { LayoutGrid, Rows } from 'lucide-react';

interface NavigationProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  selectedCategory: WorkCategory;
  onSelectCategory: (cat: WorkCategory) => void;
  viewMode: 'feed' | 'grid';
  onToggleViewMode: (mode: 'feed' | 'grid') => void;
}

const CATEGORIES: { id: WorkCategory; label: string }[] = [
  { id: 'ALL', label: 'ALL WORKS' },
  { id: 'PEOPLE', label: 'PEOPLE' },
  { id: 'DOCUMENTARY', label: 'DOCUMENTARY' },
];

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onSelectTab,
  selectedCategory,
  onSelectCategory,
  viewMode,
  onToggleViewMode,
}) => {
  return (
    <div className="w-full bg-white border-b border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-3">
        
        {/* Main Tab Controls: WORKS vs PROJECTS — Full Width, Large Typography */}
        <div className="grid grid-cols-2 w-full p-1 bg-neutral-100 border border-black/15 rounded-none">
          <button
            id="btn-tab-works"
            type="button"
            onClick={() => onSelectTab('WORKS')}
            className={`relative w-full py-3 sm:py-4 text-base sm:text-xl md:text-2xl font-display font-black tracking-tight uppercase transition-colors z-10 text-center ${
              activeTab === 'WORKS' ? 'text-white' : 'text-black/75 hover:text-black'
            }`}
          >
            {activeTab === 'WORKS' && (
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute inset-0 bg-black z-[-1]"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <span>WORKS</span>
          </button>

          <button
            id="btn-tab-projects"
            type="button"
            onClick={() => onSelectTab('PROJECTS')}
            className={`relative w-full py-3 sm:py-4 text-base sm:text-xl md:text-2xl font-display font-black tracking-tight uppercase transition-colors z-10 text-center ${
              activeTab === 'PROJECTS' ? 'text-white' : 'text-black/75 hover:text-black'
            }`}
          >
            {activeTab === 'PROJECTS' && (
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute inset-0 bg-black z-[-1]"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <span>PROJECTS</span>
          </button>
        </div>

        {/* Secondary Category Filter: ALL WORKS, PEOPLE, DOCUMENTARY — Full Width Grid */}
        {activeTab === 'WORKS' && (
          <div className="w-full flex flex-col gap-2 pt-1 border-t border-black/5">
            <div className="grid grid-cols-3 w-full gap-1.5 sm:gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  id={`filter-${cat.id.toLowerCase()}`}
                  type="button"
                  onClick={() => onSelectCategory(cat.id)}
                  className={`w-full text-center text-[11px] sm:text-xs md:text-sm font-mono-meta uppercase tracking-wider py-2.5 px-1 sm:px-3 transition-all border ${
                    selectedCategory === cat.id
                      ? 'border-black bg-black text-white font-bold'
                      : 'border-black/20 bg-white text-black/80 hover:text-black hover:border-black active:bg-neutral-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* View Mode Switcher (Feed / Grid) */}
            <div className="flex items-center justify-end pt-1">
              <div className="flex items-center border border-black/15 bg-white">
                <button
                  id="btn-view-feed"
                  type="button"
                  onClick={() => onToggleViewMode('feed')}
                  aria-label="Feed View"
                  className={`p-2 transition-colors ${
                    viewMode === 'feed' ? 'bg-black text-white' : 'text-black/60 hover:text-black'
                  }`}
                  title="Single Column Feed"
                >
                  <Rows size={15} />
                </button>
                <button
                  id="btn-view-grid"
                  type="button"
                  onClick={() => onToggleViewMode('grid')}
                  aria-label="Grid View"
                  className={`p-2 transition-colors ${
                    viewMode === 'grid' ? 'bg-black text-white' : 'text-black/60 hover:text-black'
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid size={15} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
