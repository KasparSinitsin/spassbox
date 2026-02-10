import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import BLcards from './BLcards.jsx'
import { ThemeProvider } from './ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/BLcards" element={<BLcards />} />
          <Route path="/timeline" element={<div>Timeline coming soon</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)