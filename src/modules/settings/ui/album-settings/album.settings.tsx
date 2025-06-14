import { useState } from "react";
import {View} from "react-native";
import { useAuthContext } from "../../../auth/tools/context";
import { InitialAlbumData } from "../../types/modal.types";
import { AlbumsModal } from "../albums-modal-settings/album-modal-settings";
import { MyPhotos } from "../my-photos";
import { MyAlbums } from "../my-albums";

export function AlbumsSettings() {
	const [isModalVisible, setIsModalVisible] = useState(false)
	const { user } = useAuthContext()
	const userId = user?.id

	function onSubmit(data: InitialAlbumData) {
		console.log("send data", data)
		fetch(`http://192.168.1.100:8000/api/users/create-album/${userId}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then(async (res) => {
				if (!res.ok) {
					const errorText = await res.text()
					throw new Error(`error: ${res.status} - ${errorText}`)
				}
				return res.json()
			})
			.then((response) => {
				console.log("ok", response)
			})
			.catch((error) => {
				console.error("not ok", error.message)
			})
	}

	return (
		<View style={{gap: 8}}>
			<AlbumsModal
				isVisible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
				title="Створити альбом"
				onSubmit={onSubmit}
			/>
			<MyPhotos/>
			<MyAlbums onCreateAlbum={() => setIsModalVisible(true)}/>
		</View>
	)
}


