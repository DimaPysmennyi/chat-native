import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./frienditems.styles";


type FriendItemProps = {
  id: number;
  name: string;
  avatar: string;
  selected: boolean;
  onToggle: (id: number) => void;
};

export const FriendItem = ({ id, name, avatar, selected, onToggle }: FriendItemProps) => {
  return (
    <TouchableOpacity style={styles.friendItem} onPress={() => onToggle(id)}>
        <View style={styles.friendInfo}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <Text style={styles.friendName}>{name}</Text>
      </View>
      <View style={[styles.checkbox, selected && styles.checkboxSelected]}>
        {selected && <Text style={styles.checkmark}>✔</Text>}
      </View>
    </TouchableOpacity>
  )
} 
