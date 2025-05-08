import Svg, { Path, SvgProps } from "react-native-svg"

export function DotsIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 21 20"
      {...props}
    >
      <Path
        d="M12.658 10a2.188 2.188 0 11-4.376 0 2.188 2.188 0 014.376 0zM10.47 5.937a2.187 2.187 0 100-4.374 2.187 2.187 0 000 4.375zm0 8.125a2.187 2.187 0 100 4.375 2.187 2.187 0 000-4.375z"
      />
    </Svg>
  )
}

