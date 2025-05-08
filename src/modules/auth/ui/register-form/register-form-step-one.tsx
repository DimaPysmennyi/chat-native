import { useForm, Controller } from "react-hook-form";
import { IRegister } from "../../types";
import { View, Text } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { Button } from "../../../../shared/ui/button";
import { styles } from "./register-form-step-one.styles";
import { useAuthContext } from "../../tools/context";
import { useRouter } from "expo-router";
import { useSendCode } from "../../hooks";

export function RegisterFormStepOne() {
	const { handleSubmit, control } = useForm<IRegister>();
	const { register, resultMessage } = useAuthContext();
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
			<Text style={styles.text}>Registration</Text>
			<View style={styles.inputs}>
				<Controller
					control={control}
					name="username"
					rules={{
						required: {
							value: true,
							message: "Username is required",
						},
					}}
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Username"
								label="Username"
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
								placeholder="E-mail"
								label="E-mail"
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
								placeholder="Password"
								label="Password"
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
				<Button label="Submit" onPress={handleSubmit(onSubmit)} />
			</View>
		</View>
	);
}
