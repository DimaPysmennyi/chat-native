import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";
import { COLORS } from "../colors";

export function EyeSlashIcon(props: SvgProps) {
	return (
		<Svg
			viewBox="0 0 20 20"
			{...props}
		>
			<G clipPath="url(#clip0_2110_3409)">
				<Path
					d="M8.233 8.233a2.5 2.5 0 103.534 3.534M8.942 4.233A8.692 8.692 0 0110 4.167c5.833 0 8.333 5.833 8.333 5.833a10.97 10.97 0 01-1.391 2.233M5.508 5.508A11.272 11.272 0 001.667 10s2.5 5.833 8.333 5.833a8.116 8.116 0 004.492-1.341M1.667 1.667l16.666 16.666"
					stroke={COLORS.blueOpacity}
					strokeWidth={2}
					fill="white"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</G>
			<Defs>
				<ClipPath id="clip0_2110_3409">
					<Path fill={COLORS.blueOpacity} d="M0 0H20V20H0z" fillOpacity={1} />
				</ClipPath>
			</Defs>
		</Svg>
	);
}
