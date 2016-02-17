EXP_MONTHS = function() {
  let months = [];
  for (let i = 01; i < 12; i++) {
    parseInt([i]) >= 10 ? months.push([i].toString()) : months.push('0' + i);
  };
  return months;
};
