import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen'; './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import * as Icon  from '@expo/vector-icons';

const Tap = createBottomTabNavigator()


export default function Navigation() {
    return (
        <NavigationContainer>
            <Tap.Navigator>
                <Tap.Screen name='Home' component={HomeScreen} options={{
                    title: "Freunde",
                    tabBarIcon: ({focused, size, color}) => {
                        return <Icon.Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
                    }
                }} />
                <Tap.Screen name='Settings' component={SettingsScreen} options={{
                    title: "Einstellunngen",
                    tabBarIcon: ({focused, size, color}) => {
                        return <Icon.Ionicons name={focused ? "settings" : "settings-outline"} size={size} color={color} />
                    }
                }} />
            </Tap.Navigator>
        </NavigationContainer>
    )
}
