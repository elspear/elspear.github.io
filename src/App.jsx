import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <h1>Welcome!</h1>
        <p>This is my portfolio website.</p>
      </main>
    </div>
  )
}

export default App;