import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { EnumMap, ImageType } from './imageButton.types';
import { styles } from './ImageButton.style';

interface Props {
    onPress: () => void
    type: ImageType
}
  
export function ImageButton({ onPress, type }: Props) {
    const Picture = EnumMap[type]
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonIMG}>
            <Picture/>
        </TouchableOpacity>
    )
}

