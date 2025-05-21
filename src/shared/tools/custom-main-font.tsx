import { useFonts } from "expo-font";

export const customMainFonts = () => {
	return useFonts({
		"GTWalsheimPro-Regular": require("../../../assets/fonts/GTWalsheimPro-Regular.ttf"),
		"GTWalsheimPro-Medium": require("../../../assets/fonts/GTWalsheimPro-Medium.ttf"),
		"GTWalsheimPro-Bold": require("../../../assets/fonts/GTWalsheimPro-Bold.ttf"),
	});
};
