import { View, Text, FlatList, Image } from "react-native";
import { IChat } from "../../types/chat.types";
import { ScrollView } from "react-native-virtualized-view";
import { ChatsIcon } from "../../../../shared/ui/icons/tab-icons";
import { COLORS } from "../../../../shared/ui/colors";
import { styles } from "./messages.styles";

function Chat(props: { item: IChat }) {
	const { messages, name, members, isPersonalChat } = props.item;
	return (
		<View style={styles.message}>
			<Image
				source={isPersonalChat ? { uri: members[1].image } : undefined}
			></Image>
			<View>
				<View style={styles.messageTitle}>
					<Text
						style={{
							fontFamily: "GTWalsheimPro-Medium",
							fontSize: 16,
							color: COLORS.blue,
						}}
					>
						{isPersonalChat
							? `${members[1].firstname} ${members[1].lastname}`
							: name}
					</Text>
					<Text
						style={{
							fontFamily: "GTWalsheimPro-Regular",
							fontSize: 12,
							color: COLORS.blueOpacity,
						}}
					>
						{messages[messages.length - 1].sendAt}
					</Text>
				</View>
				<Text
					style={{
						fontFamily: "GTWalsheimPro-Regular",
						fontSize: 14,
						color: COLORS.blue,
					}}
				>
					{messages[messages.length - 1].content}
				</Text>
			</View>
		</View>
	);
}

interface IMessagesProps{
	chats: IChat[]
}

export function MessagesComponent(props: IMessagesProps) {
	const {chats} = props;
	return (
		<ScrollView overScrollMode="never">
			<View style={styles.messagesView}>
				<ChatsIcon width={20} height={20} fill={COLORS.blueOpacity} />
				<Text style={styles.titleText}>Повідомлення</Text>
			</View>
			<View style={{width: "100%", justifyContent: "center"}}>
				<FlatList
					data={chats}
					renderItem={({ item }) => {
						return <Chat item={item} />;
					}}
				></FlatList>
			</View>
		</ScrollView>
	);
}
