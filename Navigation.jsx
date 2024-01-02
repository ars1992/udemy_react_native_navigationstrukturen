import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'; './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import FriendScreen from './screens/FriendScreen';
import * as Icon from '@expo/vector-icons';

const Tap = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function HomeStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Friend' component={FriendScreen} />
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tap.Navigator screenOptions={({ route }) => {
                return {
                    tabBarActiveTintColor: "green",
                    tabBarStyle: {
                        backgroundColor: "orange",
                    },
                    headerShown: false,
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
                <Tap.Screen name='Home' component={HomeStack} options={{
                    title: "Freunde",
                }} />
                <Tap.Screen name='Settings' component={SettingsScreen} options={{
                    title: "Einstellunngen",
                }} />
            </Tap.Navigator>
        </NavigationContainer>
    )
}
