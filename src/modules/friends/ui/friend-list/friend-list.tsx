import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { FriendCard } from "../friend-card";
import { IFriendListProps } from "../../types/friend.types";
import { styles } from "./friend-list.styles";

export function FriendList(props: IFriendListProps) {
	const { variant, arrayUser, arrayFriends } = props;

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
				{arrayUser ? (
					arrayUser.length > 0 ? (
						<FlatList
							style={{ gap: 8 }}
							data={arrayUser ? arrayUser.length > 1 ? [arrayUser[0], arrayUser[1]] : [arrayUser[0]] : undefined}
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
					) : undefined
				) : undefined}
				{arrayFriends ? (
					arrayFriends.length > 0 ? (
						<FlatList
							style={{ gap: 8 }}
							data={arrayFriends ? arrayFriends.length > 1 ? [arrayFriends[0], arrayFriends[1]] : [arrayFriends[0]] : undefined}
							renderItem={({ item }) => {
									return (
										<FriendCard
											image={item.profile1.image}
											firstname={item.profile1.firstname}
											lastname={item.profile1.lastname}
											username={item.profile1.username}
											buttonLabel={getLabel()[0]}
										/>
									);
							}}
						/>						
					) : undefined
				) : undefined}
			</View>
		</View>
	);
}
