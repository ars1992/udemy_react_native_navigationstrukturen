import { Image, StyleSheet, Text, Pressable } from 'react-native';


export default function FriendListItem({ friend, onPress }) {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image source={require("../assets/icon.png")} style={styles.img}/>
            <Text>{friend.name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    img: {
        width: 20,
        height: 20,
    }
});