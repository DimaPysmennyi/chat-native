import {Dimensions, StyleSheet} from 'react-native'
import { COLORS } from '../../../../shared/ui/colors'

const screenWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    formContainer: {
        gap: 8
    },
    profileCard: {
        width: screenWidth,
        minHeight: 263,
        backgroundColor: 'white',
        borderColor: '#CDCED2',
        borderWidth: 1,
        borderRadius: 10,
        padding: 16,
        gap: 16
    },
    topTextBlock:{
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    blockTitle: {
        fontFamily: "GTWalsheimPro-Medium",
        fontWeight: 500,
        fontSize: 16,
        color: COLORS.blue,
    },
    mainSettings: {
        minHeight: 175,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24
    },
    avatar: {
        height: 96,
        width: 96,
        borderRadius: 50
    },
    nameText: {
        fontFamily: "GTWalsheimPro-Bold",
        fontSize: 24,
        fontWeight: 700,
        color: COLORS.blue,
    },
    usernameText: {
        fontFamily: "GTWalsheimPro-Medium",
        fontWeight: 500,
        fontSize: 16,
        color: COLORS.blue,
    },
    userInfo: {
        minHeight: 490,
        width: screenWidth,
        backgroundColor: 'white',
        borderColor: '#CDCED2',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 14,
        gap: 24
    },
    updateForm:{
        gap: 16,
    },










    signatureBlock:{

    },
})