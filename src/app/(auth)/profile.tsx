import { SafeAreaView } from "react-native-safe-area-context";
import {Text} from 'react-native';
import { useAuthContext } from "../../modules/auth/tools/context";

export default function Profile(){
    const {user} = useAuthContext()
    return (
        <SafeAreaView style={{backgroundColor: "#000000", flex: 1, alignItems: "center", justifyContent: "center", gap: 30}}> 
            <Text style={{color: "white"}}>{user?.username}</Text>
            <Text style={{color: "white"}}>{user?.email}</Text>
            <Text style={{color: "white"}}>{user?.firstname}</Text>
            <Text style={{color: "white"}}>{user?.lastname}</Text>
        </SafeAreaView>
    )
}