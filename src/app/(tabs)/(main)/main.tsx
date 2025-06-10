import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Header } from "../../../shared/ui/header";
import { ScrollView } from "react-native-virtualized-view";
import { PostListItem } from "../../../modules/posts/ui/post-list-item";
import { usePostContext } from "../../../modules/posts/context/context";
import { useAuthContext } from "../../../modules/auth/tools/context";
import { DetailsModal } from "../../../modules/settings/ui/details-modal/details-modal";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { IPost } from "../../../modules/posts/types";
import { useRouter } from "expo-router";
export default function MainPage() {
	const { allPosts } = usePostContext();
	const { user } = useAuthContext();
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	useEffect(() => { user ? !user?.username ? setIsModalVisible(true) : undefined : undefined}, [user])
	useEffect(() => allPosts ? setPosts(allPosts) : undefined, [allPosts])
	
	let [posts, setPosts] = useState<IPost[]>();
	const router = useRouter();


	return (
		<SafeAreaView>
			<StatusBar style="dark" />
			<ScrollView
				contentContainerStyle={{ gap: 8 }}
				alwaysBounceVertical={false}
				overScrollMode="never"
			>
				<Header />
				{/* {!user?.username ? setIsModalVisible(true) : undefined} */}
				<DetailsModal isVisible={isModalVisible} onClose={() => {setIsModalVisible(false)}}/>
				<Text onPress={() => router.replace("/profile/11")}>Profile</Text>
				{allPosts
					? allPosts.map((item) => (
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
					  ))
					: undefined}
			</ScrollView>
		</SafeAreaView>
	);
}
