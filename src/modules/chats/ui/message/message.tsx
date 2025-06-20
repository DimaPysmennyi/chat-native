import { View, Text, Image } from "react-native";
import { useAuthContext } from "../../../auth/tools/context";
import { IMessage } from "../../types/message.types";
import { useUserById } from "../../../../shared/hooks";
import { styles } from "./message.styles";
import { COLORS } from "../../../../shared/ui/colors";

export function Message(message: IMessage) {
	const { user } = useAuthContext();
	let messageAuthor = null;
	if (user != undefined) {
		if (user.id != message.authorId) {
			const { user } = useUserById(message.authorId);
			if (user) {
				messageAuthor = user;
			}
		} else {
			messageAuthor = user;
		}
	}

	return (
		<View
			style={
				messageAuthor
					? messageAuthor.id === message.authorId
						? styles.userMessageView
						: styles.anotherUserMessage
					: undefined
			}
		>
			{messageAuthor && messageAuthor.id === message.authorId ? (
				<View style={styles.userMessage}>
					<Text
						style={{
							color: COLORS.blue,
							fontSize: 14,
							fontFamily: "GTWalsheimPro-Regular",
							height: 22,
						}}
					>
						{message.content}
					</Text>
					<Text
						style={{
							color: COLORS.blueOpacity,
							fontSize: 20,
							fontFamily: "GTWalsheimPro-Regular",
						}}
					>
						{message.sendAt}
					</Text>
				</View>
			) : (
				<View style={{ gap: 4 }}>
					<Image
						source={{ uri: messageAuthor?.image }}
						width={46}
						height={46}
						borderRadius={23}
					/>
					<View style={styles.anotherUserMessage}>
						<View style={{ gap: 4 }}>
							<Text style={{
                                fontFamily: "GTWalsheimPro-Regular",
                                fontSize: 10,
                                color: COLORS.purple
                            }}>
								{messageAuthor?.firstname}{" "}
								{messageAuthor?.lastname}
							</Text>
							<Text
								style={{
									color: COLORS.blue,
									fontSize: 14,
									fontFamily: "GTWalsheimPro-Regular",
									height: 22,
								}}
							>
								{message.content}
							</Text>
						</View>
					</View>
					<Text
						style={{
							color: COLORS.blueOpacity,
							fontSize: 20,
							fontFamily: "GTWalsheimPro-Regular",
						}}
					>
						{message.sendAt}
					</Text>
				</View>
			)}
		</View>
	);
}
