import { useEffect, useState } from "react";
import { View } from "react-native";
import { useAuthContext } from "../../../auth/tools/context";
import { AlbumsModal } from "../albums-modal-settings/album-modal-settings";
import { MyPhotos } from "../my-photos";
import { MyAlbums } from "../my-albums";
import { SettingsHeader } from "../settings-header/settings-header";
import { IAlbum } from "../../types/settings.types";
import { GET } from "../../../../shared/tools/requests";

async function getAlbums(userId: number, setAlbums: React.Dispatch<React.SetStateAction<IAlbum[]>>){
	try{
		const response = await GET<IAlbum[]>({endpoint: `api/users/albums/${userId}`});
		if (response.status == "error"){
			console.log(response.message);
			return
		}
		setAlbums(response.data)
	} catch(error){
		console.log(error);
	}
}


export function AlbumsSettings() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const { user } = useAuthContext();
	const [albums, setAlbums] = useState<IAlbum[]>([])

	useEffect(() => {
		if (user){
			getAlbums(user?.id, setAlbums)
		}
	}, [])

	return (
		<View style={{ gap: 8 }}>
			<SettingsHeader currentState="albums"/>
			
			<AlbumsModal
				isVisible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
				title="Створити альбом"
			/>
			<MyPhotos />
			<MyAlbums albums={albums} onCreateAlbum={() => setIsModalVisible(true)} />
		</View>
	);
}
