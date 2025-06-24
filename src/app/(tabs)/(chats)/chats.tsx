import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../shared/ui/header";
import { ChatsHeader } from "../../../modules/chats/ui/chats-header";
import { MessagesComponent } from "../../../modules/chats/ui/messages";

export default function Chats() {
	return (
		<SafeAreaView>
			<StatusBar style="auto" />
			<Header />
			<ChatsHeader currentState="messages" />
			<MessagesComponent
				chats={[
					{
						id: 1,
						isPersonalChat: false,
                        name: "Chat1",
                        adminId: 1,
                        
						members: [
							{
								id: 1,
								name: "user1",
								email: "gdimon4ik10@gmail.com",
								posts: [],
								albums: [],
							},
							{
								id: 2,
								name: "user2",
								email: "communityservine@gmail.com",
								posts: [],
								albums: [],
							},
						],
						messages: [],
					},
				]}
			/>
		</SafeAreaView>
	);
}
