import { useState } from "react";
import { View } from "react-native";
import { useAuthContext } from "../../../auth/tools/context";
import { InitialAlbumData } from "../../types/modal.types";
import { AlbumsModal } from "../albums-modal-settings/album-modal-settings";
import { MyPhotos } from "../my-photos";
import { MyAlbums } from "../my-albums";
import { POST } from "../../../../shared/tools/requests";
import { useCreateAlbum } from "../../hooks/useCreateAlbum";

export function AlbumsSettings() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const { user } = useAuthContext();
	const userId = user?.id;

	function onSubmit(data: InitialAlbumData) {
		useCreateAlbum(data);
	}

	return (
		<View style={{ gap: 8 }}>
			<AlbumsModal
				isVisible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
				title="Створити альбом"
				onSubmit={onSubmit}
			/>
			<MyPhotos />
			<MyAlbums onCreateAlbum={() => setIsModalVisible(true)} />
		</View>
	);
}
