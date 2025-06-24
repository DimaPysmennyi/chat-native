import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-virtualized-view";
import { Header } from "../../../shared/ui/header";
import { FriendList } from "../../../modules/friends/ui/friend-list";
import { useAuthContext } from "../../../modules/auth/tools/context";
import { useAllFriends } from "../../../modules/friends/hooks/useAllFriends";
import { useAllUsers } from "../../../shared/hooks";
import { FriendHeader } from "../../../modules/friends/ui/friend-header";
import { Text } from "react-native";

export default function Friends(){
	const { user } = useAuthContext();
	const { users: allUsers } = useAllUsers();
	if (user){
		var friends = useAllFriends(user?.id).friends
	}
    return (
        <SafeAreaView>
			<StatusBar style="dark" />
			<ScrollView
				contentContainerStyle={{alignItems: 'center', backgroundColor: '#FAF8FF'}}
				alwaysBounceVertical={false}
				overScrollMode="never"
			>
			<Header/>

			<FriendHeader page={"Головна"}/>
            
			{friends ? <FriendList variant="requests" array={friends}/>: <Text>No requests</Text>}
            {allUsers ? <FriendList variant="recommendations" array={allUsers}/> : <Text>No recommendations</Text>}
            {friends ? <FriendList variant="friends" array={friends}/>: <Text>No friends</Text>}
        </ScrollView>
		</SafeAreaView>
    )
}