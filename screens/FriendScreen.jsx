import { Button, StyleSheet, Text, View } from 'react-native';

export default function FriendScreen({navigation, route}) {
    const { name } = route.params
    return (
        <View style={styles.container}>
            <Text>Deteils</Text>
            <Text>{name}</Text>
            <Button title='Gehe zu Zurück' onPress={() => navigation.goBack()} />
        </View>
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