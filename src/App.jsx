import { useState } from 'react'
import Header from './components/Header.jsx';
import TournamentBanner from './components/TournamentBanner.jsx';
import PlayGamesSection from './components/PlayGamesSection.jsx';
import ComingSoonSection from './components/ComingSoonSection.jsx';
import NavBar from './components/NavBar.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />
      <main>
        <TournamentBanner/>
        <PlayGamesSection />
        <ComingSoonSection/>
        <NavBar />
      </main>
    </div>
  )
}

export default App
