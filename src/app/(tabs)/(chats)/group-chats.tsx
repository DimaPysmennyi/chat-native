import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../shared/ui/header";
import { StatusBar } from "expo-status-bar";
import { ChatsHeader } from "../../../modules/chats/ui/chats-header";
import { ScrollView } from "react-native-virtualized-view";
// import { Chat } from "../../../modules/chats/ui/chat";
import { useSocketContext } from "../../../modules/chats/context/context.socket";
import { Redirect } from "expo-router";
import { MessagesComponent } from "../../../modules/chats/ui/messages";



export default function GroupChats() {
	const {getChats} = useSocketContext();
	const {chats} = getChats();
	const groupChats = chats.filter((chat) => {
		return chat.isPersonalChat === false;
	})
	return (
		<SafeAreaView>
			<ScrollView overScrollMode="never">
			<StatusBar style="auto"/>
			<Header add="group-chat"/>
			<ChatsHeader currentState="group chats"/>
			<MessagesComponent chats={groupChats}
			/>
			</ScrollView>
		</SafeAreaView>
	);
}


