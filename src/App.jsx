import React, { useState } from 'react';
import AgeSelector from './components/AgeSelector';
import TimePicker from './components/TimePicker';
import Results from './components/Results';
import { convertTo24Hour, calculateBedtimes } from './utils/sleepCalculator';

const App = () => {
  const [selectedAge, setSelectedAge] = useState('26-35 Years');
  const [mode, setMode] = useState('wake');
  const [time, setTime] = useState({ hour: '7', minute: '30', period: 'AM' });
  const [results, setResults] = useState([]);

  const handleCalculate = () => {
    const totalMinutes = convertTo24Hour(time.hour, time.minute, time.period);
    const res = calculateBedtimes(totalMinutes);
    setResults(res);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sleep Calculator</h1>
      <AgeSelector selectedAge={selectedAge} setSelectedAge={setSelectedAge} />
      <div className="my-4">
        <label className="mr-4">
          <input type="radio" name="mode" checked={mode === 'wake'} onChange={() => setMode('wake')} /> I want to wake up at...
        </label>
        <label>
          <input type="radio" name="mode" checked={mode === 'sleep'} onChange={() => setMode('sleep')} disabled /> I want to go to bed at... (coming soon)
        </label>
      </div>
      <TimePicker time={time} setTime={setTime} />
      <button onClick={handleCalculate} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Calculate</button>
      <Results results={results} />
    </div>
  );
};

export default App;
