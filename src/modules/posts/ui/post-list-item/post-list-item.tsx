import { IPost } from "../../types";
import { PostCard } from "../post-card";

export function PostListItem(item: IPost) {
	return (
		<PostCard
			avatar="avatar1"
			username="X_AE_A-13"
            title={item.title}
			text={item.content}
			hashtags={item.tags}
			images={item.images}
			likes={item.likes}
			views={item.views}
		></PostCard>
	);
}
