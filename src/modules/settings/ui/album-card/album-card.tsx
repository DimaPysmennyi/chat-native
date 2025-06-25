import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./album-card.styles";
import { IAlbum } from "../../types/settings.types";
import { COLORS } from "../../../../shared/ui/colors";
import { ImageButton } from "../../../../shared/ui/button";
import { DotsIcon, EyeIcon, PlusIcon } from "../../../../shared/ui/icons";
import { useEffect, useState } from "react";
import { pickImage } from "../../../../shared/tools/pick-image";
import { useUpdateAlbum } from "../../hooks";
import { BASE_IMAGE_URL } from "../../../../shared/tools/requests";

export function AlbumCard(props: IAlbum) {
	const { id, name, topic, year, images } = props;
	const [albumImages, setAlbumImages] = useState<string[]>(
		images ? images.split(" ") : []
	);

	async function handleAddImage() {
		try {
			const selectedImages = await pickImage({
				allowsMultipleSelection: true,
				base64: true,
			});

			if (selectedImages && selectedImages.length > 0) {
				const base64Images = selectedImages
					.filter((img) => img.base64)
					.map((img) => `data:image/png;base64,${img.base64}`);

				const newImages = [...albumImages, ...base64Images];
				setAlbumImages(newImages);

				await useUpdateAlbum({ images: newImages.join(" "), id });
			}
		} catch (error) {
			console.error("Error picking images:", error);
		}
	}

	return (
		<View style={styles.albumCard}>
			<View style={styles.nameBlock}>
				<Text
					style={{
						fontSize: 16,
						color: COLORS.blue,
						fontFamily: "GTWalsheimPro-Medium",
					}}
				>
					{name}
				</Text>
				<View
					style={{
						flexDirection: "row",
						gap: 24,
						alignItems: "center",
					}}
				>
					<ImageButton onPress={() => console.log("eye")}>
						<EyeIcon
							height={20}
							width={20}
							fill={"#543C52"}
							stroke={COLORS.purple}
						/>
					</ImageButton>
					<TouchableOpacity>
						<DotsIcon
							height={20}
							width={20}
							fill={COLORS.blueOpacity}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.infoBlock}>
				<Text
					style={{
						fontSize: 16,
						color: COLORS.blue,
						fontFamily: "GTWalsheimPro-Regular",
					}}
				>
					{topic}
				</Text>
				<Text
					style={{
						fontSize: 16,
						color: COLORS.blueOpacity,
						fontFamily: "GTWalsheimPro-Regular",
					}}
				>
					{year} рік
				</Text>
			</View>
			<Text
				style={{
					fontSize: 16,
					color: COLORS.blue,
					fontFamily: "GTWalsheimPro-Medium",
				}}
			>
				Фотографії
			</Text>

			<View
				style={
					albumImages.length > 0
						? styles.imagesContainer
						: styles.emptyImagesContainer
				}
			>
				{albumImages.length > 0 &&
					albumImages.map((image, index) => (
						<Image
							key={`img-${index}-${image.substring(0, 10)}`}
							source={{ uri: `${BASE_IMAGE_URL}/${image}` }}
							style={styles.image}
						/>
					))}
				<View style={styles.addImage}>
					<ImageButton onPress={() => console.log("plus")}>
						<PlusIcon
							height={20}
							width={20}
							fill={"#543C52"}
							onPress={handleAddImage}
						/>
					</ImageButton>
				</View>
			</View>
		</View>
	);
}
