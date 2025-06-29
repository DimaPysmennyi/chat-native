import { View } from "react-native";
import { ImageButton } from "../../../shared/ui/button";
import { styles } from "./header.styles";
import { LogoIcon } from "../icons/logo-icon";
import { PlusIcon } from "../icons/plus-icon";
import { SettingsIcon } from "../icons/settings-icon";
import { ExitIcon } from "../icons/exit-icon";
import { Link, useRouter } from "expo-router";
import { SetStateAction, useEffect, useState } from "react";
import { CreatePostModal } from "../../../modules/posts/ui/create-post-modal";
import { useAuthContext } from "../../../modules/auth/tools/context";
import { IPost } from "../../../modules/posts/types";
import { usePostsByUserId } from "../../../modules/posts/hooks/usePostsByUserId";
import { usePostContext } from "../../../modules/posts/context/context";
import { GroupSettings } from "../../../modules/chats/ui/chat-modal/newgroup/groupsettings/group-settings";
import { NewGroup } from "../../../modules/chats/ui/chat-modal/newgroup/groupparticipants";

interface IHeaderProps{
	posts?: IPost[];
	add?: "group-chat" | "chat" | "post"
}

export function Header(props: IHeaderProps) {
	const [isPostVisible, setIsPostVisible] = useState<boolean>(false);
	const [isChatVisible, setIsChatVisible] = useState<boolean>(false);
	const [isGroupChatVisible, setIsGroupChatVisible] = useState<boolean>(false);
	// const {allPosts, getPosts} = usePostContext()
	const router = useRouter();

	return (
		<View style={styles.header}>
			<CreatePostModal isVisible={isPostVisible} onClose={() => {
				setIsPostVisible(false)
			}}/>
			<NewGroup isVisible={isGroupChatVisible} onClose={() => {
				setIsGroupChatVisible(false);
			}}/>
			<View>
				<LogoIcon height={18} width={145} fill={"#543C52"} onPress={() => router.replace('/main')} />
			</View>
			<View style={styles.buttons}>
				<ImageButton onPress={() => {
					switch (props.add){
						case "chat":
							setIsPostVisible(true)
						case "group-chat":
							setIsGroupChatVisible(true);
						} 
					}}
				>
					<PlusIcon height={20} width={20} fill={"#543C52"} />
				</ImageButton>
				<ImageButton onPress={(event) => {event.preventDefault(); router.replace('/settings')}}>
					<SettingsIcon height={20} width={20} fill={"#543C52"} />
				</ImageButton>
				<ImageButton>
					<Link href="/login" onPress={(event) => {event?.preventDefault(); router.replace('/login')}}>
						<ExitIcon height={20} width={20} fill={"#543C52"} />
					</Link>
				</ImageButton>
			</View>
		</View>
	);
}
