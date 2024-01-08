import { Image, StyleSheet, Text, ScrollView } from 'react-native';

export default function FriendScreen({navigation, route}) {
    const { name } = route.params
    return (
        <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
            <Text>Deteils</Text>
            <Image source={require("../assets/icon.png")} style={styles.img}/>
            <Text>{name}</Text>

            <Text>Deteils</Text>
            <Image source={require("../assets/icon.png")} style={styles.img}/>
            <Text>{name}</Text>
            <Text>Deteils</Text>
            <Image source={require("../assets/icon.png")} style={styles.img}/>
            <Text>{name}</Text>
            <Text>Deteils</Text>
            <Image source={require("../assets/icon.png")} style={styles.img}/>
            <Text>{name}</Text>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 260,
        height: 260,
    },
    scrollView: {
        backgroundColor: 'black',
    }
});