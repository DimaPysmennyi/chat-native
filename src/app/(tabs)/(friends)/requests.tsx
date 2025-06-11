import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-virtualized-view";
import { View, Text } from "react-native";
import { Header } from "../../../shared/ui/header";
import { FriendCard } from "../../../modules/friends/ui/friend-card";
import { FriendHeader } from "../../../modules/friends/ui/friend-header";
import { useAllUsers } from "../../../shared/hooks";
export default function Requests() {
	const { users: allUsers } = useAllUsers();

	return (
		<SafeAreaView>
			<StatusBar style="dark" />
			<ScrollView
				contentContainerStyle={{
					alignItems: "center",
					backgroundColor: "#FAF8FF",
				}}
				alwaysBounceVertical={false}
				overScrollMode="never"
			>
				<Header />

				<FriendHeader page={"Запити"} />
				<View
					style={{
						gap: 8,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{allUsers ? (
						allUsers.map((item) => {
							return (
								<FriendCard
									key={item.id}
									image={item.image}
									firstname={item.firstname}
									lastname={item.lastname}
									username={item.username}
									buttonLabel={"Додати"}
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
