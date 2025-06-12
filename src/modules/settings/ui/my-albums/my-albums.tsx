import { View, Text } from "react-native";
import { useAuthContext } from "../../../auth/tools/context";
import { styles } from "./my-albums.styles";
import { ImageButton } from "../../../../shared/ui/button";
import { PlusIcon } from "../../../../shared/ui/icons";
import { IMyAlbumsProps } from "../../types/settings.types";
import { AlbumCard } from "../album-card";

export function MyAlbums(props: IMyAlbumsProps) {
	const { user } = useAuthContext();
    const {onCreateAlbum} = props

	return ( user?.albums.length != undefined || 0 ? (
		<View style={styles.noAlbums}>
			<Text style={styles.noAlbumText}>Немає ще жодного альбому</Text>
			<ImageButton onPress={() => onCreateAlbum()}>
				<PlusIcon height={20} width={20} fill={"#543C52"} />
			</ImageButton>
		</View>
	) : (
		<AlbumCard name="Настрій" theme = "Природа" year = "2025" id = {1}/>
	))
}
