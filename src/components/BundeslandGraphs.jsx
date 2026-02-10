import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import bundesl from '../data/land';

export default function BundeslandGraphs() {
  const [chartType, setChartType] = useState('population');


  const populationData = [...bundesl]
    .map(land => ({
      name: land.name,
      value: parseFloat(land.einwohner.replace(/[^\d,.]/g, '').replace(',', '.'))
    }))
    .sort((b, a) => b.value - a.value);

  const areaData = [...bundesl]
    .map(land => ({
      name: land.name,
      value: parseFloat(land.flaeche.replace(/[^\d]/g, ''))
    }))
    .sort((b, a) => b.value - a.value);

  const foundingDataGrouped = [...bundesl]
    .reduce((acc, land) => {
      const year = parseInt(land.gruendung);
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(land.name);
      return acc;
    }, {});

  const foundingData = Object.entries(foundingDataGrouped)
    .map(([year, lands]) => ({
      year: parseInt(year),
      lands: lands
    }))
    .sort((a, b) => a.year - b.year);

  const getCurrentData = () => {
    switch(chartType) {
      case 'population': return populationData;
      case 'area': return areaData;
      case 'founding': return foundingData;
      default: return populationData;
    }
  };

  const getChartTitle = () => {
    switch(chartType) {
      case 'population': return 'Einwohner (in Millionen)';
      case 'area': return 'Fläche (in km²)';
      case 'founding': return 'Gründungsjahr';
      default: return '';
    }
  };

  return (
    <div className="w-full h-full p-8 flex flex-col">
      <div className="flex gap-4 mb-4">
        <button 
          onClick={() => setChartType('population')}
          style={{
            backgroundColor: chartType === 'population' ? 'var(--mode-active-bg)' : 'var(--button-bg)',
            color: chartType === 'population' ? 'var(--mode-learning-text)' : 'var(--mode-inactive-text)'
          }}
          className="px-6 py-2 rounded-lg font-medium transition-all"
        >
          Einwohner
        </button>
        <button 
          onClick={() => setChartType('area')}
          style={{
            backgroundColor: chartType === 'area' ? 'var(--mode-active-bg)' : 'var(--button-bg)',
            color: chartType === 'area' ? 'var(--mode-learning-text)' : 'var(--mode-inactive-text)'
          }}
          className="px-6 py-2 rounded-lg font-medium transition-all"
        >
          Fläche
        </button>
        <button 
          onClick={() => setChartType('founding')}
          style={{
            backgroundColor: chartType === 'founding' ? 'var(--mode-active-bg)' : 'var(--button-bg)',
            color: chartType === 'founding' ? 'var(--mode-learning-text)' : 'var(--mode-inactive-text)'
          }}
          className="px-6 py-2 rounded-lg font-medium transition-all"
        >
          Gründung
        </button>
      </div>

      <h2 
        style={{ color: 'var(--menu-text)' }}
        className="text-2xl font-bold mb-6"
      >
        {getChartTitle()}
      </h2>

      {chartType === 'founding' ? (
        <div className="flex-1 overflow-y-auto">
          <div className="relative pl-8">
            <div 
              className="absolute left-4 top-0 bottom-0 w-0.5"
              style={{ backgroundColor: 'var(--card-border)' }}
            />
            
            {foundingData.map((item, index) => (
              <div key={item.year} className="relative mb-6 flex items-start">
                <div 
                  className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-around"
                  style={{ backgroundColor: 'var(--progress-bg)' }}
                >
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: 'var(--progress-text)' }}
                  />
                </div>
                
              
                <div className="ml-12 flex-1">
                  
                 <div className="flex items-start gap-3">
  <span 
    style={{ color: 'var(--card-hauptstadt)' }}
    className="text-xl font-bold mb-1"
  >
    {item.year}
  </span>
  </div>
  <div className="flex flex-wrap gap-2 flex-1">
                    {item.lands.map(landName => (
                      <div
                        key={landName}
                        className="px-3 py-1 rounded-lg"
                        style={{ backgroundColor: 'var(--card-bg)' }}
                      >
                        <span 
                          style={{ color: 'var(--card-title)' }}
                          className="text-sm font-medium"
                        >
                          {landName}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (

        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={getCurrentData()}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--menu-text)" />
            <XAxis 
              dataKey="name" 
              angle={-45} 
              textAnchor="end" 
              height={150}
              stroke="var(--menu-text)"
            />
            <YAxis stroke="var(--menu-text)" />
        <Tooltip 
  contentStyle={{ 
    backgroundColor: 'var(--card-bg)',
    border: '1px solid var(--card-border)',
    color: 'var(--menu-text)'
  }}
  formatter={(value) => {
    if (chartType === 'population') return `${value} Millionen`;
    if (chartType === 'area') return `${value.toLocaleString()} km²`;
    return value;
  }}
  labelStyle={{ color: 'var(--menu-text)' }}
/>
            <Bar dataKey="value" fill="var(--menu-text)" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}