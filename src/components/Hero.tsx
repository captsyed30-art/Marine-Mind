import React from 'react';
import { 
  Compass, 
  ArrowRight, 
  BookOpen, 
  ShieldCheck, 
  Navigation, 
  Anchor, 
  Waves,
  Sparkles
} from 'lucide-react';
import { FutureFeatureModalState } from '../types';

interface HeroProps {
  onExploreCourses: () => void;
  onStartLearning: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCourses, onStartLearning }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#040D18] via-[#07172B] to-[#040D18]"
    >
      {/* Maritime Nautical Backdrop Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep ocean luminous gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute -top-24 right-10 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[100px]" />
        
        {/* Subtle decorative navigation compass ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full border border-cyan-500/10 opacity-40 animate-pulse pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[580px] h-[400px] sm:h-[580px] rounded-full border border-cyan-400/5 pointer-events-none" />

        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', 
            backgroundSize: '32px 32px' 
          }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Top Stage & Ecosystem Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-8 backdrop-blur-md shadow-lg shadow-cyan-950/50">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-semibold text-cyan-200">Stage 2 Courses &amp; Discovery</span>
          <span className="text-cyan-600">•</span>
          <span className="text-cyan-300">Maritime Training &amp; Digital Learning Ecosystem</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] leading-[1.1] mb-6 max-w-4xl mx-auto">
          Learn. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">Navigate.</span> Master.
        </h1>

        {/* Supporting Heading */}
        <h2 className="text-lg sm:text-2xl font-semibold text-slate-200 tracking-normal mb-6 max-w-3xl mx-auto">
          Professional Maritime Training for the Next Generation of Mariners
        </h2>

        {/* Supporting Paragraph */}
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
          Marine Mind brings maritime learning, practical knowledge and digital training together in one modern learning environment.
        </p>

        {/* Primary and Secondary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-md mx-auto mb-16">
          <button
            onClick={onExploreCourses}
            id="hero-explore-courses-btn"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-xl shadow-cyan-950/80 hover:shadow-cyan-800/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-cyan-100" />
            <span>Explore Courses</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={onStartLearning}
            id="hero-start-learning-btn"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 shadow-lg shadow-black/40 hover:text-white transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-cyan-400" />
            <span>Start Learning</span>
          </button>
        </div>

        {/* Quick Highlights / Maritime Trust Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80 text-left">
          
          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-cyan-400 mb-1">
              <Anchor className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-200 font-['Space_Grotesk']">Practical Skills</span>
            </div>
            <p className="text-[12px] text-slate-400 leading-snug">Seamanship, vessel operations, and boat handling fundamentals.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-cyan-400 mb-1">
              <Compass className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-200 font-['Space_Grotesk']">Navigation</span>
            </div>
            <p className="text-[12px] text-slate-400 leading-snug">Chartwork, positioning concepts, and waterway rules.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-cyan-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-200 font-['Space_Grotesk']">Safety First</span>
            </div>
            <p className="text-[12px] text-slate-400 leading-snug">Emergency procedures, radio communications, and safety drills.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-cyan-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-200 font-['Space_Grotesk']">Digital Portal</span>
            </div>
            <p className="text-[12px] text-slate-400 leading-snug">Modern web environment built for continuous mariner growth.</p>
          </div>

        </div>

      </div>
    </section>
  );
};
