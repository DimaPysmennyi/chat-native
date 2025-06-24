import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./post.styles";
import { IPost, IPostProps } from "../../types/post.types";
import { avatars } from "../../../../../assets/avatars/avatars";
import { DotsIcon, EyeIcon, LikeIcon } from "../../../../shared/ui/icons";
import { useAuthContext } from "../../../auth/tools/context";
import { useEffect, useState } from "react";
import { PostSettingsModal } from "../post-settings-modal/post-settings-modal";
import { useUserById } from "../../../../shared/hooks";
import { BASE_IMAGE_URL } from "../../../../shared/tools/requests";
import { useRouter } from "expo-router";
import { IImage } from "../../types/post.types";

// Надо файлик PostCard с отображением одного поста, есть PostList с отображением масива постов

const PostImage = (imageObject: { image: IImage }) => {
	const { image } = imageObject;
	console.log(image);
	return (
		<Image
			source={{uri: `${BASE_IMAGE_URL}/${image.filename}`}}
			style={styles.imageHalf}
		/>
	);
};

const PostTag = (tagObject: { tag: string }) => {
	const { tag } = tagObject;
	return <Text style={styles.hashtags}>{tag}</Text>;
};

export function PostCard(props: IPost) {
	const { id, title, content, tags, images, likes, views, userId } = props;

	const { user } = useAuthContext();

	const { user: postOwner, error } = useUserById(userId);

	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const splitedImageList = [];
	const splitedTagsList = [];

	if (tags) {
		const splitedTags = tags.split(" ");
		for (let tag of splitedTags) {
			splitedTagsList.push(tag);
		}
	}

	const router = useRouter();

	return (
		<View style={styles.postContainer}>
				<TouchableOpacity
				// style={{flex: 1, flexDirection: "row",}}
					onPress={() => {
						router.replace(`/profile/${postOwner?.id}`);
					}}
				>
			<View style={styles.postHeader}>
					<View style={styles.userInfo}>
						<Image
							source={
								postOwner?.image
									? {
											uri: `${BASE_IMAGE_URL}/${postOwner?.image}`,
									  }
									: avatars.avatar
							}
							style={styles.avatar}
						/>
						<Text style={styles.username}>
							{postOwner?.username}
						</Text>
					</View>
					<PostSettingsModal
						post={props}
						isVisible={isModalVisible}
						onClose={() => setIsModalVisible(false)}
					/>
					{user?.id === userId ? (
						<DotsIcon
							width={20}
							height={20}
							fill={"#81818D"}
							onPress={() => setIsModalVisible(true)}
						/>
					) : undefined}
			</View>
				</TouchableOpacity>

			<View style={styles.postBody}>
				<Text style={styles.text}>{title}</Text>
				<Text style={styles.text}>{content}</Text>

				{tags && (
					<FlatList
						data={splitedTagsList}
						renderItem={({ item }) => <PostTag tag={item} />}
					/>
				)}

				{images && (
					<View style={styles.imageGrid}>
						<View style={styles.row}>
							<FlatList
								data={images}
								renderItem={({ item }) => (
									<PostImage image={item} />
								)}
							/>
						</View>
					</View>
				)}
			</View>

			<View style={styles.postFooter}>
				<View style={{ flexDirection: "row", gap: 4 }}>
					<LikeIcon width={20} height={20} fill={"#81818D"} />
					<Text style={styles.footerText}> {likes} Вподобань</Text>
				</View>
				<View style={{ flexDirection: "row", gap: 4 }}>
					<EyeIcon
						width={20}
						height={20}
						fill={"#81818D"}
						stroke={"#81818D"}
					/>
					<Text style={styles.footerText}>{views} Переглядів</Text>
				</View>
			</View>
		</View>
	);
}
