import { SafeAreaView } from "react-native-safe-area-context";
import { ChatsHeader } from "../../../modules/chats/ui/chats-header";
import { ContactsComponent } from "../../../modules/chats/ui/contacts";
import { Header } from "../../../shared/ui/header";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-virtualized-view";

export default function Contacts() {
	return (
        <SafeAreaView>
            <ScrollView overScrollMode="never">
                <StatusBar style="auto"/>
                <Header add="chat"/>
                <ChatsHeader currentState="contacts"/>
                <ContactsComponent/>
            </ScrollView>
        </SafeAreaView>
    )
}
