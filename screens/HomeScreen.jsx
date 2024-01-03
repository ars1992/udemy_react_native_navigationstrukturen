import { StyleSheet, View, FlatList } from 'react-native';
import FriendListItem from '../components/FriendListItem'

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { name: "1" },
                    { name: "2" },
                    { name: "3" },
                    { name: "4" },
                ]}
                renderItem={({ item }) => 
                    <FriendListItem friend={item} onPress={() => navigation.navigate("Friend", {name: item.name})} />
                }
                keyExtractor={(item) => item.name} />
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