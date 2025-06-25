import { Stack } from "expo-router";
import { Platform } from "react-native";

export default function ChatsLayout(){
    return(
        <Stack screenOptions={{
            headerShown: false,
            statusBarBackgroundColor: "#FFFFFF",
            statusBarStyle: Platform.OS === "android" ? "dark" : undefined
        }}
        initialRouteName="contacts">
        </Stack>
    )
}