import { View, Text, Image, TouchableOpacity } from "react-native";
import { ImageButton } from "../../../../shared/ui/button";
import { styles } from "./user.settings.styles";
import { PencilIcon, PlusIcon } from "../../../../shared/ui/icons";
import { COLORS } from "../../../../shared/ui/colors";
import { avatars } from "../../../../../assets/avatars/avatars";
import { useAuthContext } from "../../../auth/tools/context";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../../../shared/ui/input";
import {
	IUpdateUserForm,
	IUpdateUserFormPicture,
} from "../../types/settings.types";
import { useEffect, useState } from "react";
import { useUpdateUser } from "../../hooks";
import { GalleryIcon } from "../../../../shared/ui/icons/tab-icons";
import { launchCameraAsync, launchImageLibraryAsync } from "expo-image-picker";
import { IUser } from "../../../auth/tools/context/context.types";
import { Link, useRouter } from "expo-router";

export function UserSettings() {
	let { user } = useAuthContext();
	const router = useRouter();
	const { handleSubmit, control } = useForm<IUpdateUserForm>();
	const { control: controlPicture } = useForm<IUpdateUserFormPicture>();
	const [allowedToEdit, setAllowedToEdit] = useState<boolean>(false);
	const [allowedToEditProfileCard, setAllowedToEditProfileCard] =
		useState<boolean>(false);
	let [newUser, setNewUser] = useState<IUser | null>(null);
	const [avatarImage, setAvatarImage] = useState<string | null>();
	useEffect(() => (user ? setNewUser(user) : undefined), []);
	// console.log(user)
	// console.log(newUser)


	function onSubmit() {
		if (user) {
			useUpdateUser({
				id: user.id,
				email: control._formValues.email,
				firstname: control._formValues.firstname,
				lastname: control._formValues.lastname,
				birthdate: control._formValues.birthdate,
				password: control._formValues.password,
			});
			if (newUser) {
				setNewUser({
					...newUser,
					email: control._formValues.email,
					firstname: control._formValues.firstname,
					lastname: control._formValues.lastname,
					birthdate: control._formValues.birthdate,
				});
			}
		}
	}

	function submitProfileInfo() {
		console.log(newUser, avatarImage);
		if (newUser && avatarImage) {
			console.log(222)
			useUpdateUser({
				id: newUser.id,
				image: avatarImage,
				username: controlPicture._formValues.username,
			});
			setNewUser({
				image: avatarImage,
				username: controlPicture._formValues.username,
				...newUser,
			});
		}
	}

	async function addImage() {
		let image = await launchCameraAsync({
			mediaTypes: "images",
		});
		setAvatarImage(image.assets?.at(0)?.uri);
	}

	async function chooseImage() {
		let image = await launchImageLibraryAsync({
			mediaTypes: "images",
		});
		console.log(image.assets?.at(0)?.base64)
		setAvatarImage(image.assets?.at(0)?.uri);
	}

	return (
		<View style={styles.formContainer}>
			<Link
				href="/settings/albums"
				onPress={(event) => {
					event.preventDefault();
					router.replace("/settings/albums");
				}}
			>
				Albums
			</Link>
			<View
				style={
					allowedToEditProfileCard
						? [styles.profileCard, styles.profileCard]
						: styles.profileCard
				}
			>
				<View style={styles.topTextBlock}>
					<Text style={styles.blockTitle}>Картка профілю</Text>
					<ImageButton
						style={
							allowedToEditProfileCard
								? styles.editButton
								: undefined
						}
						onPress={() => {
							if (allowedToEditProfileCard === true) {
								submitProfileInfo();
								setAllowedToEditProfileCard(false);
								return;
							}
							setAllowedToEditProfileCard(true);
						}}
					>
						<PencilIcon
							width={20}
							height={20}
							fill={COLORS.purple}
						/>
						{allowedToEditProfileCard ? (
							<Text style={styles.editButtonText}>Зберегти</Text>
						) : undefined}
					</ImageButton>
				</View>
				<View style={styles.mainSettings}>
					{allowedToEditProfileCard ? (
						<Text
							style={{
								fontFamily: "GTWalsheimPro-Regular",
								fontSize: 16,
								color: COLORS.blue,
							}}
						>
							Оберіть або завантажте фото профілю
						</Text>
					) : undefined}
					{newUser?.image ? (
						<Image
							source={{ uri: newUser.image }}
							style={styles.avatar}
						/>
					) : avatarImage ? (
						<Image
							source={{ uri: avatarImage }}
							style={styles.avatar}
						/>
					) : (
						<Image source={avatars.avatar} style={styles.avatar} />
					)}

					{allowedToEditProfileCard ? (
						<View style={{ flexDirection: "row", gap: 24 }}>
							<TouchableOpacity
								onPress={() => {
									addImage();
								}}
								style={{
									width: 129,
									height: 20,
									gap: 8,
									flexDirection: "row",
								}}
							>
								<PlusIcon
									width={20}
									fill={COLORS.purple}
									height={20}
								/>
								<Text
									style={{
										color: COLORS.purple,
										fontSize: 16,
										fontFamily: "GTWalsheimPro-Regular",
									}}
								>
									Додайте фото
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									chooseImage();
								}}
								style={{
									width: 126,
									height: 20,
									gap: 8,
									flexDirection: "row",
								}}
							>
								<GalleryIcon
									width={20}
									fill={COLORS.purple}
									stroke={COLORS.purple}
									height={20}
								/>
								<Text
									style={{
										color: COLORS.purple,
										fontSize: 16,
										fontFamily: "GTWalsheimPro-Regular",
									}}
								>
									Оберіть фото
								</Text>
							</TouchableOpacity>
						</View>
					) : undefined}

					<View
						style={{
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Text style={styles.nameText}>
							{newUser?.firstname ? newUser?.firstname : "Ім'я"}{" "}
							{newUser?.lastname ? newUser?.lastname : "Прізвище"}
						</Text>
						{allowedToEditProfileCard ? (
							<Controller
								control={controlPicture}
								name="username"
								render={({ field, fieldState }) => {
									return (
										<Input
											placeholder="Ім'я користувача"
											defaultValue={newUser?.username}
											onChange={field.onChange}
											onChangeText={field.onChange}
											// value={`@${field.value}`}
											label="Ім'я"
										/>
									);
								}}
							></Controller>
						) : (
							<Text style={styles.usernameText}>
								{newUser?.username}
							</Text>
						)}
					</View>
				</View>
			</View>

			<View
				style={
					allowedToEdit
						? [styles.userInfo, styles.editUserInfo]
						: styles.userInfo
				}
			>
				<View style={styles.topTextBlock}>
					<Text style={styles.blockTitle}>Особиста інформація</Text>
					<ImageButton
						style={allowedToEdit ? styles.editButton : undefined}
						onPress={() => {
							if (allowedToEdit === true) {
								setAllowedToEdit(false);
								onSubmit();
								return;
							}
							setAllowedToEdit(true);
						}}
					>
						<PencilIcon
							width={20}
							height={20}
							fill={COLORS.purple}
						/>
						{allowedToEdit ? (
							<Text style={styles.editButtonText}>Зберегти</Text>
						) : undefined}
					</ImageButton>
				</View>
				<View
					style={
						allowedToEdit
							? [styles.updateForm, { opacity: 1 }]
							: [styles.updateForm, { opacity: 0.5 }]
					}
				>
					<Controller
						control={control}
						name="firstname"
						render={({ field, fieldState }) => {
							return (
								<Input
									placeholder="Введіть нове ім'я"
									defaultValue={newUser?.firstname}
									onChange={field.onChange}
									onChangeText={field.onChange}
									editable={allowedToEdit}
									selectTextOnFocus={allowedToEdit}
									value={field.value}
									label="Ім'я"
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
									placeholder="Введіть нове прізвище"
									defaultValue={newUser?.lastname}
									onChange={field.onChange}
									onChangeText={field.onChange}
									editable={allowedToEdit}
									selectTextOnFocus={allowedToEdit}
									value={field.value}
									label="Прізвище"
								/>
							);
						}}
					/>
					<Controller
						control={control}
						name="birthdate"
						render={({ field, fieldState }) => {
							return (
								<Input
									placeholder="Введіть нову дату народження"
									defaultValue={newUser?.birthdate}
									onChange={field.onChange}
									onChangeText={field.onChange}
									editable={allowedToEdit}
									selectTextOnFocus={allowedToEdit}
									value={field.value}
									label="Дата народження"
								/>
							);
						}}
					/>
					<Controller
						control={control}
						name="email"
						render={({ field, fieldState }) => {
							return (
								<Input
									placeholder="Введіть нову електронну адресу"
									defaultValue={newUser?.email}
									onChange={field.onChange}
									onChangeText={field.onChange}
									editable={allowedToEdit}
									selectTextOnFocus={allowedToEdit}
									value={field.value}
									label="Електронна адреса"
								/>
							);
						}}
					/>
					<Controller
						control={control}
						name="password"
						render={({ field, fieldState }) => {
							return (
								<Input.Password
									placeholder="Введіть новий пароль"
									onChange={field.onChange}
									onChangeText={field.onChange}
									editable={allowedToEdit}
									selectTextOnFocus={allowedToEdit}
									value={field.value}
									label="Пароль"
									style={{ width: 300 }}
								/>
							);
						}}
					/>
				</View>
			</View>

			<View style={styles.signatureBlock}>
				<View style={styles.topTextBlock}>
					<Text>Варіанти підпису</Text>
					<ImageButton
						style={allowedToEdit ? styles.editButton : undefined}
						onPress={() => {
							if (allowedToEdit === true) {
								setAllowedToEdit(false);
								onSubmit();
								return;
							}
							setAllowedToEdit(true);
						}}
					>
						<PencilIcon
							width={20}
							height={20}
							fill={COLORS.purple}
						/>
						{allowedToEdit ? (
							<Text style={styles.editButtonText}>Зберегти</Text>
						) : undefined}
					</ImageButton>
				</View>
			</View>
		</View>
	);
}

//     return null;
// }
