import { View } from "react-native";
import { ImageButton } from "../../../shared/ui/button";
import { styles } from "./header.styles";
import { LogoIcon } from "../icons/logo-icon";
import { PlusIcon } from "../icons/plus-icon";
import { SettingsIcon } from "../icons/settings-icon";
import { ExitIcon } from "../icons/exit-icon";
import { Link, useRouter } from "expo-router";
import { SetStateAction, useState } from "react";
import { CreatePostModal } from "../../../modules/posts/ui/create-post-modal";
import { useAuthContext } from "../../../modules/auth/tools/context";
import { IPost } from "../../../modules/posts/types";
import { usePostsByUserId } from "../../../modules/posts/hooks/usePostsByUserId";

interface IHeaderProps{
	posts: IPost[];
	setPosts: React.Dispatch<SetStateAction<IPost[]>>;
}

export function Header(props: IHeaderProps) {
	const {posts, setPosts} = props;
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const {user } = useAuthContext();
	const {logout} = useAuthContext();
	const router = useRouter();
	return (
		<View style={styles.header}>
			<CreatePostModal isVisible={isVisible} onClose={() => {
				setIsVisible(false)
				if (user){
					const lastPost = usePostsByUserId(user?.id);
					if (lastPost){
						setPosts([...posts, lastPost[0]])
					}
				}
			}}/>
			<View>
				<LogoIcon height={18} width={145} fill={"#543C52"} onPress={() => router.replace('/main')} />
			</View>
			<View style={styles.buttons}>
				<ImageButton onPress={() => setIsVisible(true)}>
					<PlusIcon height={20} width={20} fill={"#543C52"} />
				</ImageButton>
				<ImageButton onPress={(event) => {event.preventDefault(); logout(); router.replace('/settings')}}>
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
