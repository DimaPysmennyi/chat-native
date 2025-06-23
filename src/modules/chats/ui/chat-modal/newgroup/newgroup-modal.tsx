import {  View, Text, TouchableOpacity, FlatList ,Image} from "react-native";
import { styles } from "./newgroup-modal.styles";
import { CrossIcon } from "../../../../../shared/ui/icons";
import { Input } from "../../../../../shared/ui/input";
import { ScrollView } from "react-native-virtualized-view";
import { Button } from "../../../../../shared/ui/button";
import { useAllFriends } from "../../../../friends/hooks/useAllFriends";
import { useState } from "react";

type Friends = {userId:number}

export function NewGroup({userId}:Friends){
    const {friends,error} = useAllFriends(userId)
    const [selected, setSelected] = useState<number[]>([])
    if (error) return 
    <Text>Ошибка: {error}</Text>
    if (!friends) return 
    <Text>нет друзей</Text>

    const switchedSelect = (id: number) => {
    if (selected.includes(id)) {
        setSelected(selected.filter(i => i !== id))
    } else {
        setSelected([...selected, id])
    }
}

    return (
        <View style = {styles.mainblock}>
            <View style = {styles.cross}>
                <TouchableOpacity >
						<CrossIcon width={20} height={20} fill={"#81818D"} />
				</TouchableOpacity>
            </View>
            <View style = {styles.titelblock}>
                <Text>Нова група</Text>
            </View>
            <View style = {styles.searchbar}>
                <Input />
            </View>
            <View style = {styles.selected}>
                <Text>Вибрано:{}</Text>
                {/* тут потом сколько */}
            </View>
            <View style = {styles.friendslist}>
            <ScrollView>
			<FlatList
				data={friends}
				renderItem={({ item }) => {
					return <View>
                        <Image/>
                        <Text>{item.name}</Text>
                        <TouchableOpacity onPress= {()=>switchedSelect(item.id)}>
                            <Text>{}</Text>
                        </TouchableOpacity>
                        </View>
			}}/>
            </ScrollView>
            </View>
            <View style = {styles.buttons}>
                <Button><Text>Скасувати</Text> </Button>
                <Button><Text>Далі</Text> </Button>
            </View>
        </View>
    )
}
