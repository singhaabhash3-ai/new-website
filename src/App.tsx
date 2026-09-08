/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EcosystemSection from './components/EcosystemSection';
import EducationSection from './components/EducationSection';
import TrajectorySection from './components/TrajectorySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProfileModal from './components/ProfileModal';

export default function App() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#051424] text-[#d4e4fa] selection:bg-[#8083ff] selection:text-[#0d0096]">
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="w-full pt-20 flex-1 bg-[#051424]">
        {/* Section 1: Hero */}
        <HeroSection
          onScrollToProjects={() => scrollToSection('projects')}
          onScrollToContact={() => scrollToSection('contact')}
        />

        {/* Section 2: About Me */}
        <AboutSection />

        {/* Section 3: Skills / Targeted Technical Capabilities */}
        <SkillsSection />

        {/* Section 4: Featured Projects / Curated Web & Software Explorations */}
        <ProjectsSection />

        {/* Section 5: Interactive Technology Ecosystem */}
        <EcosystemSection />

        {/* Section 6: Education Timeline */}
        <EducationSection />

        {/* Section 7: Currently Learning & Building (Trajectory) */}
        <TrajectorySection />

        {/* Section 8: Reach Out & Contact */}
        <ContactSection />
      </main>

      {/* Section 9: Footer & Obsidian Engine Design System Recap */}
      <Footer
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
      />

      {/* Profile & Student Card Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onScrollToContact={() => scrollToSection('contact')}
      />
    </div>
  );
}
