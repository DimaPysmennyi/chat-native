import Modal from "react-native-modal";
import { IDeleteFriendModalProps } from "../../types/friend.types";
import { View, Text } from "react-native";
import { styles } from "./modal.styles";
import { Button } from "../../../../shared/ui/button";
import { COLORS } from "../../../../shared/ui/colors";

export function DeleteFriendModal({
	isVisible,
	onClose,
}: IDeleteFriendModalProps) {
	return (
		<Modal isVisible={isVisible} onBackdropPress={onClose}>
			<View style={styles.modalContainer}>
				<Text style={styles.topText}>Підтвердити дію</Text>
				<Text style={styles.middleText}>
					Ви дійсно хочете видалити користувача?
				</Text>
				<View style={styles.buttons}>
					<Button
						label="Скасувати"
						style={styles.cancelButton}
						fontSize={14}
						textColor={COLORS.purple}
						onPress={onClose}
					/>
					<Button
						label="Підтвердити"
						style={styles.confirmButton}
						fontSize={14}
					/>
				</View>
			</View>
		</Modal>
	);
}
