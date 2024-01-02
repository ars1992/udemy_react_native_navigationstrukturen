import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

const Tap = createBottomTabNavigator()

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Freunde</Text>
    </View>
  )
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Einstellungen</Text>
    </View>
  )
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
