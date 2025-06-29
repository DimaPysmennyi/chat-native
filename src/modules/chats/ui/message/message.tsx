import { View, Text, Image } from "react-native";
import { useAuthContext } from "../../../auth/tools/context";
import { IMessage } from "../../types/message.types";
import { useUserById } from "../../../../shared/hooks";
import { styles } from "./message.styles";
import { COLORS } from "../../../../shared/ui/colors";
import { avatars } from "../../../../../assets/avatars/avatars";
import { BASE_IMAGE_URL } from "../../../../shared/tools/requests";

export function Message(message: IMessage) {
	const { user } = useAuthContext();
	let messageAuthor = null;
	if (user) {
		if (user.id != message.authorId) {
			// console.log(1)
			const { user: author } = useUserById(message.authorId);
			// console.log(user);
			if (user) {
				messageAuthor = author;
			}
		} else {
			// console.log(2);
			messageAuthor = user;
		}
	}

	return (
		<View
			style={
				messageAuthor
					? messageAuthor.id === user?.id
						? styles.userMessageView
						: styles.anotherUserMessageView
					: undefined
			}
		>
			{messageAuthor && messageAuthor.id === user?.id ? (
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
							fontSize: 10,
							fontFamily: "GTWalsheimPro-Regular",
							textAlignVertical: "bottom",
						}}
					>
						{new Date(message.sentAt).toLocaleTimeString(
							["uk-UA"],
							{ hour: "2-digit", minute: "2-digit" }
						)}
					</Text>
				</View>
			) : (
				<View
					style={{
						gap: 4,
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					{/* <Text>{messageAuthor?.image}</Text> */}
					<Image
						
						source={
							messageAuthor?.image
								? {
										uri: `${BASE_IMAGE_URL}/${messageAuthor?.image}`,
								  }
								: avatars.avatar
						}
						style={{
							width: 46,
							height: 46,
							borderRadius: 23,
						}}
					/>
					<View style={styles.anotherUserMessage}>
						{message.attachedImage ? (
							<Image
								style={{flex: 1}}
								source={{
									uri: `${BASE_IMAGE_URL}/${message.attachedImage.filename}`,
								}}
							></Image>
						) : undefined}

						<View style={{ gap: 4 }}>
							<Text
								style={{
									fontFamily: "GTWalsheimPro-Regular",
									fontSize: 10,
									color: COLORS.purple,
								}}
							>
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
						<Text
							style={{
								color: COLORS.blueOpacity,
								fontSize: 10,
								fontFamily: "GTWalsheimPro-Regular",
								textAlignVertical: "bottom",
							}}
						>
							{new Date(message.sentAt).toLocaleTimeString(
								["uk-UA"],
								{ hour: "2-digit", minute: "2-digit" }
							)}
						</Text>
					</View>
				</View>
			)}
		</View>
	);
}
