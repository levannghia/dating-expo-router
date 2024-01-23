import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                headerShown: false,
                tabBarIcon: ({focused}) => focused ? (
                    <Feather name="eye" size={24} color={"black"}/>
                ) : (
                    <Feather name="eye" size={24} color={"gray"}/>
                )
            }}/>
            <Tabs.Screen name="chat" options={{
                title: "Chat",
                headerShown: false,
                tabBarIcon: ({focused}) => focused ? (
                    <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
                ) : (
                    <Ionicons name="chatbubble-ellipses-outline" size={24} color="gray" />
                )
            }}/>
            <Tabs.Screen name="bio" options={{
                title: "Bio",
                headerShown: false,
                tabBarIcon: ({focused}) => focused ? (
                    <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
                ) : (
                    <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="gray" />
                )
            }}/>
        </Tabs>
    )
}