import {  View, Text, TouchableOpacity, FlatList ,Image} from "react-native";
import { styles } from "./newgroup-modal.styles";
import { CrossIcon } from "../../../../../shared/ui/icons";
import { Input } from "../../../../../shared/ui/input";
import { ScrollView } from "react-native-virtualized-view";

type Friends = {userId:number}

export function NewGroup({userId}:Friends){
    
    return (
        <View style = {styles.gen}>
        <View style = {styles.mainblock}>
            <View style = {styles.crossblock}>
            <View style = {styles.cross}>
                <TouchableOpacity >
						<CrossIcon width={20} height={20} fill={"#81818D"} />
				</TouchableOpacity>
            </View>
            </View>
            <View style = {styles.titelblock}>
                <Text style={styles.title}>Нова група</Text>
            </View>
            <View style = {styles.searchbar}>
                <Input />
            </View>
            <View style = {styles.crossblock}>
            <View style = {styles.selected}>
                <Text>Вибрано:{}</Text>
            </View>
            </View>
            <View style = {styles.friendInfo}>
            <ScrollView style={styles.listblock}>

			<FlatList data={undefined} renderItem={undefined} />

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
        </View>
    )
}
