import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { ImageButton } from "../../../../shared/ui/button";
import { styles } from "./user.settings.styles";
import { PencilIcon } from "../../../../shared/ui/icons";
import { COLORS } from "../../../../shared/ui/colors";
import { avatars } from "../../../../../assets/avatars/avatars";
import { useAuthContext } from "../../../auth/tools/context";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../../../shared/ui/input";

export function UserSettings() {
    const {user} = useAuthContext();
    const { handleSubmit, control } = useForm();
    if (user){
        return (
            <ScrollView overScrollMode="never">
                <View style={styles.profileCard}>
                    <View style={styles.topTextBlock}>
                        <Text>Картка Профілю</Text>
                        <ImageButton>
                            <PencilIcon width={20} height={20} fill={COLORS.purple}/>
                        </ImageButton>
                    </View>
                    <View>
                        <Image source={user.image ? user.image : avatars.avatar1}/>
                        <Text>{user.firstname ? user.firstname : undefined } {user.lastname ? user.lastname : undefined}</Text>
                        <Text>{user.username ? user.username : "@yourusername"}</Text>
                    </View>
                </View>
                <View style={styles.userInfo}>
                    <View style={styles.topTextBlock}>
                        <Text>Особиста інформація</Text>
                        <ImageButton>
                            <PencilIcon width={20} height={20} fill={COLORS.purple}/>
                        </ImageButton>
                    </View>
                    <View style={styles.updateForm}>
                        <Controller
						control={control}
						name="firstname"
						rules={{
							required: {
								value: true,
								message: "Firstname is required",
							},
						}}
						render={({ field, fieldState }) => {
							return (
								<Input
									placeholder="Введіть своє ім'я"
									onChange={field.onChange}
									onChangeText={field.onChange}
									value={field.value}
									label="Ім'я"
								/>
							);
						}}
					/>
                    </View>
                </View>
                <View style={styles.signatureBlock}></View>
            </ScrollView>
        );
    }

    return null;
}
