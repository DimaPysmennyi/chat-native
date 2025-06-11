import { View, Image, Text } from "react-native";
import { useUserById } from "../../../shared/hooks";
import { IProfileProps } from "../types/profile.types";
import { styles } from "./profile.styles";
import { Button } from "../../../shared/ui/button";
import { COLORS } from "../../../shared/ui/colors";
import { PostListItem } from "../../posts/ui/post-list-item";
import { avatars } from "../../../../assets/avatars/avatars";

export function ProfileScreen(props: IProfileProps) {
	const { user } = useUserById(props.id);
	return (
		<View style={{gap: 8, backgroundColor: COLORS.fog, flex: 1}}>
			<View style={styles.userInfo}>
				<Image source={ avatars.avatar} style={{width: 96, height: 96, borderRadius: 50}}></Image>
				<Text style={styles.userTitle}>
					{user?.firstname} {user?.lastname}
				</Text>
				<Text style={styles.username}>@{user?.username}</Text>
				<View style={styles.infoRow}>
					<View style={styles.infoBlock}>
						<Text style={styles.infoBlockTitle}>
							{user?.posts.length}
						</Text>
						<Text style={styles.infoBlockSubtitle}>Дописи</Text>
					</View>
					<View style={styles.infoBlock}>
						<Text style={styles.infoBlockTitle}>12.1K</Text>
						<Text style={styles.infoBlockSubtitle}>Читачі</Text>
					</View>
					<View style={styles.infoBlock}>
						<Text style={styles.infoBlockTitle}>
							{user?.friends.length}
						</Text>
						<Text style={styles.infoBlockSubtitle}>Друзі</Text>
					</View>
				</View>
				<View style={styles.buttons}>
					<Button
						label="Підтвердити"
						style={{
							width: 125,
							height: 40,
							paddingVertical: 10,
							paddingHorizontal: 16,
						}}
						fontSize={14}
					></Button>
					<Button
						label="Видалити"
						textColor={COLORS.purple}
						style={{
							width: 110,
							height: 40,
							paddingVertical: 10,
							paddingHorizontal: 16,
							backgroundColor: COLORS.white,
							borderColor: COLORS.purple,
							borderWidth: 1,
						}}
					></Button>
				</View>
			</View>
			{user?.posts
				? user?.posts.map((item) => (
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
	);
}
