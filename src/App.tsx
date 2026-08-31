/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrainingCategories } from './components/TrainingCategories';
import { FeaturedCourses } from './components/FeaturedCourses';
import { WhyMarineMind } from './components/WhyMarineMind';
import { EcosystemPreview } from './components/EcosystemPreview';
import { MarineAIPreview } from './components/MarineAIPreview';
import { AboutSection } from './components/AboutSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StageModal } from './components/StageModal';
import { CourseModal } from './components/CourseModal';
import { CoursesPage } from './components/CoursesPage';
import { CourseDetailsPage } from './components/CourseDetailsPage';
import { Course, FutureFeatureModalState } from './types';

type AppView = 'home' | 'courses' | 'course-details';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [modalCourse, setModalCourse] = useState<Course | null>(null);

  const [stageModalState, setStageModalState] = useState<FutureFeatureModalState>({
    isOpen: false,
    title: '',
    stageName: '',
    description: '',
    plannedHighlights: []
  });

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleOpenStageModal = (modalState: FutureFeatureModalState) => {
    setStageModalState(modalState);
  };

  const handleCloseStageModal = () => {
    setStageModalState(prev => ({ ...prev, isOpen: false }));
  };

  // Navigating to Courses Catalogue
  const handleNavigateCourses = (categoryFilter?: string | null) => {
    setSelectedCategoryId(categoryFilter || null);
    setCurrentView('courses');
  };

  // Navigating to Home
  const handleNavigateHome = () => {
    setCurrentView('home');
  };

  // Category click from Homepage TrainingCategories
  const handleSelectCategoryFromHome = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setCurrentView('courses');
  };

  // Viewing a course in detail (dedicated page)
  const handleViewCourseDetails = (course: Course) => {
    setSelectedCourse(course);
    setCurrentView('course-details');
  };

  // Enrol / Register interest action
  const handleEnrollInterest = (course: Course) => {
    setModalCourse(null);
    setStageModalState({
      isOpen: true,
      title: `Registration Interest: ${course.title}`,
      subtitle: 'Stage 2 Course Discovery & Stage 3 Student Accounts',
      stageName: 'Stage 3 Roadmap',
      description: `You have expressed interest in "${course.title}". Formal student account creation, course enrollment, and progress tracking will be introduced in Stage 3.`,
      plannedHighlights: [
        'Personal mariner learning profile and course enrollments',
        'Interactive lesson checkpoints and downloadable checklists',
        'Knowledge checks and formative maritime assessments (Stage 5)',
        'Digital certificates and training record logging (Stage 6)'
      ]
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Header & Navigation */}
      <Header 
        currentView={currentView}
        onNavigateHome={handleNavigateHome}
        onNavigateCourses={() => handleNavigateCourses()}
        onOpenStageModal={handleOpenStageModal} 
      />

      {/* View Switcher */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero 
              onExploreCourses={() => handleNavigateCourses()} 
              onStartLearning={() => {
                const catEl = document.getElementById('categories');
                if (catEl) {
                  catEl.scrollIntoView({ behavior: 'smooth' });
                }
              }} 
            />

            {/* 2. Training Categories ("Explore Maritime Training") */}
            <TrainingCategories 
              onSelectCategory={handleSelectCategoryFromHome} 
            />

            {/* 3. Featured Courses */}
            <FeaturedCourses
              selectedCategoryId={selectedCategoryId}
              onClearCategoryFilter={() => setSelectedCategoryId(null)}
              onSelectCategoryFilter={(catId) => setSelectedCategoryId(catId)}
              onViewCourse={handleViewCourseDetails}
              onExploreAllCourses={() => handleNavigateCourses()}
            />

            {/* 4. Why Marine Mind? */}
            <WhyMarineMind />

            {/* 5. Learning Ecosystem Preview */}
            <EcosystemPreview />

            {/* 6. Meet Marine Mind AI Preview */}
            <MarineAIPreview onOpenStageModal={handleOpenStageModal} />

            {/* 7. About Marine Mind */}
            <AboutSection />

            {/* 8. Call To Action Section */}
            <CTASection 
              onExploreCourses={() => handleNavigateCourses()}
              onOpenStageModal={handleOpenStageModal}
            />

            {/* 9. Contact & Training Enquiries */}
            <ContactSection />
          </>
        )}

        {currentView === 'courses' && (
          <CoursesPage
            initialCategoryId={selectedCategoryId}
            onViewCourse={handleViewCourseDetails}
            onNavigateHome={handleNavigateHome}
          />
        )}

        {currentView === 'course-details' && (
          <CourseDetailsPage
            course={selectedCourse}
            onBackToCourses={() => setCurrentView('courses')}
            onNavigateHome={handleNavigateHome}
            onEnrollClick={handleEnrollInterest}
            onOpenStageModal={handleOpenStageModal}
            onSelectCourse={handleViewCourseDetails}
          />
        )}
      </main>

      {/* Professional Footer */}
      <Footer 
        onNavigateHome={handleNavigateHome}
        onNavigateCourses={() => handleNavigateCourses()}
        onSelectCategory={(catId) => handleNavigateCourses(catId)}
        onOpenStageModal={handleOpenStageModal} 
      />

      {/* Course Details Modal (optional fallback / quick preview) */}
      <CourseModal
        course={modalCourse}
        onClose={() => setModalCourse(null)}
        onEnrollClick={handleEnrollInterest}
        onOpenFullDetails={handleViewCourseDetails}
      />

      {/* Future Stage Information Modal */}
      <StageModal
        modalState={stageModalState}
        onClose={handleCloseStageModal}
      />
    </div>
  );
}
