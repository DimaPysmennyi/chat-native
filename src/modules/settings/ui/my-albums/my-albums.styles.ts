import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";

export const styles = StyleSheet.create({
    noAlbums: {
        flexDirection: 'row',
        height: 72,
        borderRadius: 10,
        borderWidth: 1,
        padding: 16,
        gap: 16,
        backgroundColor: COLORS.white,
        borderColor: COLORS.blueOpacity20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    noAlbumText: {
        fontFamily: "GTWalsheimPro-Medium",
        fontSize: 16,
        color: COLORS.blue
    }
})