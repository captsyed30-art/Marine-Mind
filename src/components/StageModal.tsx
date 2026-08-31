import React from 'react';
import { X, Sparkles, Compass, ArrowRight, ShieldCheck } from 'lucide-react';
import { FutureFeatureModalState } from '../types';

interface StageModalProps {
  modalState: FutureFeatureModalState;
  onClose: () => void;
}

export const StageModal: React.FC<StageModalProps> = ({ modalState, onClose }) => {
  if (!modalState.isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-all animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      id="stage-notice-modal"
    >
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-cyan-800/40 bg-gradient-to-b from-slate-900 via-slate-900 to-[#071321] p-6 sm:p-8 shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative grid/compass background */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
              <Compass className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
              {modalState.stageName}
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
              Future Module
            </span>
          </div>
          <button
            onClick={onClose}
            id="close-stage-modal-button"
            className="rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
          {modalState.title}
        </h3>
        
        {modalState.subtitle && (
          <p className="text-xs font-medium text-cyan-400/90 uppercase tracking-wider mb-3">
            {modalState.subtitle}
          </p>
        )}

        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {modalState.description}
        </p>

        {modalState.plannedHighlights && modalState.plannedHighlights.length > 0 && (
          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 mb-6">
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-200 mb-2.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Planned Capabilities for this Module</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              {modalState.plannedHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-cyan-400 mr-2">›</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
          <div className="flex items-center text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 mr-1 text-emerald-400" />
            <span>Stage 1 Portal Foundation Active</span>
          </div>
          <button
            onClick={onClose}
            id="dismiss-stage-modal-btn"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-colors shadow-lg shadow-cyan-950"
          >
            <span>Understood</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
