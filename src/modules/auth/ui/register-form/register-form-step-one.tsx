import { useForm, Controller } from "react-hook-form";
import { IRegister } from "../../types";
import { View, Text } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { Button } from "../../../../shared/ui/button";
import { styles } from "./register-form-step-one.styles";
import { useAuthContext } from "../../tools/context";
import { Link, useRouter } from "expo-router";
import { useSendCode } from "../../hooks";

export function RegisterFormStepOne() {
	const { handleSubmit, watch, control } = useForm<IRegister>();
	const { resultMessage } = useAuthContext();
	const router = useRouter();
	function onSubmit(data: IRegister) {
        useSendCode(data.email);
		router.navigate({
			pathname: "/registration/step-two",
			params: {
				username: data.username,
				email: data.email,
				password: data.password,
			},
		});
	}

	return (
		<View style={styles.container}>
			<View style = {styles.inforegblock}>
				<View style = {styles.textblock}>
									<Text style={{color: "#81818D", fontSize: 24,fontWeight: 700, borderBottomWidth: 2}}><Link href="/registration/step-one" style={{color: "#81818D", fontSize: 24}}>Реєстрація</Link></Text>
									<Text style={{color: "#070A1C", fontSize: 24}}><Link href="/login" style={{color: "#070A1C", fontSize: 24, fontWeight: 700, borderBottomWidth: 2,}}>Авторизація</Link></Text> 
				</View>
			<View style = {styles.welcometextblock}>
					<Text style = {styles.welcometext}> Приєднуйся до World IT </Text>
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
							message: "Password should be at least 8 symbols",
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
							message: "Password should be at least 8 symbols",
						},
						validate: (val: string) => {if (watch('password') != val){ return 'Passwords do not match!' }}
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
				<Button label="Створити акаунт" onPress={handleSubmit(onSubmit)} />
			</View>
			</View>
		</View>
	);
}
