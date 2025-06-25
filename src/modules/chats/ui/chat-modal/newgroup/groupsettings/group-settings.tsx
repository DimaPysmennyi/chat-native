import React, { useState } from "react";
import {  View, TouchableOpacity, FlatList,Text,Image } from "react-native";
import { CrossIcon, ImageIcon, PlusIcon } from "../../../../../../shared/ui/icons";
import { Input } from "../../../../../../shared/ui/input";

import Modal from "react-native-modal";
import { styles } from "./group-settings.styles";
import { ImageButton } from "../../../../../../shared/ui/button";
import { GalleryIcon } from "../../../../../../shared/ui/icons/tab-icons";
import { COLORS } from "../../../../../../shared/ui/colors";
import { ScrollView } from "react-native-virtualized-view";

type SettingsData = {
  
};

export interface IGroupModal {
	isVisible: boolean;
	onClose: () => void;
    id: number;
    name: string;
    avatar: string;
}

export function GroupSettings(props:IGroupModal){
    const { isVisible, onClose,id,name,avatar } = props;
    
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
                <View><Text>Назва</Text></View>
                <Input placeholder="🔍Пошук" />
            </View>

            <View style = {styles.imagesblock}>
                <Image source={{ uri: avatar }} style={styles.avatar} />

                <View style = {styles.buttons}>
                    <TouchableOpacity style={styles.photobutton1}>
                    <PlusIcon width={20}height={20}fill={COLORS.purple}/>
                    <Text style = {styles.textbutton1}>Додайте фото</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.photobutton1}>
                    <ImageIcon width={20}height={20}fill={COLORS.purple}/>
                    <Text style = {styles.textbutton1}>Оберіть фото</Text>
                    </TouchableOpacity> 
                </View>
                
            </View>


            <View style = {styles.crossblock}>
            <View style = {styles.selected}>
                <Text>Учасники:{}</Text>
            </View>
            </View>
            <View style = {styles.friendInfo}>
            <ScrollView style={styles.listblock}>

            <FlatList data={undefined} renderItem={undefined}                
                />
                
            </ScrollView>

            </View>
            <View style = {styles.crossblock}>
            <View style = {styles.buttons}>

                <TouchableOpacity style={styles.button1}>
                <Text style = {styles.textbutton1}>Назад</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.button2}>
                <Text style = {styles.textbutton2}>Створити групу</Text>
                </TouchableOpacity> 

            </View>
            </View>
        </View>
        </Modal>
    )
}
