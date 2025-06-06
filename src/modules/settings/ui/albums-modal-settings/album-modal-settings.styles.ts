import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";

export const styles = StyleSheet.create({
	modalContainer: {
        flex: 1,
		maxHeight: 433,
		justifyContent: "center",
		// alignItems: "center",
		paddingTop: 24,
        paddingHorizontal: 16,
		paddingBottom: 24,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        // margin: 0
	},

    modalTitle: {
        fontSize: 24,
        fontFamily: "GTWalsheimPro-Medium",
    },

	inputs: {
		gap: 16,
		paddingVertical: 24,
	},

    crossIconView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        height: 20
    },

    buttons: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
        justifyContent: "flex-end"
    },

    cancelButton: {
        width: 'auto',
        height: 40,
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 16,
        gap: 8,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: COLORS.purple,
        
    },
    confirmButton: {
        width: 'auto',
        height: 40,
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 16,
        gap: 8,
    }    
});
