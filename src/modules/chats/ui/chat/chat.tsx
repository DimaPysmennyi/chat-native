import { View, Text, Image, TouchableOpacity } from "react-native";
import { IChat } from "../../types/chat.types";
import { IMessage } from "../../types/message.types";
import { useAuthContext } from "../../../auth/tools/context";
import { styles } from "./chat.styles";
import {
	BackIcon,
	DotsIcon,
	ImageIcon,
	SendIcon,
} from "../../../../shared/ui/icons";
import { COLORS } from "../../../../shared/ui/colors";
import { avatars } from "../../../../../assets/avatars/avatars";
import { Input } from "../../../../shared/ui/input";
import { ImageButton } from "../../../../shared/ui/button";
import { useUserById } from "../../../../shared/hooks";
import { useEffect, useRef, useState } from "react";
import { IUser } from "../../../auth/tools/context/context.types";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Message } from "../message";
import { useSocketContext } from "../../context/context.socket";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "expo-router";
import { BASE_IMAGE_URL } from "../../../../shared/tools/requests";
import { pickImage } from "../../../../shared/tools/pick-image";

interface IChatProps {
	id: number;
}

export function ChatComponent(props: IChatProps) {
	const scrollViewRef = useRef<KeyboardAwareScrollView>(null);
	const { id } = props;
	const { user } = useAuthContext();
	const { socket, sendMessage } = useSocketContext();
	const [chat, setChat] = useState<IChat>();
	const [messages, setMessages] = useState<IMessage[]>([]);
	const [attachedImage, setAttachedImage] = useState<string>("");
	const { control, handleSubmit, resetField } = useForm<{
		content: string;
		attachedImage?: string;
	}>();
	const router = useRouter();

	async function handlePickImage() {
		const asset = await pickImage({
			allowsMultipleSelection: false,
			base64: true,
			quality: 0,
		});

		if (asset) {
			setAttachedImage(`data:image/png;base64,${asset[0].base64}`);
		}
	}

	function onSubmit(data: { content: string; attachedImage?: string }) {
		if (chat && user && socket && data.content) {
			sendMessage({
				message: {
					content: data.content,
					sentAt: new Date(),
					authorId: user?.id,
					chatGroupId: id,
					attachedImage: {
						filename: attachedImage,
					},
				},
			});
			setMessages([
				...messages,
				{
					id: messages.at(messages.length - 1)?.id,
					content: data.content,
					sentAt: new Date(),
					authorId: user?.id,
					chatGroupId: id,
				},
			]);
			resetField("content");
		}
	}

	useEffect(() => {
		if (!socket) return;
		socket.emit("joinChat", { chatId: id }, (data: any) => {
			if (data.status == "success") {
				setChat(data.data);
				setMessages(data.data.messages);
			}
			console.log(chat);
		});

		socket.on("newMessage", (data) => {
			// console.log(data)
			if (!chat) return;
			// console.log(data);
			setChat({ ...chat, messages: [...chat.messages, data] });
			router.replace(`/chat/${id}`);
			setMessages([...messages, data]);
			console.log(messages);
		});
	}, [socket]);

	useEffect(() => {
		return () => {
			socket?.emit("leaveChat", { chatId: id });
		};
	}, []);

	if (chat && chat.isPersonalChat) {
		console.log(chat.members);
		const anotherUserArray = chat.members.filter(
			(member) => member.user.id !== user?.id
		);
		var anotherUser = anotherUserArray.at(0)?.user;
	}

	if (user && chat) {
		return (
			<View style={styles.chatView}>
				<View style={styles.chatHeaderView}>
					<View
						style={{
							gap: 10,
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<TouchableOpacity
							onPress={() => router.replace("/messages")}
						>
							<BackIcon
								width={22}
								height={22}
								fill={COLORS.blueOpacity}
							/>
						</TouchableOpacity>
						<View style={styles.chatInfo}>
							<Image
								source={
									anotherUser?.image
										? `${BASE_IMAGE_URL}/${anotherUser?.image}`
										: avatars.avatar
								}
								style={{
									width: 46,
									height: 46,
									borderRadius: 100,
								}}
							/>
							<View style={{ gap: 5 }}>
								<Text
									style={{
										fontSize: 24,
										fontFamily: "GTWalsheimPro-Medium",
										color: COLORS.blue,
									}}
								>
									{chat.name
										? chat.name
										: `${anotherUser?.firstname} ${anotherUser?.lastname}`}
									{/* // ? `${members[0].firstname} ${members[0].lastname}`
                                        // : `${members[1].firstname} ${members[1].lastname}` */}
								</Text>
								<Text
									style={{
										fontSize: 14,
										fontFamily: "GTWalsheimPro-Regular",
										color: COLORS.blueOpacity,
									}}
								>
									В мережі
								</Text>
							</View>
						</View>
					</View>
					<TouchableOpacity>
						<DotsIcon
							width={20}
							height={20}
							fill={COLORS.blueOpacity}
						/>
					</TouchableOpacity>
				</View>
				<KeyboardAwareScrollView
					ref={scrollViewRef}
					onContentSizeChange={(contentHeight) => {
						if (scrollViewRef.current) {
							scrollViewRef.current.scrollToEnd();
						}
					}}
					contentContainerStyle={{ gap: 10 }}
					style={styles.messagesView}
				>
					{messages.map((message) => {
						const { id, content, sentAt, authorId, chatGroupId } =
							message;
						if (id) {
							return (
								<Message
									key={Math.floor(Math.random() * 100000)}
									id={id + 1}
									content={content}
									sentAt={sentAt}
									authorId={authorId}
									chatGroupId={chatGroupId}
								/>
							);
						}
					})}
				</KeyboardAwareScrollView>
				<View style={styles.sendMessageView}>
					<Controller
						control={control}
						name="content"
						render={({ field }) => {
							return (
								<Input
									placeholder="Повідомлення"
									style={{
										borderColor: COLORS.blueOpacity20,
										width: 223,
									}}
									onChange={field.onChange}
									onChangeText={field.onChange}
									autoCorrect={true}
								/>
							);
						}}
					/>

					<View style={{ gap: 16, flexDirection: "row" }}>
						<ImageButton onPress={handlePickImage}>
							<ImageIcon
								fill={"#543C52"}
								width={20}
								height={20}
							/>
						</ImageButton>
						<ImageButton
							onPress={handleSubmit(onSubmit)}
							style={{ backgroundColor: COLORS.purple }}
						>
							<SendIcon fill={"#543C52"} width={20} height={20} />
						</ImageButton>
					</View>
				</View>
			</View>
		);
	}
}
