import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingTop: 25,
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '90%',
        maxHeight: '80%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    historyItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    historyItemTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5,
    },
    historyDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    historyAmount: {
        fontSize: 14,
        color: '#666',
    },
    historyDate: {
        fontSize: 14,
        color: '#666',
    },
})
