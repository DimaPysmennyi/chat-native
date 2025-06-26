import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../shared/ui/header";
import { StatusBar } from "expo-status-bar";
import { ChatsHeader } from "../../../modules/chats/ui/chats-header";
import { ScrollView } from "react-native-virtualized-view";
import { Chat } from "../../../modules/chats/ui/chat";
import { useAuthContext } from "../../../modules/auth/tools/context";
import { useUserById } from "../../../shared/hooks";
import { useEffect } from "react";
import { IChat } from "../../../modules/chats/types/chat.types";
import { Text } from "react-native";
import { useSocketContext } from "../../../modules/chats/context/context.socket";


import { GroupSettings } from "../../../modules/chats/ui/chat-modal/newgroup/groupsettings/group-settings";
import { NewGroup } from "../../../modules/chats/ui/chat-modal/newgroup/groupparticipants";

export default function GroupChats() {
	const {getChats} = useSocketContext();
	const {chats} = getChats()
	console.log(chats);

	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView overScrollMode="never">
			<StatusBar style="auto"/>
			<Header />
			<ChatsHeader currentState="group chats"/>
			{chats[0].members ? <Chat chat={chats[0]}/> : <Text>error</Text>}
			
			</ScrollView>
		</SafeAreaView>
	);
}


