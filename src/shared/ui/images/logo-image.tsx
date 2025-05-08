import {Image, ImageProps} from "react-native"

export function LogoImage(props: ImageProps){
    return(
        <Image source={require("./logo.png")} {...props}/>
    )
}

export function PlusImage(props: ImageProps){
    return(
        <Image source={require("./plus.png")} {...props}/>
    )
}

export function SettingsImage(props: ImageProps){
    return(
        <Image source={require("./Settings.png")} {...props}/>
    )
}

export function ExitImage(props: ImageProps){
    return(
        <Image source={require("./exit.png")} {...props}/>
    )
}