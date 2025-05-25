import { TextInput, Text, View, TouchableWithoutFeedback } from "react-native"
import { styles } from "./input.styles"
import { IInputProps } from "./input.types"
import { COLORS } from "../colors";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "../icons";

export function Input(props: IInputProps) {
    const { label, error, style, ...otherProps } = props
    const [isFocused, setIsFocused] = useState(false);
    
    return (
        <View style={styles.inputContainer}>
            
            {label && <Text style={styles.label}>{label}</Text>}
                
                <TextInput
                    style={[
                        styles.input,   
                        style                    
                    ]}
                    {...otherProps}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            
            {error &&
                <View style={styles.errorBlock}>
                    <Text style={styles.errorText}>
                        {error}
                    </Text>
                </View>
            }

        </View>
    );
}

function Password(props: IInputProps) {
    const { label, error, style, ...otherProps } = props
    const [isFocused, setIsFocused] = useState(false);
    const [isHidden , setIsHidden] = useState(true)
    return (
        <View style={styles.inputContainer}>

            {label && <Text style={styles.label}>{label}</Text>}
            
                <TextInput
                    
                    style={style ? [style, styles.input] : styles.input}
                    {...otherProps}
                    secureTextEntry={isHidden}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                /> 
            <View style={{ position: "absolute",right:10,top:39 }}>
                    <TouchableWithoutFeedback
						onPress={() => {
							setIsHidden(!isHidden);
						}}>
						{isHidden ? (
							<EyeSlashIcon width={25} height={25} />
						) : (
							<EyeIcon width={25} height={25} />
						)}
					</TouchableWithoutFeedback>
            </View>

            {error &&
                <View style={styles.errorBlock}>
                    <Text style={styles.errorText}>
                        {error}
                    </Text>
                </View>
            }

        </View>
    );
}

Input.Password = Password


// //<View style={[styles.inputBox, containerStyles]}>
// 				{iconLeft && <View style={{ marginRight: 2 }}>{iconLeft}</View>}
// 				<TextInput style={[inputStyles, styles.input]} {...props} />
// 				{iconRight && (
// 					<View style={{ marginLeft: "auto" }}>{iconRight}</View>