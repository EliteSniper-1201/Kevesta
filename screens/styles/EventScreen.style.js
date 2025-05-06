import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        alignItems: 'flex-start',
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 700,
        textAlign: 'center',
        color: '#ffffff',
    },
    container: { flex: 1, backgroundColor: '#fff' },
    searchContainer: {
        flexDirection: 'row',
        gap: 10,
        margin: 16,
        paddingVertical: 15,
        paddingHorizontal: 16,
        borderRadius: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.20)',
        alignItems: 'center',
    },
    searchInput: {
        marginLeft: 8,
        fontSize: 16,
        flex: 1,
        color: 'rgba(255, 255, 255, 0.7)'
    },
    selectText: {
        fontSize: 20,
        fontWeight: 500,
        margin: 20,
    },
    grid: {
        paddingHorizontal: 16
    },
    cityCard: {
        flex: 1,
        margin: 8,
        alignItems: 'center',
        borderRadius: 12,
        overflow: 'hidden',
    },    
    cityImage: {
        aspectRatio: 1.6,
        borderRadius: 8,
        width: 173,
        height: 100,
    },
    cityText: {
        marginTop: 6,
        fontWeight: '500',
        textAlign: 'center'
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 12,
        borderTopWidth: 1,
        borderColor: '#eee'
    },
    background: {
        alignItems: 'flex-start',
    padding: 20,
    justifyContent: 'space-between',
    },
    headerContainer: {
        flexDirection: 'row',
justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'red',
        marginRight: 90
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 500,
        flex: 1,
    },
    topButton: {
        borderRadius: 100,
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.1)',
        alignItems: 'center',
    },
    backButton: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
    },
    headerIcons: {
        flexDirection: 'row',
        gap: 8,
    },
    headerContent: {
        width: '100%',
        marginTop: 'auto',
    },
});