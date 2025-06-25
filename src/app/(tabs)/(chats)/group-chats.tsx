import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../shared/ui/header";
import { StatusBar } from "expo-status-bar";
import { ChatsHeader } from "../../../modules/chats/ui/chats-header";
import { ScrollView } from "react-native-virtualized-view";
import { Chat } from "../../../modules/chats/ui/chat";

export default function GroupChats() {
	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView overScrollMode="never">
			<StatusBar style="auto"/>
			<Header />
			<ChatsHeader currentState="group chats"/>
			<Chat/>
			</ScrollView>
		</SafeAreaView>
	);
}


