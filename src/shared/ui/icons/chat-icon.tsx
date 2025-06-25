import Svg, { Path, SvgProps } from "react-native-svg"

export function ChatIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 21 20"
      {...props}
    >
      <Path
        d="M3.148 10a7.515 7.515 0 0115.03 0v4.782c0 .796 0 1.193-.118 1.511a1.879 1.879 0 01-1.103 1.104c-.319.118-.716.118-1.512.118h-4.781A7.515 7.515 0 013.148 10z"
        
        strokeWidth={1.66667}
        strokeOpacity={1}
      />
      <Path
        d="M7.844 9.06h5.636m-2.818 3.758h2.818"
        
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
      />
    </Svg>
  )
}