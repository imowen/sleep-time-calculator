import React from 'react';

const AgeSelector = ({ selectedAge, setSelectedAge }) => {
  const ageRanges = [
    '0-3 Months', '4-11 Months', '1-2 Years', '3-5 Years', '6-13 Years',
    '14-17 Years', '18-25 Years', '26-35 Years', '36-45 Years',
    '46-55 Years', '56-64 Years', '65+ Years'
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {ageRanges.map(age => (
        <button
          key={age}
          className={`p-2 rounded-lg border ${selectedAge === age ? 'bg-blue-600 text-white' : 'bg-white'}`}
          onClick={() => setSelectedAge(age)}
        >
          {age}
        </button>
      ))}
    </div>
  );
};

export default AgeSelector;
