import { View, Text, FlatList } from "react-native";
import { useAuthContext } from "../../../auth/tools/context";
import { styles } from "./my-albums.styles";
import { ImageButton } from "../../../../shared/ui/button";
import { PlusIcon } from "../../../../shared/ui/icons";
import { IAlbum, IMyAlbumsProps } from "../../types/settings.types";
import { AlbumCard } from "../album-card";
import { useEffect, useState } from "react";

export function MyAlbums(props: IMyAlbumsProps) {
	const { user } = useAuthContext();
	const { onCreateAlbum } = props;

	if (user) {
		return user?.albums.length < 1 ? (
			<View style={styles.noAlbums}>
				<Text style={styles.noAlbumText}>Немає ще жодного альбому</Text>
				<ImageButton onPress={() => onCreateAlbum()}>
					<PlusIcon height={20} width={20} fill={"#543C52"} />
				</ImageButton>
			</View>
		) : (
			<FlatList data={user?.albums} renderItem={({ item }) => <AlbumCard name={item.name} topic={item.topic} year="2025" id={item.id} images={item.images}/>}/>
		);
	}
	else {
		return
	}
}
