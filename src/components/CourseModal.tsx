import React from 'react';
import { X, BookOpen, Layers, Info, CheckCircle2, ShieldAlert, Award, Compass, Clock, Sparkles } from 'lucide-react';
import { Course } from '../types';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnrollClick: (course: Course) => void;
  onOpenFullDetails?: (course: Course) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ 
  course, 
  onClose, 
  onEnrollClick,
  onOpenFullDetails 
}) => {
  if (!course) return null;

  const getLevelBadge = (level: string) => {
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

  const getStatusBadge = (status: string) => {
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

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md transition-all animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      id="course-preview-modal"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 shadow-2xl text-slate-100 scrollbar-thin"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          id="close-course-modal-button"
          className="absolute top-4 right-4 z-20 rounded-xl p-2 text-slate-400 hover:text-white bg-slate-950/80 hover:bg-slate-800 border border-slate-800 transition-colors"
          aria-label="Close course details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-52 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden rounded-t-2xl bg-slate-900">
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          
          <div className="absolute top-4 left-6 flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 shadow-md">
              Sample Course
            </span>
            <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-semibold border backdrop-blur-md ${getStatusBadge(course.status)}`}>
              {course.status}
            </span>
          </div>

          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-cyan-950/90 text-cyan-300 border border-cyan-800/60 backdrop-blur-md">
              {course.category}
            </span>
            <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold border backdrop-blur-md ${getLevelBadge(course.level)}`}>
              Level: {course.level}
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              {course.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Educational Disclaimer Notice */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 flex items-start space-x-3 text-xs text-amber-200/90">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-300 block mb-0.5">Sample Course Specimen:</span>
              This curriculum structure is a demonstration module for the Marine Mind platform. No government approval, regulatory certification, or licensing compliance is claimed.
            </div>
          </div>

          {/* Learning Objectives */}
          {course.learningObjectives && course.learningObjectives.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Sample Learning Objectives
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {course.learningObjectives.map((obj, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modules Breakdown */}
          {course.modules && course.modules.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-white">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Course Modules — Sample Structure ({course.modules.length})</span>
                </div>
              </div>
              <div className="space-y-2.5">
                {course.modules.map((m) => (
                  <div key={m.id} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-white font-['Space_Grotesk']">
                        Module {m.number}: {m.title}
                      </span>
                      <span className="text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800">
                        {m.lessons.length} Lessons
                      </span>
                    </div>
                    {m.description && <p className="text-[11px] text-slate-400 mb-2">{m.description}</p>}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {m.lessons.map((lesson, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-950/80 text-slate-300 border border-slate-800">
                          {lesson}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            {onOpenFullDetails ? (
              <button
                onClick={() => {
                  onClose();
                  onOpenFullDetails(course);
                }}
                id="modal-open-full-page-btn"
                className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold underline"
              >
                Open Full Dedicated Course Page →
              </button>
            ) : (
              <div className="text-xs text-slate-400 flex items-center">
                <Info className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                <span>Stage 2 Course Discovery Specimen</span>
              </div>
            )}

            <button
              onClick={() => onEnrollClick(course)}
              id="course-modal-stage-action-btn"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all flex items-center justify-center space-x-1.5 shadow-lg shadow-cyan-950 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Enrol / Register Interest</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
