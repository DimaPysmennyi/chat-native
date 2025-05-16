import {
	ImagePickerOptions,
	launchImageLibraryAsync,
	requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";

export async function pickImage(options: ImagePickerOptions) {
	const result = await requestMediaLibraryPermissionsAsync();

	if (result.status === "granted") {
		const images = await launchImageLibraryAsync({
			...options,
			base64: true,
			allowsMultipleSelection: true,
		});

		if (images.assets) {
			return images.assets;
		}
	} else {
		console.log("Permission denied");
	}
}
