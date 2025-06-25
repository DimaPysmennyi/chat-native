import { StyleSheet } from "react-native"
import { COLORS } from "../../../../shared/ui/colors"

export const styles = StyleSheet.create({
    chatView: {
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        padding: 16,
        borderColor: COLORS.blueOpacity20,
        marginTop: 8,
    },
    chatHeaderView: {
        height: 58,
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderBottomColor: COLORS.blueOpacity20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    chatInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    messagesView: {
        height: 500
    },
    sendMessageView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 24,
        justifyContent: 'center'
    },
})