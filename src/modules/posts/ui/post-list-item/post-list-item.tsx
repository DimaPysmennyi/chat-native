import { IPost } from "../../types";
import { PostCard } from "../post-card";

export function PostListItem(item: IPost) {
	return (
		<PostCard
			id={item.id}
            title={item.title}
			content={item.content}
			tags={item.tags}
			images={item.images}
			likes={item.likes}
			views={item.views}
			userId={item.userId}
		></PostCard>
	);
}
