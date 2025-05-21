import { View } from "react-native";
import { ImageButton } from "../../../shared/ui/button";
import { styles } from "./header.styles";
import { LogoIcon } from "../icons/logo-icon";
import { PlusIcon } from "../icons/plus-icon";
import { SettingsIcon } from "../icons/settings-icon";
import { ExitIcon } from "../icons/exit-icon";
import { Link } from "expo-router";
import { useState } from "react";
import { CreatePostModal } from "../../../modules/posts/ui/create-post-modal";

export function Header() {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	return (
		<View style={styles.header}>
			<CreatePostModal isVisible={isVisible} onClose={() => {console.log(111); setIsVisible(false)}}></CreatePostModal>
			<View>
				<LogoIcon height={18} width={145} fill={"#543C52"} />
			</View>
			<View style={styles.buttons}>
				<ImageButton onPress={() => setIsVisible(true)}>
					<PlusIcon height={20} width={20} fill={"#543C52"} />
				</ImageButton>
				<ImageButton>
					<SettingsIcon height={20} width={20} fill={"#543C52"} />
				</ImageButton>
				<ImageButton>
					<Link href="/login">
						<ExitIcon height={20} width={20} fill={"#543C52"} />
					</Link>
				</ImageButton>
			</View>
		</View>
	);
}
