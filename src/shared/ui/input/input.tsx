import { TextInput, Text, View } from "react-native"
import { styles } from "./input.styles"
import { IInputProps } from "./input.types"
import { COLORS } from "../colors";
import { useState } from "react";

export function Input(props: IInputProps) {
    const { label, error, style, ...otherProps } = props
    const [isFocused, setIsFocused] = useState(false);
    
    return (
        <View style={styles.inputContainer}>

            {label && <Text style={styles.label}>{label}</Text>}

                <TextInput
                    style={[
                        styles.input,
                        style,
                        {backgroundColor: isFocused ? COLORS.greenSecondary : COLORS.greenPrimary}
                    ]}
                    {...otherProps}
                    placeholderTextColor={COLORS.textBisqueOpacity}
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

    return (
        <View style={styles.inputContainer}>

            {label && <Text style={styles.label}>{label}</Text>}
            
                <TextInput
                    style={[
                        styles.input,
                        style,
                        {backgroundColor: isFocused ? COLORS.greenSecondary : COLORS.greenPrimary}
                    ]}
                    {...otherProps}
                    secureTextEntry={true}
                    placeholderTextColor={COLORS.textBisqueOpacity}
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

Input.Password = Password