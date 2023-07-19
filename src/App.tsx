import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Contest } from './pages/Contest/Contest';
import { ExclusiveDeals } from './pages/ExclusiveDeals/ExclusiveDeals';
import { LandingPage } from './pages/Landing/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/deals" element={<ExclusiveDeals />} />
      </Routes>
    </Router>
  );
}

export default App;
