import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend
} from 'recharts';
import data from '../data/chartData.json';
import '../styles/Chart.css';

const Chart = ({ timeframe }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const filteredData = filterDataByTimeframe(data, timeframe);
    setChartData(filteredData);
  }, [timeframe]);

  const filterDataByTimeframe = (data, timeframe) => {
    return data;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Timestamp: ${label}`}</p>
          <p className="value">{`Value: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" animationDuration={500} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;