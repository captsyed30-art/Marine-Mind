import React from 'react';
import { 
  Wrench, 
  Workflow, 
  Laptop, 
  TrendingUp, 
  BookOpen, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { WHY_MARINE_MIND_FEATURES } from '../data/sampleData';

export const WhyMarineMind: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-6 h-6 text-cyan-400" />;
      case 'Workflow': return <Workflow className="w-6 h-6 text-cyan-400" />;
      case 'Laptop': return <Laptop className="w-6 h-6 text-cyan-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-cyan-400" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-cyan-400" />;
      default: return <BookOpen className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-marine-mind" className="py-20 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      
      {/* Subtle decorative glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Platform Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
            Why Marine Mind?
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Built from the ground up for modern maritime students and instructors, emphasizing practical maritime clarity, organized learning pathways, and modern digital study tools.
          </p>
        </div>

        {/* Feature Cards Grid (5 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_MARINE_MIND_FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              id={`why-card-${feature.id}`}
              className={`rounded-2xl p-6 sm:p-7 bg-slate-900/40 border border-slate-800/90 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between group ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/40 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-cyan-900/50 transition-all">
                  {getFeatureIcon(feature.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight font-['Space_Grotesk'] mb-2 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Verified Maritime Focus */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center space-x-2 text-xs text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Foundational training value</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
