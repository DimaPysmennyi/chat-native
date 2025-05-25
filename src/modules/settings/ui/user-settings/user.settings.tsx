import { View, Text, Image, TouchableOpacity } from "react-native";
import { ImageButton } from "../../../../shared/ui/button";
import { styles } from "./user.settings.styles";
import { PencilIcon, PlusIcon } from "../../../../shared/ui/icons";
import { COLORS } from "../../../../shared/ui/colors";
import { avatars } from "../../../../../assets/avatars/avatars";
import { useAuthContext } from "../../../auth/tools/context";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../../../shared/ui/input";
import { IUpdateUserForm, IUpdateUserFormPicture } from "../../types/settings.types";
import { useState } from "react";
import { useUpdateUser } from "../../hooks";

export function UserSettings() {
	const { user } = useAuthContext();
	const { handleSubmit, control } = useForm<IUpdateUserForm>();
    const {  control: controlPicture } = useForm<IUpdateUserFormPicture>();
	const [allowedToEdit, setAllowedToEdit] = useState<boolean>(false);
	const [allowedToEditProfileCard, setAllowedToEditProfileCard] =
		useState<boolean>(false);
	const [result, setResult] = useState<string>();

	function onSubmit(data: IUpdateUserForm) {
		if (user) {
			console.log("entered");
			useUpdateUser({ id: user.id, ...data });
			console.log("sent");
			return;
		}
		console.log(111);
	}

	return (
		<View style={styles.formContainer}>
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
							setAllowedToEditProfileCard(
								(prevState) => !prevState
							);
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
					{user?.image ? (
						<Image
							source={{ uri: user.image }}
							style={styles.avatar}
						/>
					) : (
						<Image source={avatars.avatar} style={styles.avatar} />
					)}

					{allowedToEditProfileCard ? (
						<View style={{ flexDirection: "row", gap: 24 }}>
							<TouchableOpacity
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
								style={{
									width: 126,
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
							{user?.firstname} {user?.lastname}
						</Text>
						{ allowedToEditProfileCard ? (
					        <Controller
					        	control={controlPicture}
					        	name="username"
					        	render={({ field, fieldState }) => {
					        		return (
					        			<Input
					        				placeholder="Ім'я користувача"
					        				defaultValue={user?.username}
					        				onChange={field.onChange}
					        				onChangeText={field.onChange}
					        				// value={`@${field.value}`}
					        				label="Ім'я"
					        			/>
					        		);
					        	}}></Controller>
                                ) : (
					        		<Text style={styles.usernameText}>
					        			{user?.username}
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
							setAllowedToEdit((prevState) => !prevState);
							if (!allowedToEdit) {
								handleSubmit(onSubmit);
							}
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
									defaultValue={user?.firstname}
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
									defaultValue={user?.lastname}
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
									defaultValue={user?.birthdate}
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
									defaultValue={user?.email}
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

			<View style={styles.signatureBlock}></View>
		</View>
	);
}

//     return null;
// }
