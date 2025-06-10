import { Controller, useForm } from "react-hook-form";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import Modal from "react-native-modal";
import { IModalProps, ITagItemProps } from "../../types/modal.types";
import { Input } from "../../../../shared/ui/input";
import { styles } from "./modal.styles";
import { ImageButton } from "../../../../shared/ui/button";
import {
	CrossIcon,
	ImageIcon,
	PlusIcon,
	SmileIcon,
} from "../../../../shared/ui/icons";
import { useEffect, useState } from "react";
import { pickImage } from "../../../../shared/tools/pick-image";
import { ICreatePost } from "../../types/post.types";
import { useCreatePost } from "../../hooks/useCreatePost";
import { usePostContext } from "../../context/context";
import { COLORS } from "../../../../shared/ui/colors";
import { useRouter } from "expo-router";

const defaultTags = [
	"#відпочинок",
	"#натхнення",
	"#життя",
	"#природа",
	"#читання",
	"#спокій",
	"#гармонія",
	"#музика",
	"#фільми",
	"#подорожі",
];

function TagItem({ text, textColor, ...touchableProps }: ITagItemProps) {
	return (
		<TouchableOpacity {...touchableProps}>
			<Text style={[styles.tagText, { color: textColor }]}>{text}</Text>
		</TouchableOpacity>
	);
}

export function CreatePostModal({ isVisible, onClose }: IModalProps) {
	const { control, handleSubmit, reset } = useForm<ICreatePost>();
	const [images, setImages] = useState<string[]>([]);
	const [allTags, setAllTags] = useState<string[]>([]);
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [isTagAdding, setIsTagAdding] = useState<boolean>(false);
	const [newTag, setNewTag] = useState<string>("");
	const router = useRouter();
	const { getPosts } = usePostContext();

	useEffect(() => {
		setAllTags(defaultTags);
	}, []);

	// useEffect(() => {
	// 	console.log(selectedTags);
	// }, [selectedTags]);

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

	function onSubmit(data: ICreatePost) {
		const allData = {
			...data,
			tags: selectedTags,
			images,
		};

		reset();
		setImages([]);
		onClose();
		useCreatePost(allData);
		getPosts();
	}

	function onPress(tag: string) {
		setSelectedTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
		);
	}

	function addTag() {
		const formattedTag = newTag.startsWith("#") ? newTag : `#${newTag}`;
		if (formattedTag && !allTags.includes(formattedTag)) {
			setAllTags((prev) => [...prev, formattedTag]);
		}
		setNewTag("");
		setIsTagAdding(false);
	}

	return (
		<Modal isVisible={isVisible}>
			<View style={styles.modalContainer}>
				<View style={styles.crossIconView}>
					<TouchableOpacity onPress={onClose}>
						<CrossIcon width={20} height={20} fill={"#81818D"} />
					</TouchableOpacity>
				</View>

				<Text style={styles.modalTitle}>Створення публікації</Text>
				<View style={styles.inputs}>
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
									style={{
										minHeight: 42,
										height: 0,
										maxHeight: 140,
									}}
									value={field.value}
									error={fieldState.error?.message}
								/>
							);
						}}
					/>
					<View style={styles.tagsContainer}>
						{allTags.map((tag, index) => (
							<TagItem
								key={index}
								text={tag}
								onPress={() => onPress(tag)}
								textColor={
									!selectedTags.includes(tag)
										? COLORS.purple
										: COLORS.purpleOpacity
								}
								style={
									!selectedTags.includes(tag)
										? styles.tagButton
										: styles.selectedTagButton
								}
							/>
						))}
						<View
							style={{
								width: 20,
								height: 30,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<TouchableOpacity
								style={styles.addButton}
								onPress={() => {
									setIsTagAdding(true);
								}}
							>
								<PlusIcon
									height={14}
									width={14}
									fill={"#543C52"}
								/>
							</TouchableOpacity>
						</View>
					</View>
					{isTagAdding && (
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								gap: 8,
							}}
						>
							<Input
								placeholder="Введіть новий тег"
								value={newTag}
								onChangeText={setNewTag}
								onSubmitEditing={addTag}
							/>
							<TouchableOpacity
								style={styles.closeTagButton}
								onPress={() => setIsTagAdding(false)}
							>
								<CrossIcon width={20} height={20} />
							</TouchableOpacity>
						</View>
					)}
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
									onChange={field.onChange}
									onChangeText={field.onChange}
									multiline={true}
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
				</View>

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
