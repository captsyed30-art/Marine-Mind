import React from 'react';
import { 
  Anchor, 
  Ship, 
  Compass, 
  Navigation, 
  LifeBuoy, 
  Radio, 
  Scale, 
  GraduationCap, 
  ChevronRight, 
  Layers,
  Sparkles,
  Award,
  Wrench,
  Waves,
  Shield,
  Activity
} from 'lucide-react';
import { TRAINING_CATEGORIES } from '../data/sampleData';
import { TrainingCategory } from '../types';

interface TrainingCategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export const TrainingCategories: React.FC<TrainingCategoriesProps> = ({ onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6 text-cyan-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-cyan-400" />;
      case 'Anchor': return <Anchor className="w-6 h-6 text-cyan-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-cyan-400" />;
      case 'Award': return <Award className="w-6 h-6 text-cyan-400" />;
      case 'Ship': return <Ship className="w-6 h-6 text-cyan-400" />;
      case 'Radio': return <Radio className="w-6 h-6 text-cyan-400" />;
      case 'LifeBuoy': return <LifeBuoy className="w-6 h-6 text-cyan-400" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-cyan-400" />;
      case 'Waves': return <Waves className="w-6 h-6 text-cyan-400" />;
      case 'Shield': return <Shield className="w-6 h-6 text-cyan-400" />;
      case 'Navigation': return <Navigation className="w-6 h-6 text-cyan-400" />;
      case 'Scale': return <Scale className="w-6 h-6 text-cyan-400" />;
      default: return <Anchor className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="categories" className="py-20 bg-slate-950 relative border-t border-slate-900">
      
      {/* Background Ambience */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Platform Curriculum Areas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
            Explore Maritime Training
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            General platform training domains designed to structure practical knowledge, boat handling, safety disciplines, and navigation concepts.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {TRAINING_CATEGORIES.map((category) => (
            <div
              key={category.id}
              id={`category-card-${category.id}`}
              onClick={() => onSelectCategory(category.id)}
              className="group relative rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between cursor-pointer bg-slate-900/40 hover:bg-slate-900/80 border-slate-800 hover:border-cyan-800/60 hover:shadow-lg"
            >
                <div>
                  {/* Card Header with Icon & Emoji */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/40 flex items-center justify-center group-hover:scale-105 group-hover:bg-cyan-900/50 transition-all">
                      {getIcon(category.iconName)}
                    </div>
                    <span className="text-2xl" role="img" aria-label={category.title}>
                      {category.emoji}
                    </span>
                  </div>

                  {/* Category Title */}
                  <h3 className="text-lg font-bold text-white tracking-tight font-['Space_Grotesk'] mb-2 group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {category.description}
                  </p>

                  {/* Sample topics preview */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider block">
                      Sample Domain Focus:
                    </span>
                    <ul className="space-y-1 text-[11px] text-slate-400">
                      {category.topicsSample.slice(0, 2).map((topic, i) => (
                        <li key={i} className="flex items-center truncate">
                          <span className="text-cyan-500 mr-1.5">•</span>
                          <span className="truncate">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCategory(category.id);
                    }}
                    id={`filter-courses-cat-${category.id}`}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 group/btn cursor-pointer"
                  >
                    <span>View Related Courses</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
          ))}
        </div>

        {/* Regulatory/Platform Disclaimer Banner */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-400">
            <span className="text-cyan-400 font-semibold">Platform Notice:</span> Categories shown are general platform learning classifications for organizing maritime educational content and do not imply specific governmental, national, or statutory licensing requirements.
          </p>
        </div>

      </div>
    </section>
  );
};
