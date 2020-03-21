import React from 'react'
import Svg, { Path } from "react-native-svg";


const DownArrow = (props: { color: string, dir: "up" | "down" }) => (
    <Svg
        width={24}
        height={8}
        viewBox="0 0 24 8"
    >
        <Path
            d={props.dir === "down" ? "M1,1l11,6l11,-6" : "M1,7l11,-6l11,6"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            fillOpacity={0}
            stroke={props.color}
        />
    </Svg>
)

export default DownArrow;