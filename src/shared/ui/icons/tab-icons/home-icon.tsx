import Svg, { Path, SvgProps } from "react-native-svg"

export function HomeIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 21 20"
      {...props}
    >
      <Path
        d="M17.603 8.625l-6.061-6.061a1.515 1.515 0 00-2.143 0L3.338 8.625a1.505 1.505 0 00-.444 1.072v7.274a.91.91 0 00.909.91h13.335a.91.91 0 00.91-.91V9.697a1.506 1.506 0 00-.445-1.072zm-1.374 7.437H4.712v-6.24l5.758-5.758 5.759 5.758v6.24z"
        fillOpacity={1}
      />
    </Svg>
  )
}
