import React from 'react';
import { 
  Anchor, 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Compass, 
  Globe2 
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission & About Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 border border-cyan-800/40 text-cyan-300">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>Platform Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              About Marine Mind
            </h2>

            {/* Suggested Message from Prompt */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              Marine Mind is being developed as a modern maritime learning environment that combines professional training knowledge with digital technology.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              The platform is designed to support students, instructors and maritime professionals through structured learning, practical knowledge, assessment and continuous development.
            </p>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 mb-2">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-['Space_Grotesk']">For Students</h3>
                <p className="text-[12px] text-slate-400 leading-snug">
                  Accessible, self-paced maritime knowledge and revision tools.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 mb-2">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-['Space_Grotesk']">For Instructors</h3>
                <p className="text-[12px] text-slate-400 leading-snug">
                  Structured curriculum modules and future assessment workflows.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-['Space_Grotesk']">For Mariners</h3>
                <p className="text-[12px] text-slate-400 leading-snug">
                  Continuous development and practical seamanship refinement.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Visual Feature Grid */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-[#071321] border border-cyan-900/40 p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center">
                  <Anchor className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">Marine Mind Foundation</h4>
                  <p className="text-[11px] text-cyan-400">Maritime Training &amp; Digital Learning</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span><strong>Maritime Centric:</strong> Tailored specifically to vessels, navigation, safety, and coastal seamanship.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span><strong>Practical Knowledge:</strong> Bridging theoretical concepts with real helm and deck understanding.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span><strong>Digital Accessibility:</strong> Optimized for laptops, tablets, and mobile devices across port and shore.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span><strong>Responsible Architecture:</strong> Clean foundation ready for future course discovery, logbooks, and AI tutor.</span>
                </li>
              </ul>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400">
                <strong>Platform Integrity:</strong> Marine Mind maintains high standards of educational content without making unverified regulatory certification claims.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
