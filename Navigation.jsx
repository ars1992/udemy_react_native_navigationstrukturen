import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen'; './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import * as Icon from '@expo/vector-icons';

const Tap = createBottomTabNavigator()


export default function Navigation() {
    return (
        <NavigationContainer>
            <Tap.Navigator screenOptions={({ route }) => {
                return {
                    tabBarActiveTintColor: "green",
                    tabBarStyle: {
                        backgroundColor: "orange",
                    },
                    tabBarIcon: ({ focused, size, color }) => {
                        let icon;
                        if (route.name === "Home") {
                            icon = focused ? "home" : "home-outline"
                        }
                        if (route.name === "Settings") {
                            icon = focused ? "settings" : "settings-outline"
                        }
                        return <Icon.Ionicons name={icon} size={size} color={color} />
                    }
                }
            }}>
                <Tap.Screen name='Home' component={HomeScreen} options={{
                    title: "Freunde",
                }} />
                <Tap.Screen name='Settings' component={SettingsScreen} options={{
                    title: "Einstellunngen",
                }} />
            </Tap.Navigator>
        </NavigationContainer>
    )
}
