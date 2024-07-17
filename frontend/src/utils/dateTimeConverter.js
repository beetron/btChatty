export function dateTimeConverter(data) {
  const date = new Date(data);
  const month = date.getMonth() + 1;
  const day = addZero(date.getDate());
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());
  return `${month}/${day} - ${hours}:${minutes}`;
}

// Add 0 to single digit numbers
function addZero(num) {
  return num.toString().padStart(2, "0");
}
