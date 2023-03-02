const addLeadingZeros = (n: number): string => {
  if (n <= 9) {
    return "0" + n;
  }
  return n.toString();
};

export const formatDate = (currentDatetime: Date): string =>
  currentDatetime.getFullYear() +
  "-" +
  addLeadingZeros(currentDatetime.getMonth() + 1) +
  "-" +
  addLeadingZeros(currentDatetime.getDate()) +
  "_" +
  addLeadingZeros(currentDatetime.getHours()) +
  "-" +
  addLeadingZeros(currentDatetime.getMinutes()) +
  "-" +
  addLeadingZeros(currentDatetime.getSeconds());
