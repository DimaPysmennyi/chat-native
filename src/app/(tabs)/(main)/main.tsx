import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Header } from "../../../shared/ui/header";
import { Text } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { PostListItem } from "../../../modules/posts/ui/post-list-item";
import { useAllPosts } from "../../../modules/posts/hooks";
import { usePostContext } from "../../../modules/posts/context/context";
export default function MainPage() {
	const { allPosts } = usePostContext();
	return (
		<SafeAreaView>
			<StatusBar style="dark" />
			<ScrollView contentContainerStyle={{ gap: 8 }} alwaysBounceVertical={false} overScrollMode="never">
				<Header />
				<Text>Main</Text>
				{allPosts ? allPosts.map((item) => (
					<PostListItem
						key={item.id}
						id={item.id}
						title={item.title}
						topic={item.topic}
						content={item.content}
						images={item.images}
						tags={item.tags}
						likes={item.likes}
						views={item.views}
						links={item.links}
						userId={item.userId}
					/>
				)) : undefined}
			</ScrollView>
		</SafeAreaView>
	);
}
