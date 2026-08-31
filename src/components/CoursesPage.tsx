import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  BookOpen, 
  ArrowUpDown, 
  Layers, 
  RotateCcw, 
  ShieldAlert, 
  Sparkles,
  ChevronRight,
  Filter,
  CheckCircle2,
  X
} from 'lucide-react';
import { CourseCard } from './CourseCard';
import { COURSES_CATALOG, TRAINING_CATEGORIES } from '../data/sampleData';
import { Course, CourseLevel, CourseStatus } from '../types';

interface CoursesPageProps {
  initialCategoryId?: string | null;
  onViewCourse: (course: Course) => void;
  onNavigateHome: () => void;
}

type SortOption = 'featured' | 'alphabetical' | 'newest';

export const CoursesPage: React.FC<CoursesPageProps> = ({
  initialCategoryId = null,
  onViewCourse,
  onNavigateHome
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryId || 'ALL');
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  // Synchronize category selection when navigated from external components (e.g. homepage categories)
  useEffect(() => {
    if (initialCategoryId) {
      setSelectedCategory(initialCategoryId);
    } else {
      setSelectedCategory('ALL');
    }
  }, [initialCategoryId]);

  // Combined Filter logic: Search AND Category AND Level AND Status AND Sorting
  const filteredCourses = useMemo(() => {
    return COURSES_CATALOG.filter((course) => {
      // 1. Category match (supports ID, title, case-insensitive)
      const matchesCategory = 
        selectedCategory === 'ALL' || 
        course.categoryId === selectedCategory ||
        course.categoryId.toLowerCase() === selectedCategory.toLowerCase() ||
        course.category.toLowerCase() === selectedCategory.toLowerCase();

      // 2. Level match
      const matchesLevel = 
        selectedLevel === 'ALL' || 
        course.level === selectedLevel;

      // 3. Status match
      const matchesStatus = 
        selectedStatus === 'ALL' || 
        course.status === selectedStatus;

      // 4. Instant Case-Insensitive Search match across all relevant course metadata
      const q = searchQuery.toLowerCase().trim();
      let matchesSearch = true;
      if (q) {
        const queryTerms = q.split(/\s+/).filter(Boolean);
        // Build comprehensive searchable corpus for this course
        const searchableText = [
          course.title,
          course.description,
          course.category,
          course.categoryId,
          course.level,
          course.status,
          course.targetAudience || '',
          course.prerequisites || '',
          ...(course.learningObjectives || []),
          ...(course.whatToExpect || []),
          ...(course.sampleOutline || []),
          ...(course.modules?.map(m => `${m.title} ${m.description} ${m.lessons.join(' ')}`) || [])
        ].join(' ').toLowerCase();

        // Every typed word should match somewhere in the course data
        matchesSearch = queryTerms.every(term => searchableText.includes(term));
      }

      // Compound AND logic
      return matchesCategory && matchesLevel && matchesStatus && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'alphabetical') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'newest') {
        const dateA = a.createdDate || '2026-01-01';
        const dateB = b.createdDate || '2026-01-01';
        return dateB.localeCompare(dateA);
      }
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedLevel, selectedStatus, sortBy]);

  const hasActiveFilters = 
    selectedCategory !== 'ALL' || 
    selectedLevel !== 'ALL' || 
    selectedStatus !== 'ALL' || 
    searchQuery.trim() !== '';

  const handleResetFilters = () => {
    setSelectedCategory('ALL');
    setSelectedLevel('ALL');
    setSelectedStatus('ALL');
    setSearchQuery('');
    setSortBy('featured');
  };

  const getCategoryName = (idOrTitle: string) => {
    const found = TRAINING_CATEGORIES.find(
      c => c.id === idOrTitle || c.title.toLowerCase() === idOrTitle.toLowerCase()
    );
    return found ? found.title : idOrTitle;
  };

  return (
    <div id="courses-catalogue-page" className="pt-24 pb-20 bg-slate-950 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
          <button 
            onClick={onNavigateHome}
            className="hover:text-cyan-300 transition-colors"
            id="courses-breadcrumb-home-btn"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-400 font-medium">Courses Catalogue</span>
        </nav>

        {/* Page Heading & Supporting Statement */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Stage 2 — Course Discovery</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              Explore Maritime Training
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Discover courses and learning opportunities designed to build maritime knowledge, practical skills and professional development.
            </p>
          </div>

          {/* Sample Specimen Banner */}
          <div className="flex items-center space-x-2.5 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium self-start md:self-auto shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Demonstration / Sample Catalogue</span>
          </div>
        </div>

        {/* Search, Filter & Sorting Hub Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl mb-8 space-y-4">
          
          {/* Row 1: Search Input */}
          <div className="relative">
            <label htmlFor="courses-search-box" className="sr-only">
              Search maritime courses
            </label>
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="courses-search-box"
              type="text"
              placeholder="Search maritime courses by title, topic, keyword or level..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white p-1 rounded-md bg-slate-800"
                aria-label="Clear search text"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Row 2: Filter Selects & Sorting */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            
            {/* Category Filter */}
            <div>
              <label htmlFor="category-select" className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Category
              </label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 cursor-pointer transition-colors"
              >
                <option value="ALL">All Categories ({COURSES_CATALOG.length})</option>
                {TRAINING_CATEGORIES.map((cat) => {
                  const count = COURSES_CATALOG.filter(c => c.categoryId === cat.id).length;
                  return (
                    <option key={cat.id} value={cat.id}>
                      {cat.title} {count > 0 ? `(${count})` : ''}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <label htmlFor="level-select" className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Level
              </label>
              <select
                id="level-select"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 cursor-pointer transition-colors"
              >
                <option value="ALL">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label htmlFor="status-select" className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Course Status
              </label>
              <select
                id="status-select"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 cursor-pointer transition-colors"
              >
                <option value="ALL">All Statuses</option>
                <option value="Available">Available</option>
                <option value="Coming Soon">Coming Soon</option>
                <option value="Draft">Draft</option>
              </select>
            </div>

            {/* Sorting Option */}
            <div>
              <label htmlFor="sort-select" className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Sort By
              </label>
              <div className="relative">
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 cursor-pointer transition-colors"
                >
                  <option value="featured">Featured First</option>
                  <option value="alphabetical">A–Z (Alphabetical)</option>
                  <option value="newest">Newest Added</option>
                </select>
              </div>
            </div>

          </div>

          {/* Quick Category Filter Pills */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            <span className="text-[11px] text-slate-400 font-medium shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3 text-cyan-400" />
              Quick:
            </span>
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium shrink-0 transition-all ${
                selectedCategory === 'ALL'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              All ({COURSES_CATALOG.length})
            </button>
            {TRAINING_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium shrink-0 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

        </div>

        {/* Results Bar: Count & Active Filter Tags */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center space-x-2 text-sm text-slate-300">
            <span className="font-semibold text-white">
              Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'sample course' : 'sample courses'}
            </span>
            {hasActiveFilters && (
              <span className="text-xs text-slate-400">
                (filtered from {COURSES_CATALOG.length} total)
              </span>
            )}
          </div>

          {/* Active Filter Chips */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {selectedCategory !== 'ALL' && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800">
                  Category: {getCategoryName(selectedCategory)}
                  <button 
                    onClick={() => setSelectedCategory('ALL')} 
                    className="ml-1.5 text-cyan-400 hover:text-white"
                    aria-label="Remove category filter"
                  >
                    ×
                  </button>
                </span>
              )}

              {selectedLevel !== 'ALL' && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  Level: {selectedLevel}
                  <button 
                    onClick={() => setSelectedLevel('ALL')} 
                    className="ml-1.5 text-slate-400 hover:text-white"
                    aria-label="Remove level filter"
                  >
                    ×
                  </button>
                </span>
              )}

              {selectedStatus !== 'ALL' && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  Status: {selectedStatus}
                  <button 
                    onClick={() => setSelectedStatus('ALL')} 
                    className="ml-1.5 text-slate-400 hover:text-white"
                    aria-label="Remove status filter"
                  >
                    ×
                  </button>
                </span>
              )}

              {searchQuery && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  Query: "{searchQuery}"
                  <button 
                    onClick={() => setSearchQuery('')} 
                    className="ml-1.5 text-slate-400 hover:text-white"
                    aria-label="Remove search query"
                  >
                    ×
                  </button>
                </span>
              )}

              <button
                onClick={handleResetFilters}
                id="reset-all-filters-btn"
                className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center space-x-1 ml-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset all</span>
              </button>
            </div>
          )}
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onViewDetails={onViewCourse}
                idPrefix="catalogue-card"
              />
            ))}
          </div>
        ) : (
          /* Empty / No Results State */
          <div className="p-12 sm:p-16 text-center rounded-3xl bg-slate-900/60 border border-slate-800 max-w-2xl mx-auto my-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
              <Search className="w-8 h-8" />
            </div>
            
            <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
              {selectedCategory !== 'ALL' && !searchQuery
                ? 'No courses are currently available in this category.'
                : 'No courses found. Try another search or filter.'}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
              We couldn't find any maritime sample courses matching your current search parameters. Try adjusting or clearing your filters.
            </p>

            <div className="pt-3">
              <button
                onClick={handleResetFilters}
                id="empty-state-reset-filters-btn"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-all inline-flex items-center space-x-2 shadow-lg shadow-cyan-950"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Search & Filters</span>
              </button>
            </div>
          </div>
        )}

        {/* Platform Compliance Disclaimer Banner */}
        <div className="mt-14 p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="text-cyan-400 font-semibold">Educational Specimen Disclaimer:</span> All courses presented in this catalogue are educational demonstration modules designed to structure learning pathways. They do not constitute statutory qualifications or government-mandated licence requirements unless verified in future stages.
          </p>
        </div>

      </div>
    </div>
  );
};
