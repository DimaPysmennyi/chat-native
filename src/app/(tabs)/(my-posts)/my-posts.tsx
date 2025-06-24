import { ScrollView } from "react-native-virtualized-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../shared/ui/header";
import { PostCard } from "../../../modules/posts/ui/post-card";
import { StatusBar } from "expo-status-bar";
import { useAllPosts } from "../../../modules/posts/hooks/";
import { PostListItem } from "../../../modules/posts/ui/post-list-item";
import { usePostContext } from "../../../modules/posts/context/context";
import { Text, View } from "react-native";
import { useAuthContext } from "../../../modules/auth/tools/context";
import { IPost } from "../../../modules/posts/types";
import { GET } from "../../../shared/tools/requests";
import { useEffect, useState } from "react";

async function updatePosts(setPosts: React.Dispatch<React.SetStateAction<IPost[] | null>>, id: number) {
	try {
		const response = await GET<IPost[]>({
			endpoint: `api/posts/users/${id}`,
		});

		if (response.status == "error") {
			console.log(response.message);
			return;
		}
		setPosts(response.data);
		} catch (error) {
			console.error(error);
	}
	
}

export default function MyPosts() {
	const {user} = useAuthContext()
	let [posts, setPosts] = useState<IPost[] | null>([]);

	useEffect(() => {
		if (user) {
			updatePosts(setPosts, user.id)
		}
	}, []);

	return (
		<SafeAreaView>
			<StatusBar style="dark" />
			<ScrollView style={{ gap: 8 }} alwaysBounceVertical={false} overScrollMode="never">
				<Header />
				
					{posts ? posts.map((item) => (
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
					)) : <Text style={{fontSize: 20, fontFamily: "GTWalsheimPro-Medium", padding: 16}}>У вас ще немає постів</Text>}
				
			</ScrollView>
		</SafeAreaView>
	);
}
