export const getCurrentDate = () => {
  const date = new Date();
  const today = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  return today;
};

export const retrieveTime = (timestamp) => {
  const time = new Date(timestamp);
  return time.toLocaleTimeString();
};

export const hours = (timestamp1, timestamp2) => {
    let startTime = new Date(timestamp1);
    let endTime = new Date(timestamp2);
    const diff = endTime.getTime() - startTime.getTime()
    return parseFloat(diff/(60 * 60 * 1000)).toFixed(2)
}

