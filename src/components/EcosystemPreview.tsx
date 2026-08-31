import React from 'react';
import { 
  BookMarked, 
  GraduationCap, 
  Navigation2, 
  CheckCircle2, 
  LineChart, 
  Award, 
  ArrowDown, 
  ArrowRight,
  Workflow,
  Compass
} from 'lucide-react';
import { ECOSYSTEM_STEPS } from '../data/sampleData';

export const EcosystemPreview: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookMarked': return <BookMarked className="w-5 h-5 text-cyan-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'Navigation2': return <Navigation2 className="w-5 h-5 text-cyan-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
      case 'LineChart': return <LineChart className="w-5 h-5 text-cyan-400" />;
      case 'Award': return <Award className="w-5 h-5 text-cyan-400" />;
      default: return <Workflow className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="ecosystem" className="py-20 bg-gradient-to-b from-slate-950 via-[#07172B] to-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 mb-3">
            <Workflow className="w-3.5 h-3.5 text-cyan-400" />
            <span>Integrated Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
            Learning Ecosystem Preview
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            The Marine Mind architecture connects structured curriculum to active practice, continuous assessments, and long-term mariner career development.
          </p>
        </div>

        {/* Visual Progression Path Flow */}
        <div className="relative">
          
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-600/20 via-cyan-400/40 to-blue-600/20 -translate-y-1/2 z-0" />

          {/* Grid of 6 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
            {ECOSYSTEM_STEPS.map((step, idx) => (
              <div
                key={step.stepNumber}
                id={`ecosystem-step-${step.stepNumber}`}
                className="relative flex flex-col p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/60 shadow-lg hover:shadow-xl hover:shadow-cyan-950/40 transition-all duration-300 group"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-300 text-xs font-bold font-['Space_Grotesk'] flex items-center justify-center">
                    0{step.stepNumber}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-800/60 text-slate-300 group-hover:text-cyan-300 transition-colors">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-base font-bold text-white tracking-tight font-['Space_Grotesk'] mb-1 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <span className="text-[11px] font-semibold text-cyan-400/90 uppercase tracking-wider mb-2">
                  {step.subtitle}
                </span>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Down arrow for mobile/tablet flow, right arrow for small visual touch */}
                {idx < ECOSYSTEM_STEPS.length - 1 && (
                  <div className="flex justify-center mt-3 pt-2 lg:hidden text-cyan-500/60">
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Long-term vision summary */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-cyan-900/30 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white flex items-center space-x-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Multi-Stage Development Roadmap</span>
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Stage 1 establishes the portal foundation. Future releases will sequentially introduce Discovery (Stage 2), Accounts (Stage 3), Learning Centre (Stage 4), Assessments (Stage 5), and Marine AI (Stage 6).
            </p>
          </div>
          <span className="shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800/60">
            Roadmap Integrated
          </span>
        </div>

      </div>
    </section>
  );
};
