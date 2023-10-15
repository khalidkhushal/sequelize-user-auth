exports.addHoursInCurrentDate = (hours) => {
  const date = Date.now() + 1000 * 60 * 60 * hours;
  return date;
};

exports.addMinutesInCurrentDate = (mins) => {
  const date = Date.now() + 1000 * 60 * mins
  return date;
};

exports.extractData = ( dataModel, data) => {
  const newData = new dataModel();
  const entries = Object.entries(data)
  entries.forEach(([key, value]) => {
    if (Object.keys(newData).includes(key)) {
      newData[key] = value;
    }
  });
  return newData;
};