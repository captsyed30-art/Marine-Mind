import React from 'react';
import { Eye, Clock, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onViewDetails: (course: Course) => void;
  idPrefix?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onViewDetails,
  idPrefix = 'course-card'
}) => {
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
      id={`${idPrefix}-${course.id}`}
      role="button"
      tabIndex={0}
      onClick={() => onViewDetails(course)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onViewDetails(course);
        }
      }}
      className="group rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/90 hover:border-cyan-500/60 shadow-lg hover:shadow-2xl hover:shadow-cyan-950/40 transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
    >
      {/* Top Media & Floating Badges */}
      <div>
        <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
          <img
            src={course.image}
            alt={`${course.title} thumbnail`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/40" />

          {/* Sample Course Pill & Status Badge */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 shadow-md">
              Sample Course
            </span>
            <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold border backdrop-blur-md ${getStatusBadge(course.status)}`}>
              {course.status}
            </span>
          </div>

          {/* Level Pill */}
          <div className="absolute top-3 right-3 z-10">
            <span className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold border ${getLevelBadge(course.level)} backdrop-blur-md shadow-sm`}>
              {course.level}
            </span>
          </div>

          {/* Category Pill Overlaid at Base */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-900/90 text-cyan-300 border border-cyan-800/50 backdrop-blur-md truncate max-w-[80%]">
              {course.category}
            </span>
            {course.modules && course.modules.length > 0 && (
              <span className="text-[10px] text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800 flex items-center gap-1 backdrop-blur-md">
                <Layers className="w-3 h-3 text-cyan-400" />
                {course.modules.length} Modules
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-['Space_Grotesk'] group-hover:text-cyan-300 transition-colors line-clamp-2 mb-2">
            {course.title}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
            {course.description}
          </p>

          {/* Objectives / Highlights Preview */}
          {course.learningObjectives && course.learningObjectives.length > 0 && (
            <div className="rounded-xl bg-slate-900/70 border border-slate-800/80 p-3 mb-2 space-y-1.5">
              <span className="text-[10px] font-semibold text-cyan-400/90 uppercase tracking-wider block">
                Sample Learning Objectives:
              </span>
              {course.learningObjectives.slice(0, 2).map((obj, idx) => (
                <div key={idx} className="flex items-start text-[11px] text-slate-300 truncate">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mr-1.5 mt-0.5" />
                  <span className="truncate">{obj}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 sm:p-6 pt-0 border-t border-slate-900">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(course);
          }}
          id={`view-details-btn-${course.id}`}
          className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-cyan-600 text-slate-200 hover:text-white border border-slate-700/80 hover:border-cyan-500 transition-all flex items-center justify-center space-x-2 group/btn shadow-md cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:text-white transition-colors" />
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 -translate-x-1 group-hover/btn:translate-x-0 transition-all text-white" />
        </button>
      </div>
    </div>
  );
};
