import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Albums from './components/albums';
import AboutMe from './components/about-me';
import Header from './components/Hearder'; // Import Header component

function App() {
  return (
    <Router>
      <div>
        <Header  /> {/* Add Header here */}
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>

    
  );
}

export default App;
