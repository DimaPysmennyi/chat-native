import { View, Text, Image, FlatList } from "react-native";
import { styles } from "./post.styles";
import { IPost, IPostProps } from "../../types/post.types";
import { avatars } from "../../../../../assets/avatars/avatars";
import { DotsIcon, EyeIcon, LikeIcon } from "../../../../shared/ui/icons";
import { useAuthContext } from "../../../auth/tools/context";
import { useEffect, useState } from "react";
import { PostSettingsModal } from "../post-settings-modal/post-settings-modal";
import { useUserById } from "../../../../shared/hooks";

// Надо файлик PostCard с отображением одного поста, есть PostList с отображением масива постов

const PostImage = (imageObject: { image: string }) => {
	const { image } = imageObject;
	return (
		<Image
		source={{
			uri: image,
		}}
		style={styles.imageHalf}
		/>
	);
};

const PostTag = (tagObject: { tag: string }) => {
	const { tag } = tagObject;
	return <Text style={styles.hashtags}>{tag}</Text>;
};

export function PostCard(props: IPost) {
	const {
		id,
		title,
		content,
		tags,
		images,
		likes,
		views,
		userId,
	} = props;

	const { user } = useAuthContext();
	const { user: postOwner, error } = useUserById(userId);


	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const splitedImageList = [];
	const splitedTagsList = [];

	if (images) {
		const splitedImage = images.split(" ");
		for (let image of splitedImage) {
			splitedImageList.push({ image });
		}
	}

	if (tags) {
		const splitedTags = tags.split(" ");
		for (let tag of splitedTags) {
			splitedTagsList.push({ tag });
		}
	}

	return (
		<View style={styles.postContainer}>
			<View style={styles.postHeader}>
				<View style={styles.userInfo}>
					<Image source={avatars.avatar} style={styles.avatar} />
					<Text style={styles.username}>{postOwner?.username}</Text>
				</View>
				<PostSettingsModal post={props} isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}/>
				{user?.id === userId ? (
					<DotsIcon
						width={20}
						height={20}
						fill={"#81818D"}
						onPress={() => setIsModalVisible(true)}
					/>
				) : undefined}
			</View>

			<View style={styles.postBody}>
				<Text style={styles.text}>{title}</Text>
				<Text style={styles.text}>{content}</Text>

				{tags && (
					<FlatList
						data={splitedTagsList}
						renderItem={({ item }) => <PostTag tag={item.tag} />}
					/>
				)}

				{images && (
					<View style={styles.imageGrid}>
						<View style={styles.row}>
							<FlatList
								data={splitedImageList}
								renderItem={({ item }) => (
									<PostImage image={item.image} />
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
					<EyeIcon width={20} height={20} fill={"#81818D"} />
					<Text style={styles.footerText}>{views} Переглядів</Text>
				</View>
			</View>
		</View>
	);
}
