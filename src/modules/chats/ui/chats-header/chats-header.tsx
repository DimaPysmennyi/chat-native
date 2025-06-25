import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./chats-header.styles";
import { ChatsIcon, FriendsIcon } from "../../../../shared/ui/icons/tab-icons";
import { useRouter } from "expo-router";
import { ChatIcon } from "../../../../shared/ui/icons";

interface IChatsHeaderProps {
	currentState: "contacts" | "messages" | "group chats";
}

export function ChatsHeader(props: IChatsHeaderProps) {
	const { currentState } = props;
	const router = useRouter();
	return (
		<View style={styles.header}>
			<TouchableOpacity
				style={currentState === "contacts" ? [styles.button, styles.buttonBorder] : styles.button}
				onPress={() => {
					router.replace("/contacts");
				}}
			>
				<FriendsIcon width={20} height={20} />
				<Text style={styles.buttonText}>Контакти</Text>
			</TouchableOpacity>
			<TouchableOpacity
                style={currentState === "messages" ? [styles.button, styles.buttonBorder] : styles.button}
				onPress={() => {
					router.replace("/messages");
				}}
			>
				<ChatIcon width={20} height={20} fill={'white'} stroke={'black'}/>
				<Text style={styles.buttonText}>Повідомлення</Text>
			</TouchableOpacity>
			<TouchableOpacity
                style={currentState === "group chats" ? [styles.button, styles.buttonBorder] : styles.button}
				onPress={() => {
					router.replace("/group-chats");
				}}
			>
				<ChatIcon width={20} height={20} fill={'white'} stroke={'black'}/>
				<Text style={styles.buttonText}>Групові чати</Text>
			</TouchableOpacity>
		</View>
	);
}
