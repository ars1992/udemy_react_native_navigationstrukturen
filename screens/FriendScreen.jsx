import { Image, StyleSheet, Text, ScrollView } from 'react-native';
import {Dimensions} from 'react-native';


export default function FriendScreen({navigation, route}) {
    const { name } = route.params
    return (
        <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
            <Text>Deteils</Text>
            <Image source={require("../assets/icon.png")} style={styles.img}/>
            <Text>{name}</Text>
        </ScrollView>
    )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: windowWidth * 80 / 100,
        height: windowWidth * 80 / 100,
    },
    scrollView: {
        backgroundColor: 'black',
    }
});