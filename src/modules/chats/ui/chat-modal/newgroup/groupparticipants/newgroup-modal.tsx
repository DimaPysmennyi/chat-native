import {  View, Text, TouchableOpacity, FlatList ,Image} from "react-native";
import { styles } from "./newgroup-modal.styles";
import { CrossIcon } from "../../../../../../shared/ui/icons";
import { Input } from "../../../../../../shared/ui/input";
import { ScrollView } from "react-native-virtualized-view";
import Modal from "react-native-modal";
import { FriendItem } from "./friendItem";
import { useState } from "react";
type Friends = {userId:number}
export interface IGroupModal {
	isVisible: boolean;
	onClose: () => void;
}
//probnik menyat na useallfriends i td
const friends = [
  { id: 1, name: "biba", avatar: "https://example.com/1.jpg" },
  { id: 2, name: "boba", avatar: "https://example.com/2.jpg" },
];
export function NewGroup(props:IGroupModal){
    const { isVisible, onClose } = props;
 const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const toggleSelect = (id: number) => {
      setSelectedIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    };

    return (
        <Modal isVisible = {isVisible} style = {styles.gen}>
        <View style = {styles.mainblock}>
            <View style = {styles.crossblock}>
            <View style = {styles.cross}>
                <TouchableOpacity onPress={()=>{onClose}}>
						<CrossIcon width={20} height={20} fill={"#81818D"} />
				</TouchableOpacity>
            </View>
            </View>
            <View style = {styles.titelblock}>
                <Text style={styles.title}>Нова група</Text>
            </View>
            <View style = {styles.searchbar}>
                <Input placeholder="🔍Пошук" />
            </View>
            <View style = {styles.crossblock}>
            <View style = {styles.selected}>
                <Text>Вибрано:{}</Text>
            </View>
            </View>
            <View style = {styles.friendInfo}>
            <ScrollView style={styles.listblock}>

            <FlatList
                style = {styles.listobjects}
                data={friends}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                <FriendItem
                    id={item.id}
                    name={item.name}
                    avatar={item.avatar}
                    selected={selectedIds.includes(item.id)}
                    onToggle={toggleSelect}
                />
               )}
                />
                
            </ScrollView>

            </View>
            <View style = {styles.crossblock}>
            <View style = {styles.buttons}>

                <TouchableOpacity style={styles.button1}>
                <Text style = {styles.textbutton1}>Скасувати</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.button2}>
                <Text style = {styles.textbutton2}>Далі</Text>
                </TouchableOpacity> 

            </View>
            </View>
        </View>
        </Modal>
    )
}
