import { useState } from 'react'
import { Link } from 'react-router'
import './App.css'

function App() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="mb-6"><h1>SPASS:BOX</h1>
      <h3>kleine Spiele über Deutschland</h3>
      </div>

      <Link to="/BLcards" className="text-xl hover:underline">Bundesländerkarte</Link>
      <Link to="/timeline" className="text-xl hover:underline">History Timeline</Link>
    </div>
  )
}

export default App