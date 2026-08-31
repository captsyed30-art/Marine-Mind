import React, { useState } from 'react';
import { 
  BookOpen, 
  Layers, 
  Search, 
  SlidersHorizontal, 
  ArrowRight,
  Shield,
  Eye,
  Sparkles,
  Compass
} from 'lucide-react';
import { COURSES_CATALOG, TRAINING_CATEGORIES } from '../data/sampleData';
import { CourseCard } from './CourseCard';
import { Course } from '../types';

interface FeaturedCoursesProps {
  selectedCategoryId: string | null;
  onClearCategoryFilter: () => void;
  onSelectCategoryFilter: (catId: string) => void;
  onViewCourse: (course: Course) => void;
  onExploreAllCourses?: () => void;
}

export const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({
  selectedCategoryId,
  onClearCategoryFilter,
  onSelectCategoryFilter,
  onViewCourse,
  onExploreAllCourses,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('ALL');

  // Featured courses filter
  const filteredCourses = COURSES_CATALOG.filter((course) => {
    const matchesCategory = !selectedCategoryId || course.categoryId === selectedCategoryId;
    const matchesLevel = levelFilter === 'ALL' || course.level === levelFilter;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <section id="courses" className="py-20 bg-slate-900/60 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 mb-2">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Curriculum Specimen</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              Featured Courses
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl leading-relaxed">
              Explore sample maritime training modules built on practical principles, clear instructional design, and seamanship foundations.
            </p>
          </div>

          {/* Sample Badge Notice & Explore All Link */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Sample / Demo Courses</span>
            </div>
            {onExploreAllCourses && (
              <button
                onClick={onExploreAllCourses}
                id="homepage-browse-catalogue-btn"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-950 hover:bg-cyan-900 border border-cyan-700/60 text-cyan-300 transition-colors group cursor-pointer"
              >
                <span>Full Catalogue ({COURSES_CATALOG.length})</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-md mb-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search sample courses by title, topic, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="course-search-input"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category & Level Dropdowns */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center space-x-1.5 text-xs text-slate-400">
              <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Category:</span>
            </div>
            
            <select
              value={selectedCategoryId || 'ALL'}
              onChange={(e) => {
                if (e.target.value === 'ALL') {
                  onClearCategoryFilter();
                } else {
                  onSelectCategoryFilter(e.target.value);
                }
              }}
              id="category-filter-select"
              className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 cursor-pointer"
            >
              <option value="ALL">All Categories ({COURSES_CATALOG.length})</option>
              {TRAINING_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>

            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              id="level-filter-select"
              className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 cursor-pointer"
            >
              <option value="ALL">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Active Filter Chips */}
        {(selectedCategoryId || levelFilter !== 'ALL' || searchQuery) && (
          <div className="flex items-center flex-wrap gap-2 mb-6 text-xs">
            <span className="text-slate-400">Active filters:</span>
            {selectedCategoryId && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800">
                Category: {TRAINING_CATEGORIES.find(c => c.id === selectedCategoryId)?.title}
                <button onClick={onClearCategoryFilter} className="ml-1.5 hover:text-white">×</button>
              </span>
            )}
            {levelFilter !== 'ALL' && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                Level: {levelFilter}
                <button onClick={() => setLevelFilter('ALL')} className="ml-1.5 hover:text-white">×</button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                Query: "{searchQuery}"
                <button onClick={() => setSearchQuery('')} className="ml-1.5 hover:text-white">×</button>
              </span>
            )}
            <button
              onClick={() => {
                onClearCategoryFilter();
                setLevelFilter('ALL');
                setSearchQuery('');
              }}
              className="text-cyan-400 hover:underline ml-2"
            >
              Reset all
            </button>
          </div>
        )}

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onViewDetails={onViewCourse}
                idPrefix="featured-course-card"
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-slate-950 border border-slate-800">
            <p className="text-slate-400 text-sm">No sample courses found matching your filter criteria.</p>
            <button
              onClick={() => {
                onClearCategoryFilter();
                setLevelFilter('ALL');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-cyan-400 hover:underline"
            >
              Reset search and filters
            </button>
          </div>
        )}

        {/* Explore All Bottom CTA */}
        {onExploreAllCourses && (
          <div className="mt-12 text-center">
            <button
              onClick={onExploreAllCourses}
              id="view-all-courses-bottom-btn"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-white border border-cyan-800/50 hover:border-cyan-500 transition-all shadow-md cursor-pointer"
            >
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Open Complete Courses Catalogue ({COURSES_CATALOG.length} Courses)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
