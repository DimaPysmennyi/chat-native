import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-virtualized-view";
import { View, Text } from "react-native";
import { Header } from "../../../shared/ui/header";
import { FriendCard } from "../../../modules/friends/ui/friend-card";
import { FriendHeader } from "../../../modules/friends/ui/friend-header";
import { useAllUsers, useUserById } from "../../../shared/hooks";
import { useAllRequests } from "../../../modules/friends/hooks/useAllRequests";
import { useAuthContext } from "../../../modules/auth/tools/context";
import { useEffect, useState } from "react";
import { IUser } from "../../../modules/auth/tools/context/context.types";
import { IFriendship } from "../../../modules/friends/types/friend.types";
import { useAcceptRequest } from "../../../modules/friends/hooks/useAcceptRequest";
import { useRejectRequest } from "../../../modules/friends/hooks/useRejectRequest";
import { GET } from "../../../shared/tools/requests";

async function acceptFriend(id: number) {
	try {
		const response = await GET<IFriendship>({
			endpoint: `api/friends/accept-request/${id}`,
		});
		if (response.status == "error") {
			console.log(response.message);
			return;
		}
	} catch (error) {
		const err = error instanceof Error ? error.message : undefined;
		console.log(err);
	}
}

async function rejectFriend(id: number) {
	try {
		const response = await GET<IFriendship>({
			endpoint: `api/friends/reject-request/${id}`,
		});
		if (response.status == "error") {
			console.log(response.message);
			return;
		}
	} catch (error) {
		const err = error instanceof Error ? error.message : undefined;
	}
}

export default function Requests() {
	const { user } = useAuthContext();
	const [users, setUsers] = useState<IUser[]>();

	if (user) {
		var { requests } = useAllRequests(user.id);
	}

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
					{requests ? (
						requests.map((item) => {
							return (
								<FriendCard
									key={item.profile1.id}
									image={item.profile1.image}
									firstname={item.profile1.firstname}
									lastname={item.profile1.lastname}
									username={item.profile1.username}
									buttonLabel={"Додати"}
									onFirstButtonPress={() => {
										acceptFriend(item.id);
									}}
									onSecondButtonPress={() => {
										rejectFriend(item.id);
									}}
								/>
							);
						})
					) : (
						<Text>Немає запитів</Text>
					)}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
