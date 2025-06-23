import { View, Image, Text, TouchableOpacity } from "react-native";
import { IFriendCardProps } from "../../types/friend.types";
import { styles } from "./friend-card.style";
import { COLORS } from "../../../../shared/ui/colors";
import { DeleteFriendModal } from "../delete-friend-modal";
import { useState } from "react";
import { Button } from "../../../../shared/ui/button";
import { avatars } from "../../../../../assets/avatars/avatars";
import { BASE_IMAGE_URL } from "../../../../shared/tools/requests";

export function FriendCard(props: IFriendCardProps) {
	const { image, firstname, lastname, username, buttonLabel } = props;
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	return (
		<View style={styles.card}>
			<DeleteFriendModal
				isVisible={isModalVisible}
				onClose={() => {
					setIsModalVisible(false);
				}}
			/>
			<View style={styles.userInfo}>
				<Image
					source={image ? { uri: `${BASE_IMAGE_URL}/${image}` } : avatars.avatar }
					style={styles.avatar}
				/>
				<View style={{ gap: 8, alignItems: "center" }}>
					<Text style={styles.name}>
						{firstname} {lastname}
					</Text>
					<Text style={styles.username}>@{username}</Text>
				</View>
			</View>
			<View style={styles.buttons}>
				<Button
					style={styles.firstButton}
					label={buttonLabel}
					fontSize={14}
				/>
				<Button
					style={styles.secondButton}
					onPress={() => setIsModalVisible(true)}
					label={"Видалити"}
					fontSize={14}
					textColor={COLORS.purple}
				/>
			</View>
		</View>
	);
}
