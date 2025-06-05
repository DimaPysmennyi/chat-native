import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
import { COLORS } from "../colors"

export function TrashIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 21 20"
      {...props}
      fill={"none"}
    >
      <Path
        d="M4.08 5.833h13.332M9.08 9.167v5m3.333-5v5m-7.5-8.334l.834 10A1.666 1.666 0 007.412 17.5h6.667a1.666 1.666 0 001.667-1.667l.833-10m-8.333 0v-2.5a.833.833 0 01.833-.833h3.333a.833.833 0 01.834.833v2.5"
        stroke={COLORS.blue}
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
      />
    </Svg>
  )
}

