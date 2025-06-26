import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-virtualized-view";
import { StatusBar } from "expo-status-bar";
import { useAuthContext } from "../../../modules/auth/tools/context";
import { useAllFriends } from "../../../modules/friends/hooks/useAllFriends";
import { FriendHeader } from "../../../modules/friends/ui/friend-header";
import { Header } from "../../../shared/ui/header";
import { FriendCard } from "../../../modules/friends/ui/friend-card";

export default function AllFriends() {
	const { user } = useAuthContext();
	if (user) {
		var {friends} = useAllFriends();
	}
	console.log(friends);
	return (
		<SafeAreaView>
			<StatusBar style="dark" />
			<ScrollView
				contentContainerStyle={{
					// alignItems: "center",
					backgroundColor: "#FAF8FF",
				}}
				alwaysBounceVertical={false}
				overScrollMode="never"
			>
				<Header />

				<FriendHeader page={"Всі друзі"} />
				<View style={{ gap: 8, alignItems: "center", justifyContent: "center" }}>
					{friends ? (
						friends.map((item) => {
							return (
								<FriendCard
                                    key={item.id}
									image={item.image}
									firstname={item.firstname}
									lastname={item.lastname}
									username={item.username}
									buttonLabel={"Повідомлення"}
								/>
							);
						})
					) : (
						<Text>Немає друзів</Text>
					)}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
