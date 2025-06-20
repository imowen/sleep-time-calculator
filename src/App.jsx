import React, { useState } from 'react';

export default function App() {
  const [wakeTime, setWakeTime] = useState('07:00');
  const [age, setAge] = useState('adult');
  const [results, setResults] = useState([]);

  const calculateSleep = () => {
    const cycles = 6;
    const cycleMinutes = 90;
    const wake = new Date(`1970-01-01T${wakeTime}:00`);
    const times = [];
    for (let i = cycles; i >= 4; i--) {
      const sleepTime = new Date(wake.getTime() - i * cycleMinutes * 60000);
      times.push(sleepTime.toTimeString().slice(0, 5));
    }
    setResults(times);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sleep Calculator</h1>

        <div className="mb-4">
          <label className="block font-medium mb-1">Wake-up Time</label>
          <input
            type="time"
            value={wakeTime}
            onChange={(e) => setWakeTime(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Age Group</label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setAge('child')}
              className={`p-2 rounded-xl border ${
                age === 'child' ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
            >
              Child
            </button>
            <button
              onClick={() => setAge('teen')}
              className={`p-2 rounded-xl border ${
                age === 'teen' ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
            >
              Teen
            </button>
            <button
              onClick={() => setAge('adult')}
              className={`p-2 rounded-xl border ${
                age === 'adult' ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
            >
              Adult
            </button>
          </div>
        </div>

        <button
          onClick={calculateSleep}
          className="bg-blue-600 text-white w-full py-2 rounded-xl mt-4 hover:bg-blue-700"
        >
          Calculate
        </button>

        {results.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Recommended Sleep Times</h2>
            <ul className="space-y-2">
              {results.map((time, idx) => (
                <li
                  key={idx}
                  className="bg-gray-100 p-2 rounded-xl text-center font-mono"
                >
                  {time}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}