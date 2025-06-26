import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { IClientEvents, IJoinChatCallback, IJoinChatPayload, ILeaveChatPayload, IServerEvents, SendMessagePayload } from "../types/socket.types";
import { useAuthContext } from "../../auth/tools/context";
import { GET, POST } from "../../../shared/tools/requests";
import { IChat } from "../types/chat.types";

export interface ISocketContext {
	socket: Socket<IServerEvents, IClientEvents> | null;
    joinChat: (data: IJoinChatPayload) => void;
    leaveChat: (data: ILeaveChatPayload) => void;
    sendMessage: (data: SendMessagePayload) => void;
    createChat: (membersIds: number[], data?: {name?: string, avatar?: string}) => Promise<void>;
	getChats: () => {chats: IChat[] | [] }
}

export interface ISocketContextProviderProps {
	children?: ReactNode;
}

const SocketContext = createContext<ISocketContext | null>(null);

export function useSocketContext() {
	const context = useContext(SocketContext);
	if (!context) throw new Error("UseSocketContext is not in a Provider");
	return context;
}

export function SocketContextProvider({
	children
}: ISocketContextProviderProps) {
	const [socket, setSocket] = useState<Socket<
		IServerEvents,
		IClientEvents
	> | null>(null);

	const { token, user } = useAuthContext();
	
    function joinChat(payload: IJoinChatPayload){
        socket?.emit("joinChat", {chatId: payload.chatId}, (response) => {
            if (response.status == "success"){
                console.log(response.data);
            };
        })
    }

    function leaveChat(payload: ILeaveChatPayload){
        socket?.emit("leaveChat", {chatId: payload.chatId})
    }

    function sendMessage(payload: SendMessagePayload){
        socket?.emit("sendMessage", {message: payload.message})
    }

    async function createChat(membersIds: number[], data?: {name?: string, avatar?: string}){
        const chat = await POST({endpoint: "api/chats/create", body: {
            membersIds: membersIds,
            data: data
        }, token: token ? token : undefined})
        if (chat.status == "success"){
            console.log(chat);
        }
    }

	function getChats(){
		if (!token) return {chats: []};
		const userId = user?.id;
		const [chats, setChats] = useState<IChat[]>([]);
		useEffect(() => {
			try{
				async function getChats(){
					const chats = await GET<IChat[]>({endpoint: 'api/chats/all', token: token});
					if (chats.status === "success"){
						setChats(chats.data);
					}
				}
				getChats();
			} catch(error){
				console.log(error)
			}
		}, [userId])
		return {chats}
	}

    useEffect(() => {
		if (!token) return;
		const newSocket = io(`ws://192.168.178.39:8000`, { auth: { token } });

		newSocket.on("connect", () => {
			console.log("connection: ", socket?.connected);
		});
        
        newSocket.on("newMessage", (data) => {
            console.log(data);
        })

		newSocket.on("disconnect", () => {
			console.log("socket disconnected");
		});

		setSocket(newSocket);
		return () => {
			socket?.disconnect();
		};
	}, [token]);

	return (
		<SocketContext.Provider
			value={{
				socket: socket,
                joinChat: joinChat,
                leaveChat: leaveChat,
                sendMessage: sendMessage,
                createChat: createChat,
				getChats: getChats
			}}
		>
			{children}
		</SocketContext.Provider>
	);
}
