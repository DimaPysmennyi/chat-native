import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { useAuthContext } from "../../tools/context";
import { View, Text, TouchableOpacity } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { Button } from "../../../../shared/ui/button";
import { styles } from "./register-form-step-two.styles";

export function RegisterFormStepTwo() {
	const { handleSubmit, control } = useForm<{ code: string }>();
	const router = useRouter();
	const { register } = useAuthContext();

	const params = useLocalSearchParams<{
		username: string;
		email: string;
		password: string;
	}>();

	function onSubmit(data: { code: string }) {
		register(params.username, params.email, params.password, data.code);
		router.replace("/login");
	}

	return (
		<View style={styles.container}>
			<View style={styles.articleTextblock}>
				<Text style={styles.articleText}>Підтвердження пошти</Text>
			</View>
			<View style={styles.emailTextblock}>
				<Text style={styles.emailText}>
					Ми надіслали 6-значний код на вашу пошту {params.email}.
					Введіть його нижче, щоб підтвердити акаунт
				</Text>
			</View>
			<View>
				<Text style={styles.additionText}>Код підтвердження</Text>
				<Controller
					control={control}
					name="code"
					rules={{
						required: true,
						minLength: 6,
						maxLength: 6,
					}}
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Код підтвердження"
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								error={fieldState.error?.message}
							/>
						);
					}}
				></Controller>
			</View>
			<View style={styles.buttons}>
				<View style={styles.buttonBox}>
					<Button
						label="Підтвердити"
						onPress={handleSubmit(onSubmit)}
					></Button>
				</View>
				<View style={styles.buttonBox}>
					<TouchableOpacity onPress={() => {router.back()}}>
						<Text style={styles.backButton}>Назад</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
