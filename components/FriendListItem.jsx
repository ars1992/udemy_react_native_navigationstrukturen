import { Image, StyleSheet, Text, Pressable, View } from 'react-native';


export default function FriendListItem({ friend, onPress }) {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image source={require("../assets/icon.png")} style={styles.img} />
            <View style={styles.info}>
                <Text style={styles.name} >{friend.name.first} {friend.name.last}</Text>
                <Text style={styles.email} >{friend.email}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
        height: 80,
    },
    info: {
        justifyContent: 'space-evenly',
    },
    name: {
        fontSize: 25,
    },
    email: {
        fontSize: 18,
        fontWeight: '100',
    },
    img: {
        borderRadius: 25,
        width: 50,
        height: 50,
    }
});