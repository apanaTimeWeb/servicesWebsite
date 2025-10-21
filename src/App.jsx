import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AIChatbotsPage from './pages/services/AIChatbotsPage'
import DashboardDesignPage from './pages/services/DashboardDesignPage'
import DataAnalyticsPage from './pages/services/DataAnalyticsPage'
import GameDevelopmentPage from './pages/services/GameDevelopmentPage'
import MLPredictionPage from './pages/services/MLPredictionPage'
import MobileDevelopmentPage from './pages/services/MobileDevelopmentPage'
import WebDevelopmentPage from './pages/services/WebDevelopmentPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/ai-chatbots" element={<AIChatbotsPage />} />
        <Route path="/services/dashboard-design" element={<DashboardDesignPage />} />
        <Route path="/services/data-analytics" element={<DataAnalyticsPage />} />
        <Route path="/services/game-development" element={<GameDevelopmentPage />} />
        <Route path="/services/ml-prediction" element={<MLPredictionPage />} />
        <Route path="/services/mobile-development" element={<MobileDevelopmentPage />} />
        <Route path="/services/web-development" element={<WebDevelopmentPage />} />
      </Routes>
    </Router>
  )
}

export default App