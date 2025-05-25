import { useForm, Controller } from "react-hook-form";
import { View, Text } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { ILogin } from "../../types/login";
import { styles } from "./login.styles";
import { Button } from "../../../../shared/ui/button";
import { useAuthContext } from "../../tools/context";
import { Link, useRouter } from "expo-router";
import { COLORS } from "../../../../shared/ui/colors";

export function LoginForm() {
	const { handleSubmit, control } = useForm<ILogin>({
		defaultValues: { email: "", password: "" },
	});

	const { user, login } = useAuthContext();
	const router = useRouter();

	function onSubmit(data: ILogin) {
		login(data.email, data.password);
		// if (user){
		router.navigate("/main");
		// }
	}

	return (
		<View style={styles.container}>
			<View style={styles.infoblock}>
				<View style={styles.textblock}>
					<Text style={{ paddingBottom: 8 }}>
						<Link
							href="/registration/step-one"
							style={{
								color: COLORS.blueOpacity,
								fontSize: 24,
								fontWeight: 500,
								fontFamily: "GTWalsheimPro-Regular",
							}}
							onPress={(event) => {
								event.preventDefault();
								router.replace("/registration/step-one");
							}}
						>
							Реєстрація
						</Link>
					</Text>
					<Text
						style={{
							borderBottomColor: COLORS.blue,
							borderBottomWidth: 2,
							paddingBottom: 8,
						}}
					>
						<Link
							href="/login"
							style={{
								color: COLORS.blue,
								fontSize: 24,
								fontFamily: "GTWalsheimPro-Bold",
								// fontWeight: 700,
							}}
						>
							Авторизація
						</Link>
					</Text>
				</View>
				<View style={styles.welcometextblock}>
					<Text style={styles.welcometext}>
						{" "}
						Раді тебе знову бачити!{" "}
					</Text>
				</View>
				<View style={styles.form}>
					<Controller
						control={control}
						name="email"
						rules={{
							required: {
								value: true,
								message: "Email is required",
							},
						}}
						render={({ field, fieldState }) => {
							return (
								<Input
									placeholder="you@example.com"
									onChange={field.onChange}
									onChangeText={field.onChange}
									value={field.value}
									label="Електронна пошта"
									autoCorrect={false}
								/>
							);
						}}
					/>
					<Controller
						control={control}
						name="password"
						rules={{
							minLength: {
								value: 8,
								message:
									"Password should be at least 8 symbols",
							},
							required: {
								value: true,
								message: "Password is required",
							},
						}}
						render={({ field, fieldState }) => {
							return (
								<Input.Password
									placeholder="Введи пароль"
									onChange={field.onChange}
									onChangeText={field.onChange}
									value={field.value}
									label="Пароль"
									autoCorrect={false}
								/>
							);
						}}
					/>
				</View>
				<View style={styles.buttonBlock}>
					<Button label="Увійти" onPress={handleSubmit(onSubmit)} />
				</View>
			</View>
		</View>
	);
}
