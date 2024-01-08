import { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, FlatList, Text } from 'react-native';
import FriendListItem from '../components/FriendListItem'

const dummyData = [
    { name: "1", lastName: "a", email: "test1a@test.de" },
    { name: "2", lastName: "b", email: "test2b@test.de" },
    { name: "3", lastName: "c", email: "test3c@test.de" },
    { name: "4", lastName: "d", email: "test4d@test.de" },
    { name: "5", lastName: "e", email: "test5e@test.de" },
    { name: "6", lastName: "f", email: "test6f@test.de" },

]

export default function HomeScreen({ navigation }) {
    const [data, setData] = useState([])
    const [isloading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            // siimuliert das laden
            await new Promise((_) => setTimeout(_, 3000))
            setData(dummyData)
            setLoading(false);
        }
        fetchData()
    }, [])

    if (isloading) {
        return (<View style={styles.center}><ActivityIndicator size='large' /></View>)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <FriendListItem friend={item} onPress={() => navigation.navigate("Friend", { friend: item })} />
                }
                keyExtractor={(item) => item.email}
                ItemSeparatorComponent={<View style={styles.listSeperator} />}
                ListEmptyComponent={<Text style={styles.listEmpty}>Keine Inhalte</Text>}
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
    },
    listEmpty: {
        fontSize: 80,
        textAlign: 'center',
        color: 'red',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});