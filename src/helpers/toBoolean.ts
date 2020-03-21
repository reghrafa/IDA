export const stringToBoolean = (s: string, ifUndefinded: boolean): boolean => {
  if (s === "true") {
    return true;
  }
  if (s === "false") {
    return false;
  }
  return ifUndefinded;
};
export const booleanToString = (b: boolean): string => (b ? "true" : "false");
