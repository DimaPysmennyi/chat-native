import { SafeAreaView } from "react-native-safe-area-context";
import { PostCard } from "../../../modules/posts/ui/post-card";
import { StatusBar } from "expo-status-bar";
import { Header } from "../../../shared/ui/header";
import { ScrollView, Text, View } from "react-native";

export default function MainPage() {
	return (
		<SafeAreaView>
			<StatusBar style="dark" />
			<ScrollView contentContainerStyle={{ gap: 8 }}>
				<Header />
				<View style={{gap: 8}}>
					<PostCard
						avatar="avatar1"
						username="X_AE_A-13"
						text="Інколи найкращі ідеї народжуються в тиші 🌿  
            Природа, книга і спокій — усе, що потрібно, аби перезавантажитись."
						hashtags="#відпочинок #натхнення #життя #природа #читання #спокій #гармонія"
						images={true}
						likes={120}
						views={890}
					></PostCard>

					<PostCard
						avatar="avatar2"
						username="X_AE_A-13"
						text="буває такий настрій: просто лежиш і існуєш 😅           
            чай в одній руці, телефон в іншій, думки десь у      
            космосі 🌌 і знаєте шо? норм"
						hashtags="#вайб"
						likes={120}
						views={890}
					></PostCard>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
