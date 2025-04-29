import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function Login(){
    return (
        <SafeAreaView>
            <StatusBar style="auto"/>
            <Text>Login</Text>
            <Link href="/register">Register</Link>
        </SafeAreaView>
    )
}