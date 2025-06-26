import { useLocalSearchParams } from "expo-router";
import { ProfileScreen } from "../../modules/profile/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-virtualized-view";
import { Header } from "../../shared/ui/header";
import { Chat } from "../../modules/chats/ui/chat";

export default function Chat() {
	const { id } = useLocalSearchParams();
    const {chat} = 
	return (
		<SafeAreaView>
			<ScrollView contentContainerStyle={{gap: 8}}>
				<Header />
				<Chat chat={} />
			</ScrollView>
		</SafeAreaView>
	);
}
