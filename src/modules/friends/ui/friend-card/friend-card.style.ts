import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";


export const styles = StyleSheet.create({
    card: {
        width: 360,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CDCED2',
        paddingVertical: 16,
        gap: 16,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 50
    },
    name: {
        fontFamily: 'GTWalsheimPro-Bold',
        fontSize: 24,
        color: COLORS.blue
    },
    username: {
        fontFamily: 'GTWalsheimPro-Medium',
        fontSize: 16,
        color: COLORS.blue
    },
    userInfo: {
        gap: 24,
        height:  175,
        alignItems: 'center'
    },
    buttons: {
        gap: 16,
        flexDirection: 'row',
        height: 40
    },
    firstButton:{
        width: 'auto',
        height: 40,
        backgroundColor: COLORS.purple,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 100,
        justifyContent: 'center',
        gap: 8
    },
    secondButton:{
        width: 'auto',
        height: 40,
        backgroundColor: "#FFFFFF",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: COLORS.purple,
        justifyContent: 'center'
    }
});
