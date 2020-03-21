import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { IEdubaoTheme } from "./IEdubaoTheme";

export default (): IEdubaoTheme => useContext(ThemeContext);
