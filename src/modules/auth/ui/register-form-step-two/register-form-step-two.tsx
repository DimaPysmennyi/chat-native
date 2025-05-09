import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { useAuthContext } from "../../tools/context";
import { View } from "react-native";
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
		router.navigate('/login')
	}

	return (
		<View style={styles.container}>
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
							placeholder="Code"
							label="Code"
							onChange={field.onChange}
							onChangeText={field.onChange}
							value={field.value}
							error={fieldState.error?.message}
						/>
					);
				}}
			></Controller>
            <View style={styles.buttonBox}>
                <Button label="Submit" onPress={handleSubmit(onSubmit)}></Button>
            </View>
		</View>
	);
}
