import React, { useState } from 'react';
import Chart from './components/Chart';
import TimeframeSelector from './components/TimeframeSelector';
import ThemeToggle from './components/ThemeToggle';
import './styles/App.css';

const App = () => {
  const [timeframe, setTimeframe] = useState('daily');
  const [theme, setTheme] = useState('light-mode');

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode');
  };

  return (
    <div className={`app-container ${theme}`}>
      <h1 className="app-title">Interactive Charting Application</h1>
      <ThemeToggle toggleTheme={toggleTheme} />
      <TimeframeSelector onSelect={handleTimeframeChange} />
      <Chart timeframe={timeframe} />
    </div>
  );
};

export default App;