import React from 'react';
import { 
  Sparkles, 
  Bot, 
  ArrowRight, 
  HelpCircle, 
  BookOpen, 
  ShieldAlert, 
  MessageSquareCode,
  Compass
} from 'lucide-react';
import { FutureFeatureModalState } from '../types';

interface MarineAIPreviewProps {
  onOpenStageModal: (state: FutureFeatureModalState) => void;
}

export const MarineAIPreview: React.FC<MarineAIPreviewProps> = ({ onOpenStageModal }) => {
  const handleExploreAI = () => {
    onOpenStageModal({
      isOpen: true,
      title: 'Marine Mind AI Learning Assistant',
      subtitle: 'Stage 6 Future Capability',
      stageName: 'Stage 6 Roadmap',
      description: 'Marine Mind AI is currently in architectural design for Stage 6. It is being developed to assist students with maritime concept breakdowns, terminology explanations, and revision study sessions.',
      plannedHighlights: [
        'Explanations for navigational rules, buoyage, and seamanship terms',
        'Study revision question generation based on course modules',
        'Formula and chartwork walkthrough assistance',
        'Strictly educational assistance — never replaces official statutory or regulatory guidance'
      ]
    });
  };

  return (
    <section id="marine-ai" className="py-20 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      
      {/* Decorative Cyan / Blue Aura */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-[#0a1b30] to-slate-950 border border-cyan-800/40 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Subtle watermark element */}
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
            <Compass className="w-80 h-80 text-cyan-400" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Future Module Preview • Stage 6</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-['Space_Grotesk'] leading-tight">
                Meet Marine Mind AI
              </h2>

              {/* Required Exact Supporting Text */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                An intelligent learning assistant designed to support maritime students with explanations, revision and learning assistance.
              </p>

              {/* Planned Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start space-x-2.5 text-xs text-slate-300">
                  <div className="p-1 rounded bg-cyan-950 text-cyan-400 mt-0.5">
                    <MessageSquareCode className="w-3.5 h-3.5" />
                  </div>
                  <span>Concept clarification &amp; terminology definitions</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs text-slate-300">
                  <div className="p-1 rounded bg-cyan-950 text-cyan-400 mt-0.5">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <span>Interactive study revision &amp; practice flashcards</span>
                </div>
              </div>

              {/* Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleExploreAI}
                  id="explore-marine-ai-btn"
                  className="px-6 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-950 transition-all flex items-center space-x-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Explore Marine AI</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
                <span className="text-xs text-slate-400 font-medium">
                  Scheduled for Stage 6 Development
                </span>
              </div>

              {/* Non-Regulatory Notice */}
              <div className="flex items-start space-x-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 max-w-xl">
                <ShieldAlert className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Educational Scope Notice:</strong> Marine Mind AI serves solely as an educational study companion and will not provide official statutory, regulatory, or legal licensing counsel.
                </span>
              </div>

            </div>

            {/* Right Preview Card Mockup */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950/80 border border-cyan-900/40 p-5 shadow-2xl backdrop-blur-md space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Marine Mind AI Tutor</div>
                      <div className="text-[10px] text-cyan-400">Concept Revision Mode (Preview)</div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">Specimen</span>
                </div>

                {/* Simulated Chat Dialogue */}
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/90 text-slate-300 border border-slate-800">
                    <span className="text-[10px] text-cyan-400 font-semibold block mb-1">Mariner Student Query:</span>
                    "What is the difference between true bearing and magnetic bearing?"
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-slate-200">
                    <span className="text-[10px] text-cyan-300 font-semibold block mb-1">Marine Mind AI:</span>
                    "True bearing is referenced to True Geographic North (the Earth's rotational axis), while Magnetic bearing is referenced to Magnetic North indicated by your vessel's compass. The angular difference between them is <em>Magnetic Variation</em>."
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-slate-400 italic">
                    AI learning assistant preview • Full module in Stage 6
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
