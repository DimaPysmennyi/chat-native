import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

export function CrossIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 21 20"
      {...props}
    >
      <G clipPath="url(#clip0_1321_3591)">
        <Path
          d="M14.293 15.353l-3.824-3.825-3.825 3.825a1.082 1.082 0 01-1.53-1.53L8.94 9.998 5.114 6.174a1.082 1.082 0 011.53-1.53L10.47 8.47l3.824-3.825a1.082 1.082 0 011.53 1.53l-3.825 3.824 3.825 3.825a1.082 1.082 0 11-1.53 1.53z"
          fill="#000"
          fillOpacity={1}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1321_3591">
          <Path
            transform="translate(.469)"
            d="M0 0H20V20H0z"
            fillOpacity={1}
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}