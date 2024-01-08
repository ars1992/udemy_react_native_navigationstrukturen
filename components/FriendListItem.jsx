import { Button, StyleSheet, Text, View, FlatList, Pressable } from 'react-native';


export default function FriendListItem({ friend, onPress }) {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text>{friend.name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
});