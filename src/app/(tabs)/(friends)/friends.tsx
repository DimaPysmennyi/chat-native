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
import { useAllRequests } from "../../../modules/friends/hooks/useAllRequests";

export default function Friends(){
	const { user: contextUser } = useAuthContext();
	const { users } = useAllUsers();
	if (contextUser){
		var {friends} = useAllFriends();
		var {requests} = useAllRequests();
	}

	const allUsers = users?.filter((user) => {
		if (friends){
			for (let friend of friends){
				return friend.id !== user.id && contextUser ? user.id !== contextUser.id : undefined;
			}
		}
	})

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
            
			{requests ? <FriendList variant="requests" arrayFriends={requests}/>: <Text>No requests</Text>}
            {allUsers ? <FriendList variant="recommendations" arrayUser={allUsers}/> : <Text>No recommendations</Text>}
            {friends ? <FriendList variant="friends" arrayUser={friends}/>: <Text>No friends</Text>}
        </ScrollView>
		</SafeAreaView>
    )
}