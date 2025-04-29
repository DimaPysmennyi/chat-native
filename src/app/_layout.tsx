import { Providers } from "./providers";
import { Stack } from "expo-router";

export default function RootLayout(){
    return (
        <Providers>
            <Stack screenOptions={{headerShown: false}}></Stack>
        </Providers>
    )
}