import { View } from "react-native";
import { IMAGES } from "../../../../shared/ui/images";
import { Button, ImageButton } from "../../../../shared/ui/button";
import { ImageType } from "../../../../shared/ui/button/imageButton.types";
import { styles } from "./header.styles";


export function Header(){
    return(
        <View style = {styles.header}>
            <View>
                <IMAGES.LogoImage/>
            </View>
            <View style = {styles.buttons}>
                <ImageButton onPress={() => console.log('потом ссылку сюда')} type={ImageType.Plus}/>
                <ImageButton onPress={() => console.log('потом ссылку сюда2')} type={ImageType.Settings}/>
                <ImageButton onPress={() => console.log('потом ссылку сюда3')} type={ImageType.Exit}/>
            </View>
        </View>
    )
}