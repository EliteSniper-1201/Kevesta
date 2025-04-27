import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'top',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 20,
        padding: 20,
    },
    scrollContent: {
        paddingBottom: 80,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E6FFB',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10,
        color: '#333',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    bullet: {
        fontSize: 16,
        marginRight: 8,
        color: '#666',
    },
    listText: {
        flex: 1,
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    priceText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    taxText: {
        fontSize: 12,
        color: '#666',
    },
    renewalText: {
        fontSize: 14,
        color: '#4CAF50',
        marginTop: 4,
    },
    normalText: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
        marginLeft: 8,
    },
    continueButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#1E6FFB',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    continueText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});