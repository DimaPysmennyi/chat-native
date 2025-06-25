import Svg, { Path, Rect, SvgProps } from "react-native-svg"

export function ChatsIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 27 26"
      {...props}
    >
      <Path
        d="M3.455 16a7.515 7.515 0 0115.03 0v4.782c0 .796 0 1.193-.118 1.511a1.878 1.878 0 01-1.104 1.104c-.318.118-.716.118-1.511.118H10.97A7.515 7.515 0 013.455 16z"
        stroke="black"
        fill="white"
        strokeWidth={1.66667}
        strokeOpacity={1}
      />
      <Path
        d="M8.152 15.06h5.636m-2.818 3.758h2.818"
        stroke="black"
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
      />
    </Svg>
  )
}