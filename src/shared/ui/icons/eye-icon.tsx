import Svg, { Path, SvgProps } from "react-native-svg"
import { COLORS } from "../colors"

export function EyeIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 21 20"
      {...props}
    >
      <Path
        d="M2.137 10s2.5-5.833 8.333-5.833S18.803 10 18.803 10s-2.5 5.833-8.333 5.833S2.137 10 2.137 10z"

        fill="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
      />
      <Path
        d="M10.47 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"

        strokeWidth={2}
        fill="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
      />
    </Svg>
  )
}