import { Controller, useForm } from "react-hook-form";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import Modal from "react-native-modal";
import { ICreatePost, ICreatePostModalProps } from "../../types/modal.types";

import { Input } from "../../../../shared/ui/input";
import { styles } from "./modal.styles";
import { ImageButton } from "../../../../shared/ui/button";
import { CrossIcon, ImageIcon, SmileIcon } from "../../../../shared/ui/icons";
import { useState } from "react";
import { pickImage } from "../../../../shared/tools/pick-image";
export function CreatePostModal({ isVisible, onClose }: ICreatePostModalProps) {
	const { control, handleSubmit, reset } = useForm<ICreatePost>();
	const [images, setImages] = useState<string[]>([]);

	async function handlePickImage() {
		const assets = await pickImage({
			allowsMultipleSelection: true,
			base64: true,
		});

		if (assets) {
			const base64Images = assets
				.filter((asset) => asset.base64)
				.map((asset) => `data:image/jpeg;base64,${asset.base64}`);
			setImages((prev) => [...prev, ...base64Images]);
		}
	}

	const onSubmit = (data: ICreatePost) => {
		const hashtags = data.content.match(/#\w+/g) || [];

		const cleanedContent = data.content
			.replace(/#\w+/g, "")
			.replace(/\s+/g, " ")
			.trim();

		const allData = {
			...data,
			content: cleanedContent,
			tags: hashtags.map((tag) => tag.slice(1).toLowerCase()),
			images,
		};
		console.log(allData);
		reset();
		setImages([]);
		onClose();
	};

	return (
		<Modal isVisible={isVisible}>
			<View style={styles.modalContainer}>
				<TouchableOpacity
					style={[styles.closeButton, { borderWidth: 0 }]}
					onPress={onClose}
				>
					<CrossIcon width={20} height={20} fill={"#000000"} />
				</TouchableOpacity>

				<Text style={styles.modalTitle}>Створення публікації</Text>
				<Controller
					control={control}
					name="title"
					rules={{
						required: {
							value: true,
							message: "Назва публікації обов'язкова",
						},
					}}
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Напишіть назву публікації"
								label="Назва публікації"
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
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Напишіть тему публікаціїї"
								label="Тема публікації"
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
					name="content"
					rules={{
						required: {
							value: true,
							message: "Опис публікації обов'язковий",
						},
					}}
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Напишіть опис публікації"
								style={{ height: 140 }}
								onChange={field.onChange}
								onChangeText={field.onChange}
								multiline
								value={field.value}
								error={fieldState.error?.message}
							/>
						);
					}}
				/>

				<Controller
					control={control}
					name="links"
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Посилання"
								label="Посилання"
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								error={fieldState.error?.message}
							/>
						);
					}}
				/>

				<View style={styles.actions}>
					<ImageButton onPress={handlePickImage}>
						<ImageIcon fill={"#543C52"} width={20} height={20} />
					</ImageButton>
					<ImageButton onPress={() => console.log("😊")}>
						<SmileIcon fill={"#543C52"} width={20} height={20} />
					</ImageButton>
					<TouchableOpacity
						style={styles.publishButton}
						onPress={handleSubmit(onSubmit)}
					>
						<Text style={styles.publishText}>Публікація</Text>
					</TouchableOpacity>
				</View>
				<ScrollView
					horizontal
					style={{ marginVertical: 10 }}
					contentContainerStyle={{ gap: 10 }}
				>
					{images.map((base64, index) => (
						<Image
							key={index}
							source={{ uri: base64 }}
							style={{
								width: 80,
								height: 80,
								borderRadius: 10,
							}}
						/>
					))}
				</ScrollView>
			</View>
		</Modal>
	);
}
