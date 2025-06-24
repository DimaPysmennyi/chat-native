import { SafeAreaView } from "react-native-safe-area-context";
import { LoginForm } from "../../modules/auth/ui/login-form";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NewGroup } from "../../modules/chats/ui/chat-modal/newgroup";

export default function Login() {
	return (
		<SafeAreaView
			style={{
				backgroundColor: "#E9E5EE",
				flex: 1,
			}}
		> <NewGroup userId={0}/>
			{/* <KeyboardAwareScrollView
				keyboardShouldPersistTaps={"handled"}
				enableOnAndroid
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: "center",
					alignItems: "center",
					gap: 60,
				}}
				style={{
					flex: 1,
				}}
			>
				<StatusBar style="auto" />
				<LoginForm />
			</KeyboardAwareScrollView> */}
		</SafeAreaView>
	);
}
