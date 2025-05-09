import { Tabs } from "expo-router";
import { COLORS } from "../../shared/ui/colors";
import {
	ChatsIcon,
	FriendsIcon,
	GalleryIcon,
	HomeIcon,
} from "../../shared/ui/icons/tab-icons";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					height: 70,
					alignItems: "center",
					// justifyContent: "space-around",
					width: "100%",
					paddingHorizontal: 16,
				},
			}}
		>
			<Tabs.Screen
				name="(main)"
				options={{
					title: "Головна",
					tabBarLabelStyle: { color: COLORS.black, fontSize: 14 },
					tabBarIcon: () => (
						<HomeIcon width={20} height={20} color={COLORS.black} />
					),
				}}
			/>
			<Tabs.Screen
				name="(my-posts)"
				options={{
					title: "Мої публікації",
					tabBarLabelStyle: { color: COLORS.black, fontSize: 14, textTransform: "none" },
					tabBarIcon: () => (
						<GalleryIcon
							width={20}
							height={20}
							color={COLORS.black}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="(friends)"
				options={{
					title: "Друзі",
					tabBarLabelStyle: { color: COLORS.black, fontSize: 14 },
					tabBarIcon: () => (
						<FriendsIcon
							width={20}
							height={20}
							color={COLORS.black}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="(chats)"
				options={{
					title: "Чати",
					tabBarLabelStyle: { color: COLORS.black, fontSize: 14 },
					tabBarIcon: () => (
						<ChatsIcon
							width={27}
							height={27}
							color={COLORS.black}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
