import Svg, { Path, SvgProps } from "react-native-svg"

export function SendIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 21 20"
      {...props}
    >
      <Path
        d="M17.996 8.63L4.866 1.138a1.562 1.562 0 00-2.238 1.88l2.357 6.981-2.357 6.981a1.563 1.563 0 002.239 1.88l.007-.005 13.125-7.505a1.563 1.563 0 000-2.72h-.003zM4.662 16.816l1.986-5.88h4.327a.938.938 0 000-1.875H6.648l-1.987-5.88 11.935 6.81-11.934 6.825z"
        fill="#fff"
        fillOpacity={1}
      />
    </Svg>
  )
}