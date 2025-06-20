export function convertTo24Hour(hour, minute, period) {
  let h = parseInt(hour);
  if (period === 'PM' && h !== 12) h += 12;
  if (period === 'AM' && h === 12) h = 0;
  return h * 60 + parseInt(minute);
}

export function convertTo12Hour(totalMinutes) {
  totalMinutes = (totalMinutes + 1440) % 1440;
  let h = Math.floor(totalMinutes / 60);
  let m = totalMinutes % 60;
  const period = h >= 12 ? 'PM' : 'AM';
  if (h === 0) h = 12;
  else if (h > 12) h -= 12;
  return `${h}:${m.toString().padStart(2, '0')} ${period}`;
}

export function calculateBedtimes(wakeMinutes) {
  const results = [];
  [6, 5].forEach(cycles => {
    const total = cycles * 90 + 15;
    const bedtime = wakeMinutes - total;
    results.push({
      bedtime: convertTo12Hour(bedtime),
      wakeTime: convertTo12Hour(wakeMinutes),
      total: `${Math.floor(total / 60)}h ${total % 60}m`,
      cycles
    });
  });
  return results;
}
