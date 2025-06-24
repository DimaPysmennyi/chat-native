import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { InitialAlbumData, IAlbumModalProps } from "../../types/modal.types";
import Modal from "react-native-modal";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../../../shared/ui/input";
import { styles } from "./album-modal-settings.styles";
import { CrossIcon } from "../../../../shared/ui/icons";
import { Button } from "../../../../shared/ui/button";
import { COLORS } from "../../../../shared/ui/colors";
import { useCreateAlbum } from "../../hooks/useCreateAlbum";
import { useAuthContext } from "../../../auth/tools/context";

export function AlbumsModal(props: IAlbumModalProps) {
	const { control, handleSubmit } = useForm<InitialAlbumData>();
	const { isVisible, title, onClose } = props;
	const { user } = useAuthContext();

	function formSubmit(data: InitialAlbumData) {
		if (user) {
			const allData = {
				...data,
				userId: user?.id,
			};
			useCreateAlbum(allData);
			onClose();
			return;
		}
	}
	return (
		<Modal isVisible={isVisible}>
			<View style={styles.modalContainer}>
				<View style={styles.crossIconView}>
					<TouchableOpacity onPress={onClose}>
						<CrossIcon width={20} height={20} fill={"#81818D"} />
					</TouchableOpacity>
				</View>
				<Text style={styles.modalTitle}>{title}</Text>
				<View style={styles.inputs}>
					<Controller
						control={control}
						name="name"
						rules={{
							required: {
								value: true,
								message: "Назва альбому обов'язкова",
							},
						}}
						render={({ field, fieldState }) => {
							return (
								<Input
									placeholder="Напишіть назву альбому"
									label="Назва альбому"
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
						name="topic"
						rules={{
							required: {
								value: true,
								message: "Назва теми обов'язкова",
							},
						}}
						render={({ field, fieldState }) => {
							return (
								<Input
									placeholder="Напишіть назву теми"
									label="Назва теми"
									onChange={field.onChange}
									onChangeText={field.onChange}
									value={field.value}
									error={fieldState.error?.message}
								/>
							);
						}}
					/>
					<View style={styles.buttons}>
						<Button
							style={styles.cancelButton}
							textColor={COLORS.purple}
							label="Скасувати"
							onPress={onClose}
						/>
						<Button
							style={styles.confirmButton}
							label="Зберегти"
							onPress={handleSubmit(formSubmit)}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}
