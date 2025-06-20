import React from 'react';

const Results = ({ results }) => {
  if (!results.length) return null;
  return (
    <div className="mt-6 space-y-4">
      {results.map((r, i) => (
        <div key={i} className="p-4 bg-gray-100 rounded-lg">
          <p className="text-green-600 font-semibold">Recommended bedtime: {r.bedtime}</p>
          <p>Wake time: {r.wakeTime}</p>
          <p>{r.total} Hours in Bed ({r.cycles} Sleep Cycles)</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
