export const themes = {
  black: {
    '--app-bg-from': '#111827',
    '--app-bg-to': '#1f2937',
    
    '--panel-bg': '#1f2937',
    '--panel-shadow': 'rgba(0, 0, 0, 0.3)',
    '--progress-bg': '#374151',
    '--progress-text': '#e5e7eb',
    '--mode-bg': '#374151',
    '--mode-active-bg': '#4b5563',
    '--mode-learning-text': '#e5e7eb',
    '--mode-challenge-text': '#e5e7eb',
    '--mode-inactive-text': '#9ca3af',
    '--score-bg': '#374151',
    '--score-text': '#e5e7eb',
    '--button-bg': '#374151',
    '--button-hover-bg': '#4b5563',
    '--menu-bg': '#111827',
    '--menu-hover-bg': '#1f2937',
    '--menu-text': '#ffffff',
    '--nav-bg': '#374151',  
    '--nav-text': '#e5e7eb', 
    '--overlay-bg': 'rgba(0, 0, 0, 0.7)',
    
    '--card-bg': '#1f2937',
    '--card-shadow': 'rgba(0, 0, 0, 0.3)',
    '--card-title': '#f9fafb',
    '--card-border': '#374151',
    '--card-label': '#9ca3af',
    '--card-hauptstadt': '#e5e7eb',
    '--card-text-primary': '#f9fafb',
    '--card-text-secondary': '#d1d5db',
  },
  
  red: {
    '--app-bg-from': '#450a0a',
    '--app-bg-to': '#7f1d1d',
    
    '--panel-bg': '#7f1d1d',
    '--panel-shadow': 'rgba(127, 29, 29, 0.3)',
    '--progress-bg': '#991b1b',
    '--progress-text': '#fecaca',
    '--mode-bg': '#991b1b',
    '--mode-active-bg': '#b91c1c',
    '--mode-learning-text': '#fecaca',
    '--mode-challenge-text': '#fecaca',
    '--mode-inactive-text': '#fca5a5',
    '--score-bg': '#991b1b',
    '--score-text': '#fecaca',
    '--button-bg': '#991b1b',
    '--button-hover-bg': '#b91c1c',
    '--menu-bg': '#450a0a',
    '--menu-hover-bg': '#7f1d1d',
    '--menu-text': '#ffffff',
    '--nav-bg': '#991b1b', 
    '--nav-text': '#fef2f2', 
    '--overlay-bg': 'rgba(127, 29, 29, 0.7)',
    
    '--card-bg': '#7f1d1d',
    '--card-shadow': 'rgba(127, 29, 29, 0.3)',
    '--card-title': '#fef2f2',
    '--card-border': '#991b1b',
    '--card-label': '#fca5a5',
    '--card-hauptstadt': '#fecaca',
    '--card-text-primary': '#fef2f2',
    '--card-text-secondary': '#fecaca',
  },
  
  gold: {
 
    '--app-bg-from': '#fef3c7',
    '--app-bg-to': '#ca8a04',
    
    '--panel-bg': '#fef3c7',
    '--panel-shadow': 'rgba(245, 158, 11, 0.2)',
    '--progress-bg': '#fde047',
    '--progress-text': '#713f12',
    '--mode-bg': '#fde047',
    '--mode-active-bg': '#facc15',
    '--mode-learning-text': '#713f12',
    '--mode-challenge-text': '#713f12',
    '--mode-inactive-text': '#a16207',
    '--score-bg': '#fde047',
    '--score-text': '#713f12',
    '--button-bg': '#fde047',
    '--button-hover-bg': '#facc15',
    '--menu-bg': '#fde047',
    '--menu-hover-bg': '#a16207',
    '--menu-text': '#1f2937',
    '--nav-bg': '#facc15',  
    '--nav-text': '#713f12',  
    '--overlay-bg': 'rgba(245, 158, 11, 0.5)',
  
    '--card-bg': '#fef3c7',
    '--card-shadow': 'rgba(245, 158, 11, 0.2)',
    '--card-title': '#713f12',
    '--card-border': '#fde047',
    '--card-label': '#a16207',
    '--card-hauptstadt': '#b45309',
    '--card-text-primary': '#713f12',
    '--card-text-secondary': '#92400e',
  }
};

export const applyTheme = (themeName) => {
  const theme = themes[themeName];
  if (!theme) return;
  
  Object.keys(theme).forEach(property => {
    document.documentElement.style.setProperty(property, theme[property]);
  });
  
  localStorage.setItem('theme', themeName);
};

export const getSavedTheme = () => {
  return localStorage.getItem('theme') || 'gold';
};