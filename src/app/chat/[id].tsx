import { useLocalSearchParams } from "expo-router";
import { ProfileScreen } from "../../modules/profile/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-virtualized-view";
import { Header } from "../../shared/ui/header";
// import { Chat } from "../../modules/chats/ui/chat";
import { useSocketContext } from "../../modules/chats/context/context.socket";
import { ChatComponent } from "../../modules/chats/ui/chat";

export default function Chat() {
	const { id } = useLocalSearchParams();
    const {getChats} = useSocketContext()
	const chat = getChats().chats.at(0);
	console.log(chat);
	if (chat){
		return (
			<SafeAreaView style={{flex: 1}}>
				<ScrollView contentContainerStyle={{gap: 8}}>
					<Header />
					<ChatComponent id={+id} />
				</ScrollView>
			</SafeAreaView>
		);
	}
}
