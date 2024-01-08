import { StyleSheet, View, FlatList } from 'react-native';
import FriendListItem from '../components/FriendListItem'

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { name: "1", lastName: "a", email: "test1a@test.de"},
                    { name: "2", lastName: "b", email: "test2b@test.de"},
                    { name: "3", lastName: "c", email: "test3c@test.de"},
                    { name: "4", lastName: "d", email: "test4d@test.de"},
                    { name: "5", lastName: "e", email: "test5e@test.de"},
                    { name: "6", lastName: "f", email: "test6f@test.de"},
                    
                ]}
                renderItem={({ item }) => 
                    <FriendListItem friend={item} onPress={() => navigation.navigate("Friend", {friend: item})} />
                }
                keyExtractor={(item) => item.email}
                ItemSeparatorComponent={<View style={styles.listSeperator}/>}
                />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 80,
    },
    listSeperator: {
        height: StyleSheet.hairlineWidth, 
        backgroundColor: 'orange'
    }
});