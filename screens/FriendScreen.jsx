import { Image, StyleSheet, Text, ScrollView } from 'react-native';
import { useWindowDimensions } from 'react-native';


export default function FriendScreen({ navigation, route }) {
    const { friend } = route.params
    const { height, width } = useWindowDimensions();

    return (
        <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
            <Text>Deteils</Text>
            <Image source={{uri: friend.picture.large}} style={
                {
                    width: width * 80 / 100,
                    height: width * 80 / 100
                }
            }
            />
            <Text>Name: {friend.name.first} {friend.name.last}</Text>
            <Text>Email: {friend.email}</Text>
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
    scrollView: {
        backgroundColor: 'black',
    }
});