import { SafeAreaView } from "react-native-safe-area-context";
import { RegisterFormStepTwo } from "../../../modules/auth/ui/register-form-step-two";

export default function RegisterStepTwo(){
    return (
        <SafeAreaView style={{backgroundColor: "#E9E5EE", flex: 1, alignItems: "center", justifyContent: "center", gap: 30}}>
            <RegisterFormStepTwo/>
        </SafeAreaView>
    )
}