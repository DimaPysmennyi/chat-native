import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../shared/ui/header";
import { ChatsHeader } from "../../../modules/chats/ui/chats-header";
import { MessagesComponent } from "../../../modules/chats/ui/messages";
import { IChat } from "../../../modules/chats/types/chat.types";

export default function Messages() {
	return (
		<SafeAreaView>
			<StatusBar style="auto" />
			<Header />
			<ChatsHeader currentState="messages" />
			<MessagesComponent
				chats={[
					{
						id: 1,
						isPersonalChat: true,
						members: [
							{
								id: 1,
								email: "gdimon4ik10@gmail.com",
								posts: [],
								friends: [],
								albums: [],
							},
                            {
                                id: 2, 
                                email: "communityservine@gmail.com",
                                posts: [],
                                friends: [],
                                albums: []
                            }
						],
						messages: [],
					},
				]}
			/>
		</SafeAreaView>
	);
}
