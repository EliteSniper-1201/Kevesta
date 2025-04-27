import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'top',
        alignItems: 'center',
        paddingTop: 25
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
    },
    icon: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 30,
    },
    invoiceButton: {
        backgroundColor: '#2979FF',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 30,
        width: '100%',
    },
    invoiceButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
})
