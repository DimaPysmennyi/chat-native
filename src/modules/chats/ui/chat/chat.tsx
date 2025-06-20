import { View } from "react-native";
import { IChat } from "../../types/chat.types";
import { IMessage } from "../../types/message.types";
import { useAuthContext } from "../../../auth/tools/context";

export function Chat(messages: IMessage[], chat: IChat){
    const {user} = useAuthContext();
    return <View></View>
}