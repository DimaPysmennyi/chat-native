import { View, Text, Image, TouchableOpacity } from "react-native";
import { IChat } from "../../types/chat.types";
import { IMessage } from "../../types/message.types";
import { useAuthContext } from "../../../auth/tools/context";
import { styles } from "./chat.styles";
import { BackIcon, DotsIcon, ImageIcon, SendIcon } from "../../../../shared/ui/icons";
import { COLORS } from "../../../../shared/ui/colors";
import { avatars } from "../../../../../assets/avatars/avatars";
import { Input } from "../../../../shared/ui/input";
import { ImageButton } from "../../../../shared/ui/button";

export function Chat() {
    // props: IChat
    // const {id, name, isPersonalChat, avatar, adminId, members, messages} = props
	const { user } = useAuthContext();
	return (
		<View style={styles.chatView}>
			<View style={styles.chatHeaderView}>
                <View style={{gap:10, flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity>
                        <BackIcon width={22} height={22} fill={COLORS.blueOpacity}/>
                    </TouchableOpacity>
                    <View style={styles.chatInfo}>
                        <Image source={avatars.avatar} style={{width: 46, height: 46, borderRadius: 100}}/>
                        <View style={{gap:5}}>
                            <Text style={{fontSize: 24, fontFamily: "GTWalsheimPro-Medium", color: COLORS.blue}}>Name</Text>
                            <Text style={{fontSize: 14, fontFamily: "GTWalsheimPro-Regular", color: COLORS.blueOpacity}}>В мережі</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <DotsIcon width={20} height={20} fill={COLORS.blueOpacity}/>
                </TouchableOpacity>
            </View>
			<View style={styles.messagesView}></View>
			<View style={styles.sendMessageView}>
                <Input placeholder="Повідомлення" style={{borderColor: COLORS.blueOpacity20, width: 223}}/>
                <View style={{gap: 16, flexDirection: 'row'}}>
                    <ImageButton>
                        <ImageIcon fill={"#543C52"} width={20} height={20} />
                    </ImageButton>
                    <ImageButton style={{backgroundColor: COLORS.purple}}>
                        <SendIcon fill={"#543C52"} width={20} height={20} />
                    </ImageButton>
                </View>
            </View>
		</View>
	);
}
