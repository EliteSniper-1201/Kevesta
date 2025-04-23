import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    card: {
        flex: 1,
        padding: 16,
        borderRadius: 12,
        backgroundColor: '#fff',
        margin: 8,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        elevation: 2,
        borderWidth: 1,
        borderColor: "#A9ABB1"
      },
      iconContainer: {
        backgroundColor: '#f0f4f8',
        padding: 12,
        borderRadius: 10,
        marginBottom: 12,
      },
      title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
      },
      cta: {
        fontSize: 14,
        fontWeight: '500',
        color: '#2E5BFF',
      },
})
