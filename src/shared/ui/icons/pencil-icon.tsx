import Svg, { Path, SvgProps } from "react-native-svg"

export function PencilIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 21 20"
      {...props}
    >
      <Path
        d="M4.5 15.833h1.188l8.146-8.146L12.646 6.5l-8.145 8.146v1.187zM2.835 17.5v-3.542l11-10.979c.167-.153.35-.27.553-.354.201-.083.413-.125.634-.125.222 0 .437.042.646.125.21.083.39.208.542.375l1.146 1.167c.166.152.288.333.365.541a1.786 1.786 0 010 1.261 1.543 1.543 0 01-.365.552L6.375 17.5H2.835zM13.23 7.104l-.584-.604 1.188 1.188-.604-.584z"
        fillOpacity={1}
      />
    </Svg>
  )
}