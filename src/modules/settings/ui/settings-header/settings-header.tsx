import { Link, useRouter } from "expo-router";
import { View, Text } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";
import { styles } from "./settings-header.styles";

interface ISettingsHeaderProps{
    currentState: "settings" | "albums"
}

export function SettingsHeader(props: ISettingsHeaderProps){
    const {currentState} = props;

    const router = useRouter();
    return (
        <View style={styles.headerView}>
            <View
                style={
                    currentState === "settings" ? styles.underlinedVariant : undefined
                }
            >
                <Text
                    style={
                        currentState === "settings"
                            ? {
                                    fontFamily: "GTWalsheimPro-Medium",
                                    fontSize: 16,
                                    color: COLORS.blue,
                              }
                            : {
                                    fontFamily: "GTWalsheimPro-Regular",
                                    fontSize: 16,
                                    color: COLORS.blueOpacity,
                              }
                    }
                >
                    <Link
                        href="/settings/bio"
                        onPress={(event) => {
                            event.preventDefault();
                            router.replace("/settings/bio");
                        }}
                    >
                        Особиста інформація
                    </Link>
                </Text>
            </View>
            <View
                style={currentState === "albums" ? styles.underlinedVariant : undefined}
            >
                <Text
                    style={
                        currentState === "albums"
                            ? {
                                    fontFamily: "GTWalsheimPro-Medium",
                                    fontSize: 16,
                                    color: COLORS.blue,
                              }
                            : {
                                    fontFamily: "GTWalsheimPro-Regular",
                                    fontSize: 16,
                                    color: COLORS.blueOpacity,
                              }
                    }
                >
                    <Link
                        href="/settings/albums"
                        onPress={(event) => {
                            event.preventDefault();
                            router.replace("/settings/albums");
                        }}
                    >
                        Запити
                    </Link>
                </Text>
            </View>
    
        </View>
    )
}