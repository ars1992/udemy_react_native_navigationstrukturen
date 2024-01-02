import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Freunde</Text>
            <Button title='Gehe zu Kontakt' onPress={() => navigation.navigate("Friend")} />
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