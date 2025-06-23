import { useEffect } from "react";
import { useAuthContext } from "../../../auth/tools/context";
import { useAllFriends } from "../../../friends/hooks/useAllFriends";
import { View, Text, FlatList, Image } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { FriendsIcon } from "../../../../shared/ui/icons/tab-icons";
import { COLORS } from "../../../../shared/ui/colors";
import { styles } from "./contacts.styles";
import { Input } from "../../../../shared/ui/input";
import { IUser } from "../../../auth/tools/context/context.types";

function ContactCard(props: { item: IUser }) {
	const { item } = props;
	return (
		<View style={styles.contactCard}>
			<Image width={46} height={46} source={{ uri: item.image }} />
			<Text>
				{item.firstname} {item.lastname}
			</Text>
		</View>
	);
}

export function ContactsComponent() {
	const { user } = useAuthContext();
	let friends;
	useEffect(() => {
 		if (user) {
			friends = useAllFriends(user.id);
		}
	}, [user]);

	return (
		<ScrollView>
			<View style={styles.titleView}>
				<FriendsIcon width={20} height={20} fill={COLORS.blueOpacity} />
				<Text style={styles.titleText}>Контакти</Text>
			</View>
			<Input
				style={{ width: "100%", height: 42, borderRadius: 10 }}
				label="Пошук"
			/>
			<FlatList
				data={friends}
				renderItem={({ item }) => {
					return <ContactCard item={item} />;
				}}
			></FlatList>
		</ScrollView>
	);
}
