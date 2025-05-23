import { Redirect } from "expo-router"

export default function Index(){
    // const {user} = useAuthContext();
    return <Redirect href={'/login'}/>
}