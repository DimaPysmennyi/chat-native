import { TouchableOpacity, View, Text } from "react-native";
import Modal from "react-native-modal";
import { CrossIcon } from "../../../../shared/ui/icons";
import { styles } from "./details-modal.styles";
import { IDetailsForm, IDetailsModalProps } from "../../types/modal.types";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../../../shared/ui/input";
import { Button } from "../../../../shared/ui/button";
import { useUpdateUser } from "../../hooks";
import { useAuthContext } from "../../../auth/tools/context";

export function DetailsModal({ isVisible, onClose }: IDetailsModalProps) {
	const { handleSubmit, control } = useForm<IDetailsForm>();
	const {user} = useAuthContext();
	function submitInfo(data: IDetailsForm){
		console.log(user);
		if (user){
			useUpdateUser({id: user.id, ...data});
			onClose()
		}
	}
	return (
		<Modal isVisible={isVisible}>
			<View style={styles.modalContainer}>
				<View style={styles.closeButtonBox}>
					<TouchableOpacity onPress={onClose}>
						<CrossIcon width={20} height={20} />
					</TouchableOpacity>
				</View>
				<View style={styles.titleBox}>
					<Text style={styles.modalTitle}>Додай деталі про себе</Text>
				</View>
				<View style={styles.inputs}>
					<Controller
						control={control}
						name="firstname"
						render={({ field, fieldState }) => {
							return (
								<Input
									placeholder="Введіть Ваше Ім'я"
									label="Ім'я"
									onChange={field.onChange}
									onChangeText={field.onChange}
									value={field.value}
									error={fieldState.error?.message}
								/>
							);
						}}
					/>
					<Controller
						control={control}
						name="lastname"
						render={({ field, fieldState }) => {
							return (
								<Input
									placeholder="Введіть Ваше Прізвище"
									label="Прізвище"
									onChange={field.onChange}
									onChangeText={field.onChange}
									value={field.value}
									error={fieldState.error?.message}
								/>
							);
						}}
					/>
					<Controller
						control={control}
						name="username"
						render={({ field, fieldState }) => {
							return (
								<Input
									placeholder="@"
									label="Ім'я користувача"
									onChange={field.onChange}
									onChangeText={field.onChange}
									value={field.value}
									error={fieldState.error?.message}
								/>
							);
						}}
					/>
				</View>
				<View style={styles.buttonBox}>
					<Button label="Продовжити" fontSize={14} style={{width: 112, height: 40}} onPress={handleSubmit(submitInfo)}/>
				</View>
			</View>
		</Modal>
	);
}
