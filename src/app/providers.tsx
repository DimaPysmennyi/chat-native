import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthContextProvider } from "../modules/auth/tools/context";
import { customMainFonts } from "../shared/tools/custom-main-font";
import { PostContextProvider } from "../modules/posts/context/context";

export function Providers({ children }: { children: ReactNode }) {
	const [fontsLoaded] = customMainFonts();

	if (!fontsLoaded) return null;
	return (
		<SafeAreaProvider>
			<PostContextProvider>
				<AuthContextProvider>{children}</AuthContextProvider>
			</PostContextProvider>
		</SafeAreaProvider>
	);
}
