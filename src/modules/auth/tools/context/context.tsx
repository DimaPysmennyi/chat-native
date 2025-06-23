import { createContext, useContext, useState, useEffect } from "react";
import {
	IUser,
	IAuthContext,
	IAuthContextProviderProps,
} from "./context.types";
import { Response } from "../../../../shared/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GET, POST } from "../../../../shared/tools/requests";

const initialValue: IAuthContext = {
	user: null,
	resultMessage: null,
	login: (email: string, password: string) => {},
	register: (
		username: string,
		email: string,
		password: string,
		code: string
	) => {},
	isAuthenticated: () => false,
	logout: () => {},
	getToken: () => {},
};

const authContext = createContext<IAuthContext>(initialValue);

export function useAuthContext() {
	return useContext(authContext);
}

export function AuthContextProvider(props: IAuthContextProviderProps) {
	const [user, setUser] = useState<IUser | null>(null);
	const [resultMessage, setResultMessage] = useState<string | null>(null);

	async function getData(token: string) {
		try {
			const result = await GET<IUser>({
				endpoint: "api/users/me",
				token: token,
			});
			console.log(result);
			if (result.status === "error") {
				console.log(result.message);
				return;
			}
			// console.log(result.data);
			setUser(result.data);
			// console.log(user);
		} catch (error) {
			console.error(error);
		}
	}

	async function login(email: string, password: string) {
		try {
			const result = await POST<string>({
				endpoint: "api/users/login",
				// headers: { "Content-Type": "application/json" },
				body: { email: email, password: password },
			});
			if (result.status === "error") {
				console.log(result.message);
				return;
			}
			console.log(result.data);
			await getData(result.data);

			await AsyncStorage.setItem("token", result.data);
		} catch (error) {
			console.error(error);
		}
	}

	async function register(
		email: string,
		password: string,
		code: string
	) {
		const result = await POST<string>({
			endpoint: "api/users/register",
			body: {
				email: email,
				password: password,
				code: code,
			},
		});

		console.log(result);
		if (result.status === "error") {
			setResultMessage(result.message);
			return;
		}
		getData(result.data);
		console.log("Токен сохранен?", await AsyncStorage.getItem("token"));
		await AsyncStorage.setItem("token", result.data);
	}

	function isAuthenticated() {
		if (!user) {
			return false;
		}
		return true;
	}

	async function logout() {
		await AsyncStorage.removeItem("token");
		setUser(null);
	}

	async function getToken() {
		const token = await AsyncStorage.getItem("token");
		console.log(token);

		if (!token) {
			return;
		}
		await getData(token);
	}

	useEffect(() => {
		getToken();
	}, []);

	return (
		<authContext.Provider
			value={{
				user: user,
				resultMessage: resultMessage,
				login: login,
				register: register,
				isAuthenticated: isAuthenticated,
				logout: logout,
				getToken: getToken,
			}}
		>
			{props.children}
		</authContext.Provider>
	);
}
