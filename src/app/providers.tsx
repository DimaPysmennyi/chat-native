import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthContextProvider } from "../modules/auth/tools/context";

export function Providers({children}: {children: ReactNode}){
    return (
        <SafeAreaProvider>
            <AuthContextProvider>
                {children}
            </AuthContextProvider>
        </SafeAreaProvider>
    )
}