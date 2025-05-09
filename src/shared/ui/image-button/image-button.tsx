import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './image-button.styles';

interface Props extends TouchableOpacityProps{}
  
export function ImageButton(props: Props) {
    return (
        <TouchableOpacity {...props} style={styles.buttonIMG}>
            {props.children}
        </TouchableOpacity>
    )
}

