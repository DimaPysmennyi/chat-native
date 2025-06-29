import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./frienditems.styles";
import { avatars } from "../../../../../../../assets/avatars/avatars";
import { BASE_IMAGE_URL } from "../../../../../../shared/tools/requests";

type FriendItemProps = {
	id: number;
	name: string;
	image?: string;
	selected: boolean;
	onToggle: (id: number) => void;
};

export const FriendItem = ({
	id,
	name,
	image,
	selected,
	onToggle,
}: FriendItemProps) => {
	return (
		<TouchableOpacity
			style={styles.friendItem}
			onPress={() => onToggle(id)}
		>
			<View style={styles.friendInfo}>
				<Image
					source={image ? { uri: `${BASE_IMAGE_URL}/${image}` } : avatars.avatar}
					style={styles.avatar}
				/>
				<Text style={styles.friendName}>{name}</Text>
			</View>
			<View
				style={[styles.checkbox, selected && styles.checkboxSelected]}
			>
				{selected && <Text style={styles.checkmark}>✔</Text>}
			</View>
		</TouchableOpacity>
	);
};
