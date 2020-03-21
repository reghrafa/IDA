import { MARKDOWNTYPES } from "../../../../Constants";

export const isNotSpecial = (markdown: string): boolean =>
  !MARKDOWNTYPES.map(t => markdown.toLowerCase().startsWith(t)).find(e => e === true);
