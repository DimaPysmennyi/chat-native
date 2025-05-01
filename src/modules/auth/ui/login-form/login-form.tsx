import { useForm, Controller } from "react-hook-form";
import { View,Text } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { ILogin } from "../../types/login";
import { styles } from "./login.styles";
import { Button } from "../../../../shared/ui/button";
import { useAuthContext } from "../../tools/context";

export function LoginForm() {
	const { handleSubmit, control } = useForm<ILogin>({
		defaultValues: { email: "", password: "" },
	});

    const {login} = useAuthContext()

	function onSubmit(data: ILogin) {
		login(data.email, data.password)
	}
	return (
		<View style={styles.container}>
            <Text style={styles.text}>Authorization</Text>
			<View style={styles.form}>
				<Controller
					control={control}
					name="email"
					rules={{
						required: {
							value: true,
							message: "Email is required",
                            
						}
					}}
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Email"
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								label="Email"
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
                            message:"Password should be at least 8 symbols"
                        },
						required: {
							value: true,
							message: "Password is required",
						}
					}}
					render={({ field, fieldState }) => {
						return (
							<Input.Password
								placeholder="Password"
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								label="Password"
								autoCorrect={false}
							/>
						);
					}}
				/>
			</View>
			<View style={styles.buttonBlock}>
				<Button label="Submit" onPress={handleSubmit(onSubmit)} />
			</View>
		</View>
	);
}