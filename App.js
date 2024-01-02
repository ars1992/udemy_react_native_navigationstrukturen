import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tap = createBottomTabNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Tap.Navigator>
        <Tap.Screen name='Freunde' component={HomeScreen}/>
        <Tap.Screen name='Einstellungen' component={SettingsScreen}/>
      </Tap.Navigator>
    </NavigationContainer>
  )
}
