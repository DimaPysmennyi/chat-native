import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { UserSettings } from "../../modules/settings/ui/user-settings/";
import { ScrollView } from "react-native-virtualized-view";
import { Header } from "../../shared/ui/header";

export default function Albums() {
	return (
		<SafeAreaView
			style={{
				backgroundColor: "#E9E5EE",
				flex: 1,
				alignItems: "center",
				gap: 60,
				justifyContent: "center",
			}}
		>
			<ScrollView overScrollMode="never">
				<StatusBar style="auto" />
				<Header/>
				<Albums/>
			</ScrollView>
		</SafeAreaView>
	);
}
