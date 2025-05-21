import { ScrollView } from "react-native-virtualized-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../shared/ui/header";
import { PostCard } from "../../../modules/posts/ui/post-card";
import { StatusBar } from "expo-status-bar";
import { useAllPosts } from "../../../modules/posts/hooks/";
import { PostListItem } from "../../../modules/posts/ui/post-list-item";
import { usePostContext } from "../../../modules/posts/context/context";

export default function MyPosts() {
	const { allPosts, getPosts } = usePostContext();
	return (
		<SafeAreaView>
			<StatusBar style="dark" />
			<ScrollView style={{ gap: 8 }} alwaysBounceVertical={false} overScrollMode="never">
				<Header />
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
