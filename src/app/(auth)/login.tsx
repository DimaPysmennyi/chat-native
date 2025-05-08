import { Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginForm } from "../../modules/auth/ui/login-form";
import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router';
import { COLORS } from '../../shared/ui/colors';
import { Header } from '../../modules/auth/ui/header';





export default function Login(){
    return(
        <SafeAreaView style={{backgroundColor: "#000000", flex: 1, alignItems: "center", gap: 60, justifyContent: "center"}}>
            
            <StatusBar style="auto"/>
            <LoginForm/>
            <Text style={{color: COLORS.white, fontSize: 20}}>Already registered? <Link href="/register">Register</Link></Text>
            <Header/>
        </SafeAreaView>
    )
}