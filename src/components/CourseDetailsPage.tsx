import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  ShieldAlert, 
  Info, 
  Clock, 
  User, 
  Award, 
  DollarSign, 
  Compass, 
  ChevronRight,
  Sparkles,
  Share2,
  Bookmark,
  Check,
  Anchor
} from 'lucide-react';
import { Course, FutureFeatureModalState } from '../types';
import { COURSES_CATALOG } from '../data/sampleData';
import { CourseCard } from './CourseCard';

interface CourseDetailsPageProps {
  course: Course | null;
  onBackToCourses: () => void;
  onNavigateHome: () => void;
  onEnrollClick: (course: Course) => void;
  onOpenStageModal: (state: FutureFeatureModalState) => void;
  onSelectCourse?: (course: Course) => void;
}

export const CourseDetailsPage: React.FC<CourseDetailsPageProps> = ({
  course,
  onBackToCourses,
  onNavigateHome,
  onEnrollClick,
  onOpenStageModal,
  onSelectCourse
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // Automatically scroll to top whenever the active course changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [course?.id]);

  if (!course) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full p-8 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Compass className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-bold text-white font-['Space_Grotesk']">
            Course Not Found
          </h2>
          <p className="text-sm text-slate-400">
            The requested course could not be located in our maritime training catalogue.
          </p>
          <button
            onClick={onBackToCourses}
            id="back-to-courses-not-found-btn"
            className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-all flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Courses Catalogue</span>
          </button>
        </div>
      </div>
    );
  }

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-800/60';
      case 'Intermediate':
        return 'bg-sky-950/80 text-sky-300 border-sky-800/60';
      case 'Advanced':
        return 'bg-purple-950/80 text-purple-300 border-purple-800/60';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-cyan-950/90 text-cyan-300 border-cyan-700/60';
      case 'Coming Soon':
        return 'bg-amber-950/90 text-amber-300 border-amber-700/60';
      case 'Draft':
        return 'bg-slate-900/90 text-slate-400 border-slate-700/60';
      default:
        return 'bg-cyan-950/90 text-cyan-300 border-cyan-700/60';
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleBookmarkToggle = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div id="course-details-container" className="pt-24 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Return Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400">
            <button 
              onClick={onNavigateHome}
              className="hover:text-cyan-300 transition-colors"
              id="breadcrumb-home-link"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <button 
              onClick={onBackToCourses}
              className="hover:text-cyan-300 transition-colors"
              id="breadcrumb-courses-link"
            >
              Courses
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-400 font-medium truncate max-w-[200px] sm:max-w-md">
              {course.title}
            </span>
          </nav>

          <button
            onClick={onBackToCourses}
            id="back-to-courses-top-btn"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
            <span>Back to Courses</span>
          </button>
        </div>

        {/* Hero Banner with Overview Header */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl mb-10">
          <div className="relative h-72 sm:h-96 w-full overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-black/30" />
            
            {/* Top Badges */}
            <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 shadow-md">
                  Sample Course
                </span>
                <span className={`px-3 py-1 rounded-md text-xs font-semibold border backdrop-blur-md ${getStatusBadgeColor(course.status)}`}>
                  Status: {course.status}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleBookmarkToggle}
                  className={`p-2 rounded-xl border backdrop-blur-md transition-all ${
                    bookmarked 
                      ? 'bg-cyan-600 text-white border-cyan-500 shadow-md shadow-cyan-950' 
                      : 'bg-slate-950/70 text-slate-300 border-slate-700/80 hover:text-white'
                  }`}
                  title={bookmarked ? "Bookmarked (Demo)" : "Bookmark this course (Demo)"}
                  id="course-bookmark-btn"
                >
                  <Bookmark className="w-4 h-4" />
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 rounded-xl bg-slate-950/70 text-slate-300 border border-slate-700/80 hover:text-white backdrop-blur-md transition-all flex items-center space-x-1"
                  title="Share course link"
                  id="course-share-btn"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                  {copiedLink && <span className="text-[10px] text-emerald-400 font-semibold pr-1">Copied</span>}
                </button>
              </div>
            </div>

            {/* Bottom Floating Title Info */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-950/90 text-cyan-300 border border-cyan-800/80 backdrop-blur-md">
                  {course.category}
                </span>
                <span className={`px-3 py-1 rounded-lg text-xs font-semibold border backdrop-blur-md ${getLevelBadgeColor(course.level)}`}>
                  Level: {course.level}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] leading-tight">
                {course.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Grid Layout: Main Content (2 cols) vs Sidebar Metadata (1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column (2/3 width on large screens) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Demonstration Specimen Notice */}
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-amber-900/10 p-4 sm:p-5 flex items-start space-x-3.5 text-xs text-amber-200/90 shadow-lg">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold text-amber-300 block text-sm">
                  Demonstration Specimen Notice
                </span>
                <p className="leading-relaxed">
                  This course is a demonstration/sample syllabus created for the Marine Mind platform architecture. It illustrates modular curriculum layout and learning outcomes. No statutory licensing, governmental authority accreditation, or examination fees are claimed or collected.
                </p>
              </div>
            </div>

            {/* 2. Course Description */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-md">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight font-['Space_Grotesk'] mb-4 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span>Course Overview</span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {course.description}
              </p>
              <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                Marine Mind structures training around practical maritime discipline, safety principles, and operational awareness, allowing mariners to advance their knowledge systematically.
              </p>
            </div>

            {/* 3. Learning Objectives */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-md">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight font-['Space_Grotesk'] mb-3 flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Learning Objectives</span>
              </h2>
              <p className="text-xs text-slate-400 mb-5">
                Students enrolled in this sample course will be introduced to:
              </p>
              <div className="space-y-3">
                {course.learningObjectives.map((objective, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Course Modules — Sample Structure */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight font-['Space_Grotesk'] flex items-center space-x-2">
                  <Layers className="w-5 h-5 text-cyan-400" />
                  <span>Course Modules — Sample Structure</span>
                </h2>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 self-start sm:self-auto">
                  {course.modules.length} Modules
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-6">
                Below is the demonstration modular curriculum designed for step-by-step mariner progression:
              </p>

              <div className="space-y-4">
                {course.modules.map((module) => (
                  <div 
                    key={module.id}
                    id={`module-card-${module.id}`}
                    className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/90 hover:border-cyan-800/50 transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                          Module {module.number}
                        </span>
                        <h3 className="text-base font-bold text-white font-['Space_Grotesk']">
                          {module.title}
                        </h3>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0">
                        {module.lessons.length} Lessons
                      </span>
                    </div>

                    {module.description && (
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {module.description}
                      </p>
                    )}

                    {/* Lesson Topics Breakdown */}
                    <div className="pt-2 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {module.lessons.map((lesson, lIdx) => (
                        <div key={lIdx} className="flex items-center space-x-2 text-xs text-slate-300 bg-slate-900/40 p-2 rounded-lg border border-slate-800/50">
                          <span className="text-cyan-500 font-bold">•</span>
                          <span className="truncate">{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. What Students Can Expect to Learn */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-md">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight font-['Space_Grotesk'] mb-4 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>What Students Can Expect to Learn</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.whatToExpect.map((expectItem, eIdx) => (
                  <div key={eIdx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start space-x-2.5">
                    <span className="text-cyan-400 font-bold text-sm">✓</span>
                    <span className="text-xs text-slate-300 leading-relaxed">{expectItem}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column (1/3 width on large screens) */}
          <div className="space-y-6">
            
            {/* Action / Enrolment Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#071321] border border-cyan-950/80 shadow-xl space-y-5 sticky top-24">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                  Enrolment & Access
                </span>
                <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                  Register Your Interest
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Join the candidate list for this course as interactive learning, digital assessments, and student accounts launch.
                </p>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-slate-800">
                <button
                  onClick={() => onEnrollClick(course)}
                  id="enrol-register-interest-btn"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all shadow-lg shadow-cyan-950 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Enrol / Register Interest</span>
                </button>

                <button
                  onClick={() => onOpenStageModal({
                    isOpen: true,
                    title: 'Learning Centre Specimen',
                    subtitle: 'Stage 4 Learning Hub',
                    stageName: 'Stage 4 Learning Centre',
                    description: 'Interactive multimedia lesson players, vessel simulator exercises, and study summaries are scheduled for Stage 4.',
                    plannedHighlights: [
                      'Interactive slide decks and video drills',
                      'Chartwork simulation canvas',
                      'Lesson completion tracking'
                    ]
                  })}
                  id="preview-learning-center-btn"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>Preview Learning Hub Mode</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300">Soon</span>
                </button>
              </div>

              {/* Course Key Information Meta Table */}
              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Course Metadata
                </h4>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-cyan-400" />
                    Level:
                  </span>
                  <span className="font-semibold text-slate-200">{course.level}</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-cyan-400" />
                    Category:
                  </span>
                  <span className="font-semibold text-cyan-300">{course.category}</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    Duration:
                  </span>
                  <span className="text-slate-400 italic">Information to be confirmed</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
                    Course Fee:
                  </span>
                  <span className="text-slate-400 italic">Information to be confirmed</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    Instructor:
                  </span>
                  <span className="text-slate-400 italic">Information to be confirmed</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-cyan-400" />
                    Certification:
                  </span>
                  <span className="text-slate-400 italic">Information to be confirmed</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400">Course ID:</span>
                  <span className="font-mono text-[11px] text-slate-400">{course.id}</span>
                </div>
              </div>

              {/* Prerequisites & Target Audience Box */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800/80 space-y-2.5 text-xs">
                <div>
                  <span className="font-semibold text-slate-300 block mb-0.5">Prerequisites:</span>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {course.prerequisites || 'Information to be confirmed'}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-900">
                  <span className="font-semibold text-slate-300 block mb-0.5">Target Audience:</span>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {course.targetAudience || 'Information to be confirmed'}
                  </p>
                </div>
              </div>

              {/* Bottom Back Button */}
              <button
                onClick={onBackToCourses}
                id="back-to-courses-sidebar-btn"
                className="w-full py-2 text-xs font-semibold text-slate-400 hover:text-cyan-300 transition-colors text-center block"
              >
                ← Back to All Courses
              </button>

            </div>

          </div>

        </div>

        {/* Related Maritime Courses Section */}
        {(() => {
          const relatedCourses = COURSES_CATALOG
            .filter(c => c.id !== course.id && (c.categoryId === course.categoryId || c.category === course.category))
            .slice(0, 3);
          const displayCourses = relatedCourses.length > 0
            ? relatedCourses
            : COURSES_CATALOG.filter(c => c.id !== course.id).slice(0, 3);

          if (displayCourses.length === 0) return null;

          return (
            <div className="mt-16 pt-12 border-t border-slate-800/80">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center space-x-2 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-1">
                    <Anchor className="w-4 h-4" />
                    <span>Explore Further</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk']">
                    Related Maritime Courses
                  </h3>
                </div>
                <button
                  onClick={onBackToCourses}
                  id="view-full-catalogue-from-details-btn"
                  className="inline-flex items-center space-x-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer self-start sm:self-auto"
                >
                  <span>View All 14 Courses</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {displayCourses.map((relCourse) => (
                  <CourseCard
                    key={`related-${relCourse.id}`}
                    course={relCourse}
                    onViewDetails={(c) => {
                      if (onSelectCourse) {
                        onSelectCourse(c);
                      } else {
                        onBackToCourses();
                      }
                    }}
                    idPrefix="related-course-card"
                  />
                ))}
              </div>
            </div>
          );
        })()}

      </div>
    </div>
  );
};
