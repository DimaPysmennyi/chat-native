import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { UserSettings } from "../../modules/settings/ui/user-settings/";

export default function Bio(){
    return (
        <SafeAreaView style={{backgroundColor: "#E9E5EE", flex: 1, alignItems: "center", gap: 60, justifyContent: "center"}}>
            <StatusBar style="auto"/>
            <UserSettings/>
        </SafeAreaView>
    )
}