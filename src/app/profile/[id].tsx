import { useLocalSearchParams } from "expo-router";
import { ProfileScreen } from "../../modules/profile/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-virtualized-view";
import { Header } from "../../shared/ui/header";

export default function Profile() {
	const { id } = useLocalSearchParams();
	return (
		<SafeAreaView>
			<ScrollView contentContainerStyle={{gap: 8}}>
				<Header />
				<ProfileScreen id={+id} />
			</ScrollView>
		</SafeAreaView>
	);
}
