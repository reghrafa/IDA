import React from "react";
import Svg, {G, Circle} from 'react-native-svg'

function Checkbox_Circular_Filled() {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <G
        stroke="#0d507a"
        strokeWidth="1.5"
        data-name="Gruppe 119505"
        transform="translate(-1390 -2298)"
      >
        <G fill="none" data-name="Ellipse 31" transform="translate(1390 2298)">
          <Circle cx="8" cy="8" r="8" stroke="none"></Circle>
          <Circle cx="8" cy="8" r="7.25"></Circle>
        </G>
        <G
          fill="#0d507a"
          data-name="Ellipse 546"
          transform="translate(1394 2302)"
        >
          <Circle cx="4" cy="4" r="4" stroke="none"></Circle>
          <Circle cx="4" cy="4" r="3.25" fill="none"></Circle>
        </G>
      </G>
    </Svg>
  );
}

export default Checkbox_Circular_Filled;
