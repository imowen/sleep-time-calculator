import React from 'react';

const TimePicker = ({ time, setTime }) => {
  const hours = [...Array(12).keys()].map(i => i + 1);
  const minutes = ['00', '15', '30', '45'];
  const periods = ['AM', 'PM'];

  return (
    <div className="flex gap-2">
      <select value={time.hour} onChange={e => setTime({ ...time, hour: e.target.value })}>{hours.map(h => <option key={h}>{h}</option>)}</select>
      <select value={time.minute} onChange={e => setTime({ ...time, minute: e.target.value })}>{minutes.map(m => <option key={m}>{m}</option>)}</select>
      <select value={time.period} onChange={e => setTime({ ...time, period: e.target.value })}>{periods.map(p => <option key={p}>{p}</option>)}</select>
    </div>
  );
};

export default TimePicker;
