import React from 'react';
import { BookOpen, UserPlus, ArrowRight, Compass, Anchor } from 'lucide-react';
import { FutureFeatureModalState } from '../types';

interface CTASectionProps {
  onExploreCourses: () => void;
  onOpenStageModal: (state: FutureFeatureModalState) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onExploreCourses, onOpenStageModal }) => {
  const handleCreateAccount = () => {
    onOpenStageModal({
      isOpen: true,
      title: 'Student Account Registration',
      subtitle: 'Stage 3 Capability',
      stageName: 'Stage 3 Roadmap',
      description: 'Account registration, personalized student dashboards, course progress trackers, and mariner logbooks will be activated in Stage 3.',
      plannedHighlights: [
        'Personal learning profile & course enrollment manager',
        'Saved notes, bookmarks, and revision flashcard sets',
        'Training record history and progress milestones',
        'Early access updates as new maritime courses go live'
      ]
    });
  };

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      
      {/* Background Lighting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#07172B] via-slate-900 to-[#07172B] border border-cyan-500/30 p-8 sm:p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
          
          {/* Subtle Nautical Compass Graphic */}
          <div className="absolute -top-12 -left-12 opacity-10 pointer-events-none">
            <Compass className="w-48 h-48 text-cyan-400" />
          </div>
          <div className="absolute -bottom-12 -right-12 opacity-10 pointer-events-none">
            <Anchor className="w-48 h-48 text-cyan-400" />
          </div>

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 mb-6">
            <Anchor className="w-3.5 h-3.5 text-cyan-400" />
            <span>Embark on Maritime Training</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] leading-tight mb-4">
            Ready to Begin Your Maritime Learning Journey?
          </h2>

          {/* Supporting text */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Explore maritime training, build your knowledge and continue developing your skills with Marine Mind.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onExploreCourses}
              id="cta-explore-courses-btn"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-xl shadow-cyan-950 transition-all flex items-center justify-center space-x-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleCreateAccount}
              id="cta-create-account-btn"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-xs text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 shadow-lg shadow-black/40 transition-all flex items-center justify-center space-x-2"
            >
              <UserPlus className="w-4 h-4 text-cyan-400" />
              <span>Create Account</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
