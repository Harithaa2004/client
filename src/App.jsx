import { useState } from 'react'
import Header from './components/Header.jsx';
import TournamentBanner from './components/TournamentBanner.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />
      <main>
        <TournamentBanner/>
      </main>
    </div>
  )
}

export default App
