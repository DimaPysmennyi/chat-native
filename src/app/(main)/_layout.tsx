import { Stack } from "expo-router";

export default function MainLayout(){
    return(
        <Stack screenOptions={{
            headerShown: false
        }}
        initialRouteName="main">
        </Stack>
    )
}