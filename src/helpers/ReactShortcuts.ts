/* eslint-disable import/prefer-default-export */
export function invokeEventHandler(
  eventHandler?: (...args: any[]) => void,
  ...args: any[]
): void {
  if (eventHandler) {
    eventHandler(...args);
  }
}
