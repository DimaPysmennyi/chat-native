import { useEffect, useState } from "react";
import { useAuthContext } from "../../../auth/tools/context";
import { useAllFriends } from "../../../friends/hooks/useAllFriends";
import { View, Text, FlatList, Image } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { FriendsIcon } from "../../../../shared/ui/icons/tab-icons";
import { COLORS } from "../../../../shared/ui/colors";
import { styles } from "./contacts.styles";
import { Input } from "../../../../shared/ui/input";
import { IUser } from "../../../auth/tools/context/context.types";
import { BASE_IMAGE_URL } from "../../../../shared/tools/requests";
import { avatars } from "../../../../../assets/avatars/avatars";

function ContactCard(props: { item: IUser }) {
	const { item } = props;
	return (
		<View style={styles.contactCard}>
			<Image
				style={{ width: 46, height: 46, borderRadius: 23 }}
				source={
					item.image
						? { uri: `${BASE_IMAGE_URL}/${item.image}` }
						: avatars.avatar
				}
			/>
			<Text
				style={{
					fontSize: 16,
					fontFamily: "GTWalsheimPro-Medium",
					color: COLORS.blue,
				}}
			>
				{item.firstname} {item.lastname}
			</Text>
		</View>
	);
}

export function ContactsComponent() {
	const { user } = useAuthContext();
	// const [friends, setFriends] = useState<IUser[] | null>([])

	if (user) {
		var { friends } = useAllFriends();
		// if (friends) {
		// 	setFriends(friends)
		// }
	}

	return (
		<View>
			<View style={styles.contactsView}>
				<View style={styles.titleView}>
					<FriendsIcon
						width={20}
						height={20}
						fill={COLORS.blueOpacity}
					/>
					<Text style={styles.titleText}>Контакти</Text>
				</View>

				<Input
					style={{
						width: "100%",
						height: 42,
						borderRadius: 10,
						borderColor: COLORS.blueOpacity20,
					}}
					placeholder="Пошук"
				/>
				<ScrollView
					style={{ width: "100%", justifyContent: "center" }}
					overScrollMode="never"
				>
					{friends && friends.length != 0 ? (
						<FlatList
							data={friends}
							renderItem={({ item }) => {
								return <ContactCard item={item} />;
							}}
						></FlatList>
					) : (
						<Text
							style={{
								fontSize: 18,
								fontFamily: "GTWalsheimPro-Medium",
								padding: 16,
								textAlign: "center",
							}}
						>
							{"У вас немає друзів :("}
						</Text>
					)}
				</ScrollView>
			</View>
		</View>
	);
}
