import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Header } from "../../../shared/ui/header";
import { ScrollView } from "react-native-virtualized-view";
import { PostListItem } from "../../../modules/posts/ui/post-list-item";
import { usePostContext } from "../../../modules/posts/context/context";
import { useAuthContext } from "../../../modules/auth/tools/context";
import { DetailsModal } from "../../../modules/settings/ui/details-modal/details-modal";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { IPost } from "../../../modules/posts/types";
import { useRouter } from "expo-router";
import { GET } from "../../../shared/tools/requests";
import { useSocketContext } from "../../../modules/chats/context/context.socket";

async function updatePosts(
	setPosts: React.Dispatch<React.SetStateAction<IPost[] | null>>
) {
	try {
		const response = await GET<IPost[]>({
			endpoint: "api/posts/all",
		});
		// const posts = await response.json();
		if (response.status == "error") {
			console.log(response.message);
			return;
		}
		setPosts(response.data);
		// setPosts(response.data);
	} catch (error) {
		console.error(error);
	}
}

export default function MainPage() {
	let [posts, setPosts] = useState<IPost[] | null>([]);
	const { user } = useAuthContext();
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const { joinChat, sendMessage } = useSocketContext();

	useEffect(() => {
		user
			? !user?.username
				? setIsModalVisible(true)
				: undefined
			: undefined;
	}, [user]);

	// useEffect(() => (allPosts ? setPosts(allPosts) : undefined), [allPosts]);
	useEffect(() => {
		updatePosts(setPosts);
	}, []);

	return (
		<SafeAreaView edges={["bottom", "top"]} style={{flex: 1}}>
			<StatusBar style="dark" />
			<ScrollView
				// style={{gap: 8}}
				alwaysBounceVertical={false}
				overScrollMode="never"
			>
				<Header add="post" />
				{/* {!user?.username ? setIsModalVisible(true) : undefined} */}
				<DetailsModal
					isVisible={isModalVisible}
					onClose={() => {
						setIsModalVisible(false);
					}}
				/>
				<Text onPress={() => joinChat({ chatId: 1 })}>Join chat</Text>
				<Text
					onPress={() => {
						user
							? sendMessage({
									message: {
										content: "message",
										sentAt: new Date(),
										authorId: user?.id,
										chatGroupId: 1
									},
							  })
							: undefined;
					}}
				>
					Send
				</Text>
				<View style={{ gap: 8 }}>
					{posts
						? posts.map((item) => (
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
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
