import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./my-photos.styles";
import { ImageIcon } from "../../../../shared/ui/icons";
import { COLORS } from "../../../../shared/ui/colors";
import { useAuthContext } from "../../../auth/tools/context";
import { BASE_IMAGE_URL } from "../../../../shared/tools/requests";

export function MyPhotos(){
    const {user} = useAuthContext()
    return (
        <View style={styles.myPhotosContainer}>
            <View style={styles.topBlock}>
                <Text style={styles.topText}>Мої фото</Text>
                <TouchableOpacity style={styles.topButton}>
                    <ImageIcon width={20} height={20} fill={COLORS.purple}/>
                    <Text style={styles.topButtonText}>Додати фото</Text>
                </TouchableOpacity>
            </View>
            {user ? 
            <Image source={{uri: `${BASE_IMAGE_URL}/${user?.image}`}} style={{width: 200, height: 200, borderRadius: 10}}/>
            :
            <Image source={{uri: 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'}} style={{width: 200, height: 200, borderRadius: 10}}/>
            }
        </View>
    )
}