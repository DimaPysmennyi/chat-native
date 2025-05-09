import { View } from "react-native";
import { ImageButton } from "../../../shared/ui/button";
import { styles } from "./header.styles";
import { LogoIcon } from "../icons/logo-icon";
import { PlusIcon } from "../icons/plus-icon";
import { SettingsIcon } from "../icons/settings-icon";
import { ExitIcon } from "../icons/exit-icon";
import { Link } from "expo-router";

export function Header() {
	return (
		<View style={styles.header}>
			<View>
				<LogoIcon height={18} width={145} fill={"#543C52"} />
			</View>
			<View style={styles.buttons}>
				<ImageButton>
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
