import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { useForm } from "react-hook-form";
import { AlbumData } from "../../types/modal.types";
import { AlbumsModal } from "../albums-modal-settings/album-modal-settings";
import { MyPhotos } from "../my-photos";

export function AlbumsSettings() {
	const { control, handleSubmit } = useForm<AlbumData>();
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	function onSubmit(data: AlbumData) {
		fetch("http://192.168.0.51:8000/api/users/albums", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
	}
	return (
		<View>
			<AlbumsModal
				isVisible={isModalVisible}
				onClose={() => {
					setIsModalVisible(false);
				}}
				title="Створити альбом"
				onSubmit={() => {
					console.log(11);
				}}
			/>
			<MyPhotos/>
		</View>
	);
}
