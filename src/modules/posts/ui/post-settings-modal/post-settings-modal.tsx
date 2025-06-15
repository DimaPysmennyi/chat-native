import Modal from "react-native-modal";
import { styles } from "./modal.styles";
import { DotsIcon, PencilIcon, TrashIcon } from "../../../../shared/ui/icons";
import { IModalProps } from "../../types/modal.types";
import { TouchableOpacity, View, Text } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";
import { useDeletePost } from "../../hooks";

export function PostSettingsModal({ isVisible, onClose, post }: IModalProps) {
	if (post) {
		return (
			<Modal style={styles.modalContainer} isVisible={isVisible}>
				<View style={styles.dotsIconView}>
					<TouchableOpacity onPress={onClose}>
						<DotsIcon width={20} height={20} fill={"#81818D"} />
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity style={styles.editButton}>
						<PencilIcon width={20} height={20} fill={COLORS.blue} />
						<Text style={{ fontFamily: "GTWalsheimPro-Medium" }}>
							Редагувати допис
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.deleteButton}
						onPress={() => useDeletePost(post.id)}
					>
						<TrashIcon width={20} height={20} fill={COLORS.blue} />
						<Text style={{ fontFamily: "GTWalsheimPro-Medium" }}>
							Видалити публікацію
						</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		);
	}
}
