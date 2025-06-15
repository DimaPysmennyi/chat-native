import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { FriendCard } from "../friend-card";
import { IFriendListProps } from "../../types/friend.types";
import { styles } from "./friend-list.styles";
export function FriendList(props: IFriendListProps) {
	const { variant, array } = props;

	function getLabel() {
		let buttonLabel = "";
		let listLabel = "";
		switch (variant) {
			case "requests":
				buttonLabel = "Підтвердити";
				listLabel = "Запити";
				return [buttonLabel, listLabel];
			case "recommendations":
				buttonLabel = "Додати";
				listLabel = "Рекомендації";
				return [buttonLabel, listLabel];
			case "friends":
				buttonLabel = "Повідомлення";
				listLabel = "Всі друзі";
				return [buttonLabel, listLabel];
			default:
				return [buttonLabel, listLabel];
		}
	}

	return (
		<View style={styles.listContainer}>
			<View style={styles.topTextBlock}>
				<Text
					style={{
						fontFamily: "GTWalsheimPro-Medium",
						fontSize: 17,
						color: "#070A1C",
					}}
				>
					{getLabel()[1]}
				</Text>
				<TouchableOpacity style={{ gap: 10 }}>
					<Text
						style={{
							fontFamily: "GTWalsheimPro-Medium",
							fontSize: 17,
							color: "#543C52",
						}}
					>
						Дивитись всі
					</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.friendList}>
				
				<FlatList
					style={{ gap: 8 }}
					data={array ? [array[0], array[1]] : undefined}
					renderItem={({ item }) => {
						return (
							<FriendCard
								image={item.image}
								firstname={item.firstname}
								lastname={item.lastname}
								username={item.username}
								buttonLabel={getLabel()[0]}
							/>
						);
					}}
				/>
			</View>
		</View>
	);
}
