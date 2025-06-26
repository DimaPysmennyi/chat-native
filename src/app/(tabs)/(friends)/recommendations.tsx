import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-virtualized-view";
import { Header } from "../../../shared/ui/header";
import { StatusBar } from "expo-status-bar";
import { FriendCard } from "../../../modules/friends/ui/friend-card";
import { FriendHeader } from "../../../modules/friends/ui/friend-header";
import { useAllUsers } from "../../../shared/hooks";
import { useSendRequest } from "../../../modules/friends/hooks/useSendRequest";
import { POST } from "../../../shared/tools/requests";
import { useAuthContext } from "../../../modules/auth/tools/context";
import { IUser } from "../../../modules/auth/tools/context/context.types";

async function sendRequest(user: IUser, id: number) {
	try {
		const response = await POST({
			endpoint: `api/friends/send-request/${user?.id}`,
			body: { toId: id },
		});
		if (response.status == "error") {
			console.log(response.message);
			return;
		}
		console.log(response.data);
	} catch (error) {
		console.log(error);
	}
}

export default function Recommendations() {
	const { users: allUsers } = useAllUsers();
	const { user } = useAuthContext();

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

				<FriendHeader page={"Рекомендації"} />
				<View
					style={{
						gap: 8,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{allUsers ? (
						allUsers.map((item) => {
							if (user && item.id !== user.id){
								return (
									<FriendCard
										key={item.id}
										image={item.image}
										firstname={item.firstname}
										lastname={item.lastname}
										username={item.username}
										buttonLabel={"Додати"}
										onFirstButtonPress={() => {
											if (user) {
												sendRequest(user, item.id);
											}
										}}
									/>
								);
							}
						})
					) : (
						<Text>Немає друзів</Text>
					)}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
