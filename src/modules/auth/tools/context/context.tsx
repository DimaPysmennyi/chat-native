import { createContext, useContext, useState, useEffect } from "react";
import {
	IUser,
	IAuthContext,
	IAuthContextProviderProps,
} from "./context.types";
import { Response } from "../../../../shared/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
			const response = await fetch(
				"http://192.168.0.51:8000/api/users/me",
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			const result: Response<IUser> = await response.json();
			if (result.status === "error") {
				console.log(result.message);
				return;
			}
			setUser(result.data);
		} catch (error) {
			console.error(error);
		}
	}

	async function login(email: string, password: string) {
		try {
			const response = await fetch(
				"http://192.168.0.51:8000/api/users/login",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password }),
				}
			);
			const result: Response<string> = await response.json();
			if (result.status === "error") {
				console.log(result.message);
				return;
			}
			getData(result.data);

			await AsyncStorage.setItem("token", result.data);
		} catch (error) {
			console.error(error);
		}
	}

	async function register(
		username: string,
		email: string,
		password: string,
        code: string
	) {
		try {
			const response = await fetch(
				"http:/192.168.0.51:8000/api/users/register",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: username,
						email: email,
						password: password,
                        code: code
					}),
				}
			);

			const result: Response<string> = await response.json();
			console.log(result);
			if (result.status === "error") {
				setResultMessage(result.message);
				return;
			}
			getData(result.data);
			await AsyncStorage.setItem("token", result.data);
		} catch (error) {
			console.log(error);
		}
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
		if (!token) {
			return;
		}
		getData(token);
	}

	useEffect(() => {
		getToken();
		
	}, []);

	// useEffect(() => {
	// 	console.log(user);
	// }, [user])

	return (
		<authContext.Provider
			value={{
				user: user,
				resultMessage: resultMessage,
				login: login,
				register: register,
				isAuthenticated: isAuthenticated,
				logout: logout,
			}}
		>
			{props.children}
		</authContext.Provider>
	);
}
