import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../shared/ui/header";
import { StatusBar } from "expo-status-bar";
import { ChatsHeader } from "../../../modules/chats/ui/chats-header";
import { ScrollView } from "react-native-virtualized-view";
import { Chat } from "../../../modules/chats/ui/chat";
import { GroupSettings } from "../../../modules/chats/ui/chat-modal/newgroup/groupsettings/group-settings";
import { NewGroup } from "../../../modules/chats/ui/chat-modal/newgroup/groupparticipants";

export default function GroupChats() {
	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView overScrollMode="never">
			<StatusBar style="auto"/>
			<Header />
			<ChatsHeader currentState="group chats"/>
			<Chat/>
			<GroupSettings isVisible={true} onClose={function (): void {
				throw new Error("Function not implemented.");
			} } id={0} name={""} avatar={""}></GroupSettings>
			{/* <NewGroup isVisible={true} onClose={()=>{console.log(1)}}/> */}
			</ScrollView>
		</SafeAreaView>
	);
}


