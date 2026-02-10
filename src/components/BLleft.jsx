import React from 'react';
import { ChevronLeft, ChevronRight, Shuffle, SortAsc, Home, SquareStack, BarChart3 } from 'lucide-react';

const styles = `
:root {
  --panel-bg: #ffffff;
  --panel-shadow: rgba(0, 0, 0, 0.1);
  --progress-bg: #eff6ff;
  --progress-text: #2563eb;
  --mode-bg: #f3f4f6;
  --mode-active-bg: #ffffff;
  --mode-learning-text: #2563eb;
  --mode-challenge-text: #16a34a;
  --mode-inactive-text: #4b5563;
  --score-bg: #f0fdf4;
  --score-text: #16a34a;
  --button-bg: #f3f4f6;
  --button-hover-bg: #e5e7eb;
  --menu-bg: #1f2937;
  --menu-hover-bg: #374151;
  --menu-text: #ffffff;
  --nav-bg: #ffffff;
  --nav-text: #4b5563;
  --overlay-bg: rgba(0, 0, 0, 0.5);
}
`;

export const LeftPanel = ({ 
  isOpen, 
  onClose,
  onToggle,
  mode, 
  onModeChange,
  learningSubMode,
  onLearningSubModeChange,
  currentIndex, 
  totalCards,
  score,
  onShuffle,
  onAlphabetical,
  theme,
  onThemeChange
}) => {
  return (
    <>
      <style>{styles}</style>
      
      {isOpen && (
        <div 
          style={{ backgroundColor: 'var(--overlay-bg)' }}
          className="fixed inset-0 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      <div 
        style={{ backgroundColor: 'var(--panel-bg)' }}
        className={`
          fixed md:static top-0 left-0 h-full shadow-xl z-50
          transition-all duration-300 ease-in-out
          ${isOpen ? 'w-84' : 'w-24'}
        `}
      >
        <div className={`p-6 h-full flex flex-col ${!isOpen && 'items-center p-3'}`}>
          
          <button
            onClick={onToggle}
            style={{ backgroundColor: 'transparent' }}
            className="mb-6 p-1 hover:bg-gray-100 rounded-lg transition-colors self-start"
            aria-label={isOpen ? "Panel schließen" : "Panel öffnen"}
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>

          {isOpen && (
            <>
              <div className="mb-6">
                <p className="text-sm font-semibold mb-3"
                  style={{ color: 'var(--score-text)' }}
                  >Modus</p>
                <div 
                  style={{ backgroundColor: 'var(--mode-bg)' }}
                  className="flex rounded-lg p-1"
                >
                  <button
                    onClick={() => onModeChange('learning')}
                    style={{
                      backgroundColor: mode === 'learning' ? 'var(--mode-active-bg)' : 'transparent',
                      color: mode === 'learning' ? 'var(--mode-learning-text)' : 'var(--mode-inactive-text)'
                    }}
                    className="flex-1 py-2 px-4 rounded-md font-medium transition-all shadow-sm"
                  >
                    Lernen
                  </button>
                  <button
                    onClick={() => onModeChange('challenge')}
                    style={{
                      backgroundColor: mode === 'challenge' ? 'var(--mode-active-bg)' : 'transparent',
                      color: mode === 'challenge' ? 'var(--mode-challenge-text)' : 'var(--mode-inactive-text)'
                    }}
                    className="flex-1 py-2 px-4 rounded-md font-medium transition-all shadow-sm"
                  >
                    Challenge
                  </button>
                </div>
              </div>

    {mode === 'learning' && (
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-3"
                  style={{ color: 'var(--score-text)' }}
                  >Lernmodus</p>
                  <div className="space-y-2">
                    <button
                      onClick={() => onLearningSubModeChange('cards')}
                      style={{
                        backgroundColor: learningSubMode === 'cards' ? 'var(--mode-active-bg)' : 'var(--button-bg)',
                        color: learningSubMode === 'cards' ? 'var(--mode-learning-text)' : 'var(--mode-inactive-text)'
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium"
                    >
                      <SquareStack size={18} />
                      <span>Karten</span>
                    </button>

                    <button
                      onClick={() => onLearningSubModeChange('graphs')}
                      style={{
                        backgroundColor: learningSubMode === 'graphs' ? 'var(--mode-active-bg)' : 'var(--button-bg)',
                        color: learningSubMode === 'graphs' ? 'var(--mode-learning-text)' : 'var(--mode-inactive-text)'
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium"
                    >
                      <BarChart3 size={18} />
                      <span>Grafiken</span>
                    </button>
                  </div>
                </div>
              )}

              {mode === 'challenge' && (
                <div 
                  style={{ backgroundColor: 'var(--score-bg)' }}
                  className="mb-6 p-4 rounded-lg"
                >
                  <p className="text-sm font-semibold mb-1"
                    style={{ color: 'var(--score-text)' }}
                    >Score</p>
                  <p 
                    style={{ color: 'var(--score-text)' }}
                    className="text-2xl font-bold"
                  >
                    {score.correct} / {score.total}
                  </p>
                  {score.total > 0 && (
                    <p className="text-sm mt-1"
                      style={{ color: 'var(--score-text)' }}>
                      {Math.round((score.correct / score.total) * 100)}% richtig
                    </p>
                  )}
                </div>
              )}

              {mode === 'learning' && learningSubMode === 'cards' && (
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-3"
                      style={{ color: 'var(--mode-challenge-text)' }}
                    >Reihenfolge</p>
                  <div className="space-y-2">
                    <button
                      onClick={onShuffle}
                      style={{ 
                        backgroundColor: 'var(--button-bg)',
                        color: 'var(--mode-challenge-text)'
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Shuffle size={18} />
                      <span>Mischen</span>
                    </button>
                    <button
                      onClick={onAlphabetical}
                      style={{ 
                        backgroundColor: 'var(--button-bg)',
                        color: 'var(--score-text)'
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                    >
                      <SortAsc size={18} />
                      <span>Alphabetisch</span>
                    </button>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <p className="text-sm font-semibold mb-3"
                  style={{ color: 'var(--score-text)' }}
                  >Farbthema</p>
                <div className="space-y-1 text-xs">
                  <button
                    onClick={() => onThemeChange('black')}
                    className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      theme === 'black' ? 'ring-2 ring-gray-800' : ''
                    }`}
                    style={{ backgroundColor: '#111827', color: '#ffffff' }}
                  >
                    Schwarz
                  </button>
                  <button
                    onClick={() => onThemeChange('red')}
                    className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      theme === 'red' ? 'ring-2 ring-red-800' : ''
                    }`}
                    style={{ backgroundColor: '#7f1d1d', color: '#ffffff' }}
                  >
                    Rot
                  </button>
                  <button
                    onClick={() => onThemeChange('gold')}
                    className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      theme === 'gold' ? 'ring-2 ring-yellow-800' : ''
                    }`}
                    style={{ backgroundColor: '#ca8a04', color: '#ffffff' }}
                  >
                    Gold
                  </button>
                </div>
              </div>

              <a 
                href="/"
                style={{
                  backgroundColor: 'var(--menu-bg)',
                  color: 'var(--menu-text)'
                }}
                className="mt-auto w-full flex items-center justify-center px-4 py-3 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Home size={20} />
                <span className="ml-2">Menü</span>
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export const Navigation = ({ onPrevious, onNext, currentIndex, totalCards }) => {
  return (
    <div 
      style={{ backgroundColor: 'var(--nav-bg)' }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 px-6 py-2 rounded-full shadow-xl z-30"
    >
      <button
        onClick={onPrevious}
        style={{ backgroundColor: 'var(--nav-bg)',
          color: 'var(--nav-text)'
         }}
        className="p-2 rounded-full"
        aria-label="Vorheriges Bundesland"
      >
        <ChevronLeft size={24} />
      </button>
      
      <span 
        style={{ color: 'var(--nav-text)' }}
        className="font-medium min-w-[60px] text-center"
      >
        {currentIndex + 1} / {totalCards}
      </span>
      
      <button
        onClick={onNext}
        style={{ backgroundColor: 'var(--nav-bg)',
          color: 'var(--nav-text)'
         }}
        className="p-2 bg-transparent rounded-full"
        aria-label="Nächstes Bundesland"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};