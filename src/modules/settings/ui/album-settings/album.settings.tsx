import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TextInput,
	Button,
	Modal,
	ScrollView,
	SafeAreaView,
} from "react-native";
import { Album } from "./album.settings.types";
import { useAuthContext } from "../../../auth/tools/context";
import { useForm } from "react-hook-form";

type Albumdata = {
	name: "";
	theme: "";
	year: "";
};

export default function AlbumScreen(data: Albumdata) {
	const { control, handleSubmit } = useForm<Albumdata>();
	function onSubmit(data: Albumdata) {
		fetch("http://192.168.0.51:8000/api/users/albums", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
	}
	return <View></View>;
}
