import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { RegisterFormStepOne } from "../../../modules/auth/ui/register-form/register-form-step-one";
import { COLORS } from "../../../shared/ui/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NewGroup } from "../../../modules/chats/ui/chat-modal/newgroup";

export default function RegisterStepOne() {
	return (
		
		<SafeAreaView
			style={{
				backgroundColor: "#E9E5EE",
				flex: 1,
			}}
		>
			<KeyboardAwareScrollView
				keyboardShouldPersistTaps={"handled"}
				enableOnAndroid
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: "center",
					alignItems: "center",
					gap: 30,
				}}
				style={{
					flex: 1,
				}}
			>
				<StatusBar style="auto" />
				<RegisterFormStepOne />
				{/* <Text style={{color: COLORS.white, fontSize: 20}}>Already registered? <Link href="/login" style={{color: COLORS.blue}}>Login</Link></Text> */}
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
}
