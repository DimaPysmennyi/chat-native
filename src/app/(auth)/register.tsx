import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function Register(){
    return (
        <SafeAreaView>
            <StatusBar style="auto"/>
            <Text>Registration</Text>
            <Link href="/login">Login</Link>
        </SafeAreaView>
    )
}