import { DEBUG } from "../Constants";

export const warn = (message?: any, ...optionalParams: any[]) =>
  DEBUG && console.warn(message, optionalParams);
