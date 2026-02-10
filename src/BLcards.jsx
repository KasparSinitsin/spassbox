import React, { useState, useEffect } from 'react';
import BundeslandCard from './components/BundeslandCard';
import BundeslandGraphs from './components/BundeslandGraphs';
import { LeftPanel, Navigation } from './components/BLleft'; 
import bundesl from './data/land';
import { useTheme } from './ThemeContext';

export default function BLcards() {
  const { theme, setTheme } = useTheme();
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [mode, setMode] = useState('learning');
  const [learningSubMode, setLearningSubMode] = useState('cards'); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [lands, setLands] = useState(bundesl);

  useEffect(() => {
    if (window.innerWidth < 768) {
      const timer = setTimeout(() => {
        setIsPanelOpen(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleToggle = () => setIsPanelOpen(true);
    window.addEventListener('togglePanel', handleToggle);
    return () => window.removeEventListener('togglePanel', handleToggle);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + lands.length) % lands.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % lands.length);
  };

  const handleShuffle = () => {
    const shuffled = [...lands].sort(() => Math.random() - 0.5);
    setLands(shuffled);
    setCurrentIndex(0);
  };

  const handleAlphabetical = () => {
    const sorted = [...lands].sort((a, b) => a.name.localeCompare(b.name));
    setLands(sorted);
    setCurrentIndex(0);
  };

  const handleAnswer = (correct) => {
    setScore({
      correct: score.correct + (correct ? 1 : 0),
      total: score.total + 1
    });
  };

  return (
    <div 
      className="relative w-screen h-screen"
      style={{
        background: `linear-gradient(to bottom right, var(--app-bg-from), var(--app-bg-to))`
      }}
    >
      
      <div className="flex h-full">
<LeftPanel
          isOpen={isPanelOpen}
          onClose={() => setIsPanelOpen(false)}
          onToggle={() => setIsPanelOpen(!isPanelOpen)}
          mode={mode}
          onModeChange={setMode}
          learningSubMode={learningSubMode}
          onLearningSubModeChange={setLearningSubMode}
          currentIndex={currentIndex}
          totalCards={lands.length}
          score={score}
          onShuffle={handleShuffle}
          onAlphabetical={handleAlphabetical}
          theme={theme}
          onThemeChange={setTheme}
        />

  <div className="flex-1 flex items-center justify-center relative">
  {mode === 'learning' && learningSubMode === 'cards' && (
    <BundeslandCard 
      land={lands[currentIndex]} 
      mode={mode}
      onAnswer={handleAnswer}
    />
  )}
  
  {mode === 'learning' && learningSubMode === 'graphs' && (
    <BundeslandGraphs />
  )}
  
  {mode === 'challenge' && (
    <BundeslandCard 
      land={lands[currentIndex]} 
      mode={mode}
      onAnswer={handleAnswer}
    />
  )}
  
  {(learningSubMode === 'cards' || mode === 'challenge') && (
    <Navigation
      onPrevious={handlePrevious}
      onNext={handleNext}
      currentIndex={currentIndex}
      totalCards={lands.length}
    />
  )}
</div>
      </div>

    </div>
  );
}