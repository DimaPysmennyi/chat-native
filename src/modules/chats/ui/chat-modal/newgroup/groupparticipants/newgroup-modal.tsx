import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { styles } from "./newgroup-modal.styles";
import {
	CrossIcon,
	PlusIcon,
	TrashIcon,
} from "../../../../../../shared/ui/icons";
import { Input } from "../../../../../../shared/ui/input";
import { ScrollView } from "react-native-virtualized-view";
import Modal from "react-native-modal";
import { FriendItem } from "./friendItem";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../../../auth/tools/context";
import { useAllFriends } from "../../../../../friends/hooks/useAllFriends";
import { Controller, useForm } from "react-hook-form";
import { COLORS } from "../../../../../../shared/ui/colors";
import { GalleryIcon } from "../../../../../../shared/ui/icons/tab-icons";
import { launchCameraAsync, launchImageLibraryAsync } from "expo-image-picker";
import { IUser } from "../../../../../auth/tools/context/context.types";
import { BASE_IMAGE_URL } from "../../../../../../shared/tools/requests";
import { avatars } from "../../../../../../../assets/avatars/avatars";
import { Button } from "../../../../../../shared/ui/button";
import { useSocketContext } from "../../../../context/context.socket";

export interface IGroupModal {
	isVisible: boolean;
	onClose: () => void;
}

export function NewGroup(props: IGroupModal) {
	const { isVisible, onClose } = props;
	const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const {createChat} = useSocketContext();

	const [variant, setVariant] = useState<number>(1);
	const [avatarImage, setAvatarImage] = useState<string | null | undefined>(
		null
	);
	const { control, handleSubmit } = useForm<{ name: string }>();
	const toggleSelect = (id: number) => {
		setSelectedIds((prev) =>
			prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
		);
	};

	const { friends } = useAllFriends();
	const [members, setMembers] = useState<(IUser | undefined)[]>([]);

	useEffect(() => {
		console.log(selectedIds);
		console.log(friends);
		if (friends) {
			const newMembers = friends.map((friend) => {
				if (friend.id in selectedIds) {
					console.log(friend.id);
					return friend;
				}
			});

			console.log(newMembers);
			setMembers(newMembers);
		}
	}, [selectedIds]);

	async function addImage() {
		let image = await launchCameraAsync({
			mediaTypes: "images",
			allowsMultipleSelection: false,
			base64: true,
		});
		setAvatarImage(image.assets?.at(0)?.base64);
	}

	async function chooseImage() {
		let image = await launchImageLibraryAsync({
			mediaTypes: "images",
			base64: true,
		});
		console.log(image.assets?.at(0)?.base64);
		setAvatarImage(image.assets?.at(0)?.base64);
	}

	return (
		<Modal isVisible={isVisible} style={styles.gen}>
			<View style={styles.mainblock}>
				<View style={styles.crossblock}>
					<View style={styles.cross}>
						<TouchableOpacity
							onPress={() => {
								onClose();
								setVariant(1);
							}}
						>
							<CrossIcon
								width={20}
								height={20}
								fill={"#81818D"}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.titelblock}>
					<Text style={styles.title}>Нова група</Text>
				</View>
				{variant === 1 ? (
					<View>
						<View style={styles.searchbar}>
							<Input placeholder="🔍Пошук" />
						</View>
						<View style={styles.crossblock}>
							<View style={styles.selected}>
								<Text>Вибрано: {selectedIds.length}</Text>
							</View>
						</View>
						<View style={styles.friendInfo}>
							<ScrollView style={styles.listblock}>
								<FlatList
									style={styles.listobjects}
									data={friends}
									renderItem={({ item }) => (
										<FriendItem
											key={item.id}
											id={item.id}
											name={`${item.firstname} ${item.lastname}`}
											image={item.image}
											selected={selectedIds.includes(
												item.id
											)}
											onToggle={toggleSelect}
										/>
									)}
								/>
							</ScrollView>
						</View>
						<View style={styles.crossblock}>
							<View style={styles.buttons}>
								<TouchableOpacity style={styles.button1}>
									<Text style={styles.textbutton1}>
										Скасувати
									</Text>
								</TouchableOpacity>

								<TouchableOpacity style={styles.button2}>
									<Text
										style={styles.textbutton2}
										onPress={() => setVariant(2)}
									>
										Далі
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				) : (
					<View style={{ paddingHorizontal: 10, gap: 24 }}>
						<Controller
							control={control}
							name="name"
							render={({ field }) => {
								return (
									<Input
										label="Назва"
										placeholder="Введіть назву"
										onChange={field.onChange}
										onChangeText={field.onChange}
									/>
								);
							}}
						/>
						<View
							style={{
								width: "100%",
								justifyContent: "center",
								flexDirection: "row",
								gap: 24,
							}}
						>
							<TouchableOpacity
								onPress={() => {
									addImage();
								}}
								style={{
									width: 129,
									height: 20,
									gap: 8,
									flexDirection: "row",
								}}
							>
								<PlusIcon
									width={20}
									fill={COLORS.purple}
									height={20}
								/>
								<Text
									style={{
										color: COLORS.purple,
										fontSize: 16,
										fontFamily: "GTWalsheimPro-Regular",
									}}
								>
									Додайте фото
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									chooseImage();
								}}
								style={{
									width: 126,
									height: 20,
									gap: 8,
									flexDirection: "row",
								}}
							>
								<GalleryIcon
									width={20}
									fill={COLORS.purple}
									stroke={COLORS.purple}
									height={20}
								/>
								<Text
									style={{
										color: COLORS.purple,
										fontSize: 16,
										fontFamily: "GTWalsheimPro-Regular",
									}}
								>
									Оберіть фото
								</Text>
							</TouchableOpacity>
						</View>
						<View style={{ gap: 16 }}>
							<Text
								style={{
									fontFamily: "GTWalsheimPro-Regular",
									fontSize: 16,
								}}
							>
								Учасники
							</Text>
							<View style={{ gap: 10, height: 200 }}>
								<FlatList
									data={friends}
									renderItem={({ item }) => {
										return (
											<View
												style={{
													width: "100%",
													flexDirection: "row",
													justifyContent:
														"space-between",
													alignItems: "center",
												}}
											>
												<View
													style={{
														gap: 12,
														flexDirection: "row",
														alignItems: "center",
													}}
												>
													<Image
														style={{
															width: 46,
															height: 46,
															borderRadius: 23,
														}}
														source={
															item?.image
																? `${BASE_IMAGE_URL}/${item.image}`
																: avatars.avatar
														}
													/>
													<Text
														style={{
															fontFamily:
																"GTWalsheimPro-Medium",
															fontSize: 16,
														}}
													>{`${item?.firstname} ${item?.lastname}`}</Text>
												</View>
												<TrashIcon
													width={20}
													height={20}
												></TrashIcon>
											</View>
										);
									}}
								></FlatList>
							</View>
						</View>
						<View
							style={{
								width: "100%",
                                flexDirection: "row",
								justifyContent: "flex-end",
							}}
						>
							<Button
								label="Назад"
								textColor={COLORS.purple}
								style={{
									borderColor: COLORS.purple,
									backgroundColor: COLORS.white,
                                    width: 73,
                                    height: 40
								}}
							/>
							<Button
                                onPress={() => {createChat(selectedIds, {name: control._formValues.name, avatar: avatarImage})}}
								label="Створити групу"
                                style={{    
                                    width: 134,
                                    height: 40
                                }}
							/>
						</View>
					</View>
				)}
			</View>
		</Modal>
	);
}
