import { View, Text, FlatList, Image } from "react-native";
import { IChat } from "../../types/chat.types";
import { ScrollView } from "react-native-virtualized-view";
import { ChatsIcon } from "../../../../shared/ui/icons/tab-icons";
import { COLORS } from "../../../../shared/ui/colors";
import { styles } from "./messages.styles";
import { ChatIcon } from "../../../../shared/ui/icons";
import { useUserById } from "../../../../shared/hooks";
import { useAuthContext } from "../../../auth/tools/context";
import { BASE_IMAGE_URL } from "../../../../shared/tools/requests";
import { avatars } from "../../../../../assets/avatars/avatars";
import { Link } from "expo-router";

function Chat(props: { item: IChat }) {
	const { id, messages, name, members, isPersonalChat } = props.item;
	const { user } = useAuthContext();
	if (isPersonalChat) {
		const secondUser = members.filter((member) => {
			return member.user.id !== user?.id;
		});
		var { user: anotherUser } = useUserById(secondUser[0].user.id);
	}
	return (
		<Link href={`/chat/${id}`}>
			<View style={styles.message}>
				<Image
					style={{ width: 46, height: 46, borderRadius: 23 }}
					source={
						anotherUser?.image
							? { uri: `${BASE_IMAGE_URL}/${anotherUser?.image}` }
							: avatars.avatar
					}
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
								? `${anotherUser?.firstname} ${anotherUser?.lastname}`
								: name}
						</Text>
						{/* <Text
							style={{
								fontFamily: "GTWalsheimPro-Regular",
								fontSize: 12,
								color: COLORS.blueOpacity,
							}}
						>
							dsa
						</Text> */}
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
		</Link>
	);
}

interface IMessagesProps {
	chats: IChat[];
}

export function MessagesComponent(props: IMessagesProps) {
	const { chats } = props;
	console.log(chats);
	return (
		<ScrollView overScrollMode="never">
			<View style={styles.messagesView}>
				<ChatIcon
					width={20}
					height={20}
					fill={COLORS.white}
					stroke={COLORS.blueOpacity}
				/>
				<Text style={styles.titleText}>Повідомлення</Text>
			</View>
			<View style={{ width: "100%", justifyContent: "center" }}>
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
