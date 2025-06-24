import { useState } from "react";
import { View } from "react-native";
import { useAuthContext } from "../../../auth/tools/context";
import { AlbumsModal } from "../albums-modal-settings/album-modal-settings";
import { MyPhotos } from "../my-photos";
import { MyAlbums } from "../my-albums";
import { SettingsHeader } from "../settings-header/settings-header";


export function AlbumsSettings() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const { user } = useAuthContext();

	return (
		<View style={{ gap: 8 }}>
			<SettingsHeader currentState="albums"/>
			
			<AlbumsModal
				isVisible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
				title="Створити альбом"
			/>
			<MyPhotos />
			<MyAlbums onCreateAlbum={() => setIsModalVisible(true)} />
		</View>
	);
}
