import { StyleSheet } from 'react-native'

export default StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
      },
      checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 4,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
      checked: {
        backgroundColor: '#090914',
        borderColor: '#090914',
      },
      label: {
        fontSize: 16,
      },
})
