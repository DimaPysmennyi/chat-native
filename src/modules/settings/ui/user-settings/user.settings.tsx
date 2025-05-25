import { View, Text, Image } from "react-native";
import { ImageButton } from "../../../../shared/ui/button";
import { styles } from "./user.settings.styles";
import { PencilIcon } from "../../../../shared/ui/icons";
import { COLORS } from "../../../../shared/ui/colors";
import { avatars } from "../../../../../assets/avatars/avatars";
import { useAuthContext } from "../../../auth/tools/context";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../../../shared/ui/input";
import { IUpdateUserForm } from "../../types/settings.types";

export function UserSettings() {
	const { user } = useAuthContext();
	const { handleSubmit, control } = useForm<IUpdateUserForm>();
	// if (user){
	return (
		<View style={styles.formContainer}>
			<View style={styles.profileCard}>
				<View style={styles.topTextBlock}>
					<Text style={styles.blockTitle}>Картка профілю</Text>
					<ImageButton>
						<PencilIcon
							width={20}
							height={20}
							fill={COLORS.purple}
						/>
					</ImageButton>
				</View>
				<View style={styles.mainSettings}>
					<Image source={avatars.avatar3} style={styles.avatar} />
					<View
						style={{
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Text style={styles.nameText}>
							{"Lina"} {"Li"}
						</Text>
						<Text style={styles.usernameText}>{"@thelili"}</Text>
					</View>
				</View>
			</View>

			<View style={styles.userInfo}>
				<View style={styles.topTextBlock}>
					<Text style={styles.blockTitle}>Особиста інформація</Text>
					<ImageButton>
						<PencilIcon
							width={20}
							height={20}
							fill={COLORS.purple}
						/>
					</ImageButton>
				</View>
				<View style={styles.updateForm}>
					<Controller
						control={control}
						name="firstname"
						render={({ field, fieldState }) => {
							return (
								<Input
									placeholder="Введіть нове ім'я"
									onChange={field.onChange}
									onChangeText={field.onChange}
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
									onChange={field.onChange}
									onChangeText={field.onChange}
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
									onChange={field.onChange}
									onChangeText={field.onChange}
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
									onChange={field.onChange}
									onChangeText={field.onChange}
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
									value={field.value}
									label="Пароль"
                                    style={{width: 300}}
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
