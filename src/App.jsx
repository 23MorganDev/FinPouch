import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ElectricityInput from './components/forms/ElectricityInput'
import ElectricityResultPage from './pages/ElectricityResultPage'
import Dashboard from './components/dashboard/Dashboard'
import ShippingInputEstimates from './components/forms/ShippingInput'
import ShippingResultsPage from './pages/ShippingResultsPage'
import ActivelyTraded from './components/markets/ActivelyTraded'
import GainersMarketTrends from './components/markets/GainersMarketTrends'
import LosersMarketTrend from './components/markets/LosersMarketTrend'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/electricity-input' element={<ElectricityInput />} />
        <Route path='/electricity-results' element={<ElectricityResultPage />} />
        <Route path='/shipping-input' element={<ShippingInputEstimates />} />
        <Route path='shipping-results' element={<ShippingResultsPage />} />
        <Route path="/actively-traded" element={<ActivelyTraded />} />
        <Route path='/gainers' element={<GainersMarketTrends />} />
        <Route path='/losers' element={<LosersMarketTrend />} />
      </Routes>
    </Router>
  );
};

export default App