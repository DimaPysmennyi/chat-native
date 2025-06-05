import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-virtualized-view";
import { Header } from "../../../shared/ui/header";
import { FriendList } from "../../../modules/friends/ui/friend-list";

const friends = [
	{
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzahFXYLrAi5bw9kfB4m2f6x2Z4UKxTZvaQg&s",
		firstname: "Name",
		lastname: "Surname",
		username: "username",
	},
	{
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzahFXYLrAi5bw9kfB4m2f6x2Z4UKxTZvaQg&s",
		firstname: "Name",
		lastname: "Surname",
		username: "username",
	},
];

export default function Friends(){
    return (
        <SafeAreaView>
			<StatusBar style="dark" />
			<ScrollView
				contentContainerStyle={{alignItems: 'center', backgroundColor: '#FAF8FF'}}
				alwaysBounceVertical={false}
				overScrollMode="never"
			>
			<Header/>
			
            <FriendList variant="requests" array={friends}/>
            <FriendList variant="recommendations" array={friends}/>
            <FriendList variant="friends" array={friends}/>
        </ScrollView>
		</SafeAreaView>
    )
}