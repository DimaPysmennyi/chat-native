import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RegisterFormStepTwo } from "../../../modules/auth/ui/register-form-step-two";
import { useRouter } from "expo-router";
import { Button } from "../../../shared/ui/button";
import { COLORS } from "../../../shared/ui/colors";

export default function RegisterStepTwo(){
    const router = useRouter()
    return (
        <SafeAreaView style={{backgroundColor: "#E9E5EE", flex: 1, alignItems: "center", justifyContent: "center", gap: 30}}>
            <Button label="back" onPress={() => router.back()} style={{backgroundColor: "transparent"}}></Button>
            <Text style={{color: COLORS.white, fontSize: 36}}>Email verification code</Text>
            <RegisterFormStepTwo/>
        </SafeAreaView>
    )
}