import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tap = createBottomTabNavigator()


export default function Navigation() {
  return (
    <NavigationContainer>
      <Tap.Navigator>
        <Tap.Screen name='Freunde' component={HomeScreen}/>
        <Tap.Screen name='Einstellungen' component={SettingsScreen}/>
      </Tap.Navigator>
    </NavigationContainer>
  )
}
