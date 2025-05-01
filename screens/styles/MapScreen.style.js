import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        // flexDirection: 'row',
        // alignItems: 'center',
        padding: 16,
        // backgroundColor: 'white',
        marginBottom: 30,
        zIndex: 20,
    },
    backButton: {
        fontSize: 32,
        marginRight: 16,
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    },
    map: {
        flex: 1,
    },
    content: {
        padding: 16,
        backgroundColor: 'white',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    subsection: {
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 8,
    },
    bullet: {
        fontSize: 14,
        marginLeft: 8,
        marginVertical: 4,
    },
    headerContainer: {
        margin: 20,
    },
    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: 500,
        flex: 1,
    },
});