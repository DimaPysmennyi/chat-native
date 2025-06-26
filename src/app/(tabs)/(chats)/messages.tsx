import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../shared/ui/header";
import { ChatsHeader } from "../../../modules/chats/ui/chats-header";
import { MessagesComponent } from "../../../modules/chats/ui/messages";
import { ScrollView } from "react-native-virtualized-view";
import { useSocketContext } from "../../../modules/chats/context/context.socket";

export default function Messages() {
	const {getChats} = useSocketContext();
	const {chats} = getChats();
	return (
		<SafeAreaView>
			<ScrollView overScrollMode="never">
			<StatusBar style="auto"/>
			<Header />
			<ChatsHeader currentState="messages"/>
			<MessagesComponent chats={chats}
			/>
			</ScrollView>
		</SafeAreaView>
	);
}
