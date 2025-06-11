import { View, Text } from "react-native";
import { IFriendHeaderProps } from "../../types/header.types";
import { styles } from "./friend-header.styles";
import { COLORS } from "../../../../shared/ui/colors";
import { Link, useRouter } from "expo-router";

export function FriendHeader(props: IFriendHeaderProps) {
	const { page } = props;
	const router = useRouter();
	return (
		<View style={styles.headerView}>
			<View
				style={
					page === "Головна" ? styles.underlinedVariant : undefined
				}
			>
				<Text
					style={
						page === "Головна"
							? {
									fontFamily: "GTWalsheimPro-Medium",
									fontSize: 16,
									color: COLORS.blue,
							  }
							: {
									fontFamily: "GTWalsheimPro-Regular",
									fontSize: 16,
									color: COLORS.blueOpacity,
							  }
					}
				>
					<Link
						href="/friends"
						onPress={(event) => {
							event.preventDefault();
							router.replace("/friends");
						}}
					>
						Головна
					</Link>
				</Text>
			</View>
			<View
				style={page === "Запити" ? styles.underlinedVariant : undefined}
			>
				<Text
					style={
						page === "Запити"
							? {
									fontFamily: "GTWalsheimPro-Medium",
									fontSize: 16,
									color: COLORS.blue,
							  }
							: {
									fontFamily: "GTWalsheimPro-Regular",
									fontSize: 16,
									color: COLORS.blueOpacity,
							  }
					}
				>
					<Link
						href="/requests"
						onPress={(event) => {
							event.preventDefault();
							router.replace("/requests");
						}}
					>
						Запити
					</Link>
				</Text>
			</View>
			<View
				style={
					page === "Рекомендації"
						? styles.underlinedVariant
						: undefined
				}
			>
				<Text
					style={
						page === "Рекомендації"
							? {
									fontFamily: "GTWalsheimPro-Medium",
									fontSize: 16,
									color: COLORS.blue,
							  }
							: {
									fontFamily: "GTWalsheimPro-Regular",
									fontSize: 16,
									color: COLORS.blueOpacity,
							  }
					}
				>
					<Link
						href="/recommendations"
						onPress={(event) => {
							event.preventDefault();
							router.replace("/recommendations");
						}}
					>
						Рекомендації
					</Link>
				</Text>
			</View>
			<View
				style={
					page === "Всі друзі" ? styles.underlinedVariant : undefined
				}
			>
				<Text
					style={
						page === "Всі друзі"
							? {
									fontFamily: "GTWalsheimPro-Medium",
									fontSize: 16,
									color: COLORS.blue,
							  }
							: {
									fontFamily: "GTWalsheimPro-Regular",
									fontSize: 16,
									color: COLORS.blueOpacity,
							  }
					}
				>
					<Link
						href="all-friends"
						onPress={(event) => {
							event.preventDefault();
							router.replace("/all-friends");
						}}
					>
						Всі друзі
					</Link>
				</Text>
			</View>
		</View>
	);
}
