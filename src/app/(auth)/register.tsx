import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { RegisterForm } from '../../modules/auth/ui/register-form/register-form';
import { COLORS } from '../../shared/ui/colors';

export default function Register(){
    return (
        <SafeAreaView style={{backgroundColor: "#000000", flex: 1, alignItems: "center", justifyContent: "center", gap: 30}}> 
            <StatusBar style="auto"/>
            <RegisterForm/>
            <Text style={{color: COLORS.white, fontSize: 20}}>Already registered? <Link href="/login" style={{color: COLORS.blue}}>Login</Link></Text>
        </SafeAreaView>
    )
}