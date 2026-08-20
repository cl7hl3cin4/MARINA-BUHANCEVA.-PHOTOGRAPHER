/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TabType, WorkCategory } from './types';
import { WORKS_DATA, PROJECTS_DATA } from './data/portfolioData';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { WorksView } from './components/WorksView';
import { ProjectsView } from './components/ProjectsView';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('WORKS');
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory>('ALL');
  const [viewMode, setViewMode] = useState<'feed' | 'grid'>('feed');

  const handleSelectTab = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-start selection:bg-black selection:text-white" id="app-root">
      <div id="top" />

      {/* Main Stark Swiss Header */}
      <Header />

      {/* Sub-Header Navigation: WORKS vs PROJECTS & Categories */}
      <Navigation
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
      />

      {/* Main Content Area */}
      <main className="w-full pb-16" id="main-content">
        <AnimatePresence mode="wait">
          {activeTab === 'WORKS' ? (
            <motion.section
              key="tab-works-section"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <WorksView
                works={WORKS_DATA}
                selectedCategory={selectedCategory}
                viewMode={viewMode}
              />
            </motion.section>
          ) : (
            <motion.section
              key="tab-projects-section"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ProjectsView projects={PROJECTS_DATA} />
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
