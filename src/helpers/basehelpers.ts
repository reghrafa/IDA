export const capitalize = (text: string, lower?: boolean) =>
  (lower ? text.toLowerCase() : text).replace(/(?:^|\s)\S/g, function(a) {
    return a.toUpperCase();
  });
export const isValidJSON = (json: string) => {
  let b: boolean = true;
  try {
    JSON.parse(json);
  } catch (error) {
    b = false;
  }
  return b;
};
// much faster than array.flat and comparable
export const flattenArray = <T>(inputArray: T[][]): T[] => {
  const flattened: T[] = [];
  for (const i of inputArray) {
    if (typeof i !== "object") {
      flattened.push(i);
    } else for (const j of i) flattened.push(j);
  }
  return flattened;
};
