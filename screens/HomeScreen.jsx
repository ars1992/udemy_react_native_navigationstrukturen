import { Button, StyleSheet, Text, View, FlatList } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList data={[
                { name: "1" },
                { name: "2" },
                { name: "3" },
                { name: "4" },
            ]}
                renderItem={({ item }) => {
                    return <Button title={`Gehe zu ${item.name}`} onPress={() =>
                        navigation.navigate("Friend", { name: item.name })} />
                }} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,
    },
});