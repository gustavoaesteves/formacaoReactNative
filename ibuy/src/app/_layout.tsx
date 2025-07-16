import { Drawer} from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
    // return (
    //     <Tabs 
    //     screenOptions={{ 
    //         headerShown: false, 
    //         tabBarShowLabel: false,
    //         tabBarLabelPosition: "beside-icon",
    //         }}
    //         >
    //         <Tabs.Screen
    //             name="index"
    //             options={{ 
    //                 tabBarLabel: "Home",
    //                 // tabBarIcon: ({ color }) => (
    //                 //     <Icon name="home" color={color} />
    //                 // ),
    //                 title: "Home" }}/>
    //         <Tabs.Screen
    //             name="signup"
    //             options={{ title: "Login" }}
    //         />    
    //     </Tabs>
    // )

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name="index"
                    options={{ title: "Home" }}
                />
                <Drawer.Screen
                    name="signup"f
                    options={{ title: "Login" }}
                />    
            </Drawer>
        </GestureHandlerRootView>
    )
}