import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tap = createBottomTabNavigator()


export default function Navigation() {
    return (
        <NavigationContainer>
            <Tap.Navigator>
                <Tap.Screen name='Home' component={HomeScreen} options={{
                    title: "Freunde"
                }} />
                <Tap.Screen name='Settings' component={SettingsScreen} options={{
                    title: "Einstellunngen"
                }} />
            </Tap.Navigator>
        </NavigationContainer>
    )
}
