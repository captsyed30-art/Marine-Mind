import React from 'react';
import { Anchor, Compass, Shield, ExternalLink, Sparkles } from 'lucide-react';
import { FutureFeatureModalState } from '../types';
import { TRAINING_CATEGORIES } from '../data/sampleData';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateCourses: () => void;
  onSelectCategory: (categoryId: string) => void;
  onOpenStageModal: (state: FutureFeatureModalState) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigateHome,
  onNavigateCourses,
  onSelectCategory,
  onOpenStageModal 
}) => {
  const handleLegalModal = (title: string) => {
    onOpenStageModal({
      isOpen: true,
      title: `${title} (Placeholder)`,
      subtitle: 'Legal Documentation Placeholder',
      stageName: 'Stage 2 Foundation',
      description: `Formal ${title.toLowerCase()} documents and terms of service will be formally populated when the production student registration and course access portals are deployed.`,
      plannedHighlights: [
        'Data protection and student record confidentiality',
        'Maritime content copyright and licensing standards',
        'Platform usage policies and acceptable use guidelines'
      ]
    });
  };

  const handleFutureNav = (title: string, stageName: string, description: string) => {
    onOpenStageModal({
      isOpen: true,
      title,
      stageName,
      description,
      plannedHighlights: [
        'Module activation in corresponding roadmap release',
        'Seamless integration with student training records',
        'Mobile and offline learning synchronization'
      ]
    });
  };

  return (
    <footer id="main-footer" className="bg-[#030912] border-t border-cyan-950/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Column (Span 2 on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center">
                <Anchor className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight font-['Space_Grotesk']">
                  MARINE<span className="text-cyan-400 font-extrabold">MIND</span>
                </span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                  Maritime Training &amp; Digital Learning Ecosystem
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Marine Mind is a professional digital platform for maritime education, training, learning and assessment. Stage 2 Courses &amp; Course Discovery.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-[11px] text-slate-500">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>Dedicated to the next generation of mariners</span>
            </div>
          </div>

          {/* Platform Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Space_Grotesk'] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  onClick={onNavigateHome}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateCourses}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Courses Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFutureNav('Learning Centre', 'Stage 4 Roadmap', 'The Learning Centre is an interactive learning environment for students featuring multimedia course modules.')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Learning Centre
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFutureNav('Assessments Engine', 'Stage 5 Roadmap', 'Structured knowledge evaluations, scenario checks, and formative assessments.')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Assessments
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigateHome();
                    setTimeout(() => {
                      document.getElementById('marine-ai')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center space-x-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Marine AI</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigateHome();
                    setTimeout(() => {
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigateHome();
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Training Categories Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Space_Grotesk'] mb-4">
              Training Domains
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {TRAINING_CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <button 
                    onClick={() => onSelectCategory(cat.id)}
                    className="hover:text-cyan-300 transition-colors text-left truncate max-w-full"
                  >
                    {cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Modules & Disclaimers */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Space_Grotesk'] mb-4">
              Platform Status
            </h4>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px]">
                <div className="font-semibold text-cyan-300">Stage 2 Active</div>
                <div className="text-slate-400 mt-1">Full Course Discovery catalogue, modular outlines, multi-attribute filtering &amp; details.</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px]">
                <div className="font-semibold text-slate-300">No Regulatory Claims</div>
                <div className="text-slate-400 mt-1">Educational specimen portal for maritime training architecture.</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Placeholders */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Marine Mind. All rights reserved.</span>
            <span>•</span>
            <span className="text-cyan-400">Maritime Training &amp; Digital Learning Ecosystem</span>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => handleLegalModal('Privacy Policy')}
              id="footer-privacy-policy-link"
              className="hover:text-cyan-300 transition-colors"
            >
              Privacy Policy (Placeholder)
            </button>
            <button
              onClick={() => handleLegalModal('Terms of Service')}
              id="footer-terms-link"
              className="hover:text-cyan-300 transition-colors"
            >
              Terms of Use (Placeholder)
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
