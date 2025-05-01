import { TextInputProps } from "react-native";

export interface IInputProps extends TextInputProps {
    label?: string,
    placeholder?: string,
    error?: string,
    value?: string,
}