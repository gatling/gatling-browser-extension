export const getKeyWithHighestValue = (map: Map<string, number>): string => {
  let highestKey = "";
  let highestValue = 0;

  for (const [key, value] of map) {
    if (value > highestValue) {
      highestKey = key;
      highestValue = value;
    }
  }

  return highestKey;
};
