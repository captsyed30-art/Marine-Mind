import React, { useState, useEffect } from 'react';
import { 
  Anchor, 
  Menu, 
  X, 
  Compass, 
  BookOpen, 
  Sparkles, 
  CheckSquare, 
  LogIn, 
  UserPlus, 
  ChevronRight,
  Shield
} from 'lucide-react';
import { FutureFeatureModalState } from '../types';

interface HeaderProps {
  currentView: 'home' | 'courses' | 'course-details';
  onNavigateHome: () => void;
  onNavigateCourses: () => void;
  onOpenStageModal: (state: FutureFeatureModalState) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentView,
  onNavigateHome,
  onNavigateCourses,
  onOpenStageModal 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeNavClick = (e: React.MouseEvent, targetId?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigateHome();
    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCoursesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigateCourses();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFutureNav = (title: string, stageName: string, description: string, highlights: string[]) => {
    setMobileMenuOpen(false);
    onOpenStageModal({
      isOpen: true,
      title,
      stageName,
      description,
      plannedHighlights: highlights
    });
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || currentView !== 'home'
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-cyan-950/60 shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a 
            href="#home" 
            onClick={(e) => handleHomeNavClick(e)}
            id="brand-logo-link"
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-blue-700 to-indigo-800 p-0.5 shadow-md shadow-cyan-950 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Anchor className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-['Space_Grotesk']">
                  MARINE<span className="text-cyan-400 font-extrabold">MIND</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-800/60 text-cyan-300">
                  Stage 2
                </span>
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                Maritime Training Ecosystem
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            <button
              onClick={(e) => handleHomeNavClick(e)}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                currentView === 'home' 
                  ? 'text-cyan-300 bg-slate-900/90 border border-cyan-900/50' 
                  : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-900/60'
              }`}
              id="nav-home-btn"
            >
              Home
            </button>
            <button
              onClick={handleCoursesClick}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                currentView === 'courses' || currentView === 'course-details'
                  ? 'text-cyan-300 bg-slate-900/90 border border-cyan-900/50' 
                  : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-900/60'
              }`}
              id="nav-courses-btn"
            >
              Courses
            </button>
            <button
              onClick={() => handleFutureNav(
                'Learning Centre Module',
                'Stage 4 Roadmap',
                'The Learning Centre is an interactive learning environment for students featuring multimedia course modules, digital maritime study notes, and video procedures.',
                ['Interactive syllabus browser', 'Digital maritime diagrams & chart tools', 'Offline sync for vessel study', 'Instructor annotations']
              )}
              className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-900/60 rounded-lg transition-colors inline-flex items-center space-x-1 cursor-pointer"
            >
              <span>Learning Centre</span>
              <span className="text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400">Soon</span>
            </button>
            <button
              onClick={() => handleFutureNav(
                'Maritime Assessments Engine',
                'Stage 5 Roadmap',
                'The Assessments engine will provide structured knowledge evaluations, scenario-based questions, and formative progress assessments.',
                ['Scenario navigation quizzes', 'Collision regulations (COLREGs) checks', 'Timed revision modules', 'Instructor graded assessments']
              )}
              className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-900/60 rounded-lg transition-colors inline-flex items-center space-x-1 cursor-pointer"
            >
              <span>Assessments</span>
              <span className="text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400">Soon</span>
            </button>
            <button
              onClick={(e) => handleHomeNavClick(e, 'marine-ai')}
              className="px-3.5 py-2 text-xs font-medium text-cyan-300 hover:text-cyan-200 hover:bg-cyan-950/40 border border-cyan-800/30 rounded-lg transition-colors inline-flex items-center space-x-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Marine AI</span>
            </button>
            <button
              onClick={(e) => handleHomeNavClick(e, 'about')}
              className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-900/60 rounded-lg transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={(e) => handleHomeNavClick(e, 'contact')}
              className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-900/60 rounded-lg transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Action Buttons: Login / Register */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => handleFutureNav(
                'Student & Instructor Login',
                'Stage 3 Roadmap',
                'User authentication, student dashboards, instructor grading portals, and mariner logbooks will be introduced in Stage 3.',
                ['Personal student profile & progress log', 'Saved course notes & bookmarks', 'Multi-role authentication (Student, Instructor, Admin)', 'Vessel training record synchronization']
              )}
              id="header-login-btn"
              className="px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-lg border border-slate-800 transition-colors inline-flex items-center space-x-1.5 cursor-pointer"
            >
              <LogIn className="w-3.5 h-3.5 text-cyan-400" />
              <span>Login</span>
            </button>

            <button
              onClick={() => handleFutureNav(
                'Student Registration Portal',
                'Stage 3 Roadmap',
                'Registration will allow mariners to enroll in courses, save training history, and track progress across maritime pathways.',
                ['Free student account setup', 'Training pathway selector', 'Notification preferences', 'Early access updates']
              )}
              id="header-register-btn"
              className="px-4 py-2 text-xs font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all shadow-md shadow-cyan-950 inline-flex items-center space-x-1.5 cursor-pointer"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Register</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-cyan-950/80 bg-slate-950/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-1">
            <button
              onClick={(e) => handleHomeNavClick(e)}
              className="text-left w-full px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-900 rounded-lg cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={handleCoursesClick}
              className="text-left w-full px-3 py-2.5 text-sm font-medium text-cyan-300 hover:bg-slate-900 rounded-lg cursor-pointer"
            >
              Explore Courses
            </button>
            <button
              onClick={() => handleFutureNav(
                'Learning Centre Module',
                'Stage 4 Roadmap',
                'The Learning Centre is an interactive learning environment for students featuring multimedia course modules and digital maritime study notes.',
                ['Interactive syllabus browser', 'Digital maritime diagrams', 'Instructor annotations']
              )}
              className="flex items-center justify-between text-left w-full px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-900 rounded-lg cursor-pointer"
            >
              <span>Learning Centre</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">Stage 4</span>
            </button>
            <button
              onClick={() => handleFutureNav(
                'Maritime Assessments Engine',
                'Stage 5 Roadmap',
                'Structured knowledge evaluations, scenario checks, and formative assessments.',
                ['COLREGs quizzes', 'Navigation checks', 'Formative reviews']
              )}
              className="flex items-center justify-between text-left w-full px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-900 rounded-lg cursor-pointer"
            >
              <span>Assessments</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">Stage 5</span>
            </button>
            <button
              onClick={(e) => handleHomeNavClick(e, 'marine-ai')}
              className="flex items-center space-x-2 text-left w-full px-3 py-2.5 text-sm font-medium text-cyan-300 bg-cyan-950/30 rounded-lg cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Marine AI (Preview)</span>
            </button>
            <button
              onClick={(e) => handleHomeNavClick(e, 'about')}
              className="text-left w-full px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-900 rounded-lg cursor-pointer"
            >
              About
            </button>
            <button
              onClick={(e) => handleHomeNavClick(e, 'contact')}
              className="text-left w-full px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-900 rounded-lg cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => handleFutureNav(
                'Student Login',
                'Stage 3 Roadmap',
                'Authentication and user account features are scheduled for Stage 3.',
                ['Student dashboard', 'Course history', 'Logbook records']
              )}
              className="w-full py-2.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <LogIn className="w-3.5 h-3.5 text-cyan-400" />
              <span>Login</span>
            </button>
            <button
              onClick={() => handleFutureNav(
                'Student Registration',
                'Stage 3 Roadmap',
                'Student registration will open in Stage 3 alongside user profile management.',
                ['Free account registration', 'Course enrollment notifications']
              )}
              className="w-full py-2.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg flex items-center justify-center space-x-1.5 shadow-md shadow-cyan-950 cursor-pointer"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Register</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
