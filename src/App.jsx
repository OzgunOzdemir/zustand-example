import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import zustandLogo from './assets/zustand.png'
import './App.css'

// pages
import TelephoneBooks from './pages/TelephoneBooks';

function App() {
 
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo react" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://zustand-demo.pmnd.rs/" target="_blank">
          <img src={zustandLogo} className="logo react" alt="Zustand logo" />
        </a>
      </div>
      <h1>Vite + React + Zustand</h1>
      <TelephoneBooks />
    </>
  )
}

export default App
