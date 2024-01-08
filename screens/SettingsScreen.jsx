import { StyleSheet, Text, View, SectionList } from 'react-native';




export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <SectionList sections={[
                {title: "Version", data: [{name: "1"}, {name: "2"}]},
                {title: "Impressumm", data: [{name: "3"}, {name: "4"}]}
            ]} renderItem={({item}) => <Text>{item.name}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.section}>{section.title}</Text>}/>
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
    section: {
        backgroundColor: 'whitesmoke',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'ligthgray',
        fontSize: 18,
        padding: 5,
    }
});