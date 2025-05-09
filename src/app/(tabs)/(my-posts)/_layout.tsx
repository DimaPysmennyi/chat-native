import { Stack } from "expo-router";
import { Platform } from "react-native";

export default function SettingsLayout(){
    return(
        <Stack screenOptions={{
            headerShown: false,
            statusBarBackgroundColor: "#FFFFFF",
            statusBarStyle: Platform.OS === "android" ? "dark" : undefined
        }}
        initialRouteName="my-posts">
        </Stack>
    )
}