import { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, FlatList, Text } from 'react-native';
import FriendListItem from '../components/FriendListItem'



export default function HomeScreen({ navigation }) {
    const [data, setData] = useState([])
    const [isloading, setLoading] = useState(true)

    async function fetchData() {
        setLoading(true)
        try {
            const response = await fetch('https://randomuser.me/api?results=30');
            const jsonRespons = await response.json();
            setData(jsonRespons.results);
        } catch(error){
            alert("Fehler beim Laden")
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
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
                refreshing={isloading}
                onRefresh={fetchData}
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