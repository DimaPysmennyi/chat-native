import { useForm, Controller } from "react-hook-form";
import { IRegister } from "../../types";
import { View, Text } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { Button } from "../../../../shared/ui/button";
import { styles } from "./register-form-step-one.styles";
import { useAuthContext } from "../../tools/context";
import { Link, useRouter } from "expo-router";
import { useSendCode } from "../../hooks";
import { COLORS } from "../../../../shared/ui/colors";

export function RegisterFormStepOne() {
	const { handleSubmit, watch, control } = useForm<IRegister>();
	const { resultMessage } = useAuthContext();
	const router = useRouter();
	function onSubmit(data: IRegister) {
		useSendCode(data.email);
		router.replace({
			pathname: "/registration/step-two",
			params: {
				email: data.email,
				password: data.password,
			},
		});
	}

	return (
		<View style={styles.container}>
			<View style={styles.inforegblock}>
				<View style={styles.textblock}>
					<Text
						style={{
							fontWeight: 700,
							borderBottomWidth: 2,
							paddingBottom: 8,
						}}
					>
						<Link
							href="/registration/step-one"
							style={{
								color: COLORS.blue,
								fontSize: 24,
								fontFamily: "GTWalsheimPro-Bold"
							}}
							onPress={(event) => {
								event.preventDefault();
								router.replace("login");
							}}
						>
							Реєстрація
						</Link>
					</Text>
					<Text style={{ paddingBottom: 8 }}>
						<Link
							href="/login"
							style={{
								color: COLORS.blueOpacity,
								fontSize: 24,
								fontFamily: "GTWalsheimPro-Regular",
								borderBottomWidth: 2,
							}}
						>
							Авторизація
						</Link>
					</Text>
				</View>
				<View style={styles.welcometextblock}>
					<Text style={styles.welcometext}>
						{" "}
						Приєднуйся до World IT{" "}
					</Text>
				</View>
				<View style={styles.inputs}>
					<Controller
						control={control}
						name="email"
						rules={{
							required: {
								value: true,
								message: "E-mail is required",
							},
						}}
						render={({ field, fieldState }) => {
							return (
								<Input
									placeholder="you@example.com"
									label="Електронна пошта"
									onChange={field.onChange}
									onChangeText={field.onChange}
									value={field.value}
									error={fieldState.error?.message}
								/>
							);
						}}
					></Controller>
					<Controller
						control={control}
						name="password"
						rules={{
							required: {
								value: true,
								message: "Password is required",
							},
							minLength: {
								value: 8,
								message:
									"Password should be at least 8 symbols",
							},
						}}
						render={({ field, fieldState }) => {
							return (
								<Input.Password
									placeholder="Введи пароль"
									label="Пароль"
									onChange={field.onChange}
									onChangeText={field.onChange}
									value={field.value}
									error={fieldState.error?.message}
								/>
							);
						}}
					></Controller>
					<Controller
						control={control}
						name="confirmPassword"
						rules={{
							required: {
								value: true,
								message: "Password is required",
							},
							minLength: {
								value: 8,
								message:
									"Password should be at least 8 symbols",
							},
							validate: (val: string) => {
								if (watch("password") != val) {
									return "Passwords do not match!";
								}
							},
						}}
						render={({ field, fieldState }) => {
							return (
								<Input.Password
									placeholder="Повтори пароль"
									label="Підтверди пароль"
									onChange={field.onChange}
									onChangeText={field.onChange}
									value={field.value}
									error={fieldState.error?.message}
								/>
							);
						}}
					></Controller>
					<Text
						style={{
							color: "#22C55E",
							textAlign: "center",
							fontSize: 16,
						}}
					>
						{resultMessage}
					</Text>
				</View>
				<View style={styles.buttonBox}>
					<Button
						label="Створити акаунт"
						onPress={handleSubmit(onSubmit)}
					/>
				</View>
			</View>
		</View>
	);
}
