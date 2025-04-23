import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff',
      },
      tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 16,
        position: 'relative',
      },
      tabText: {
        fontSize: 16,
        fontWeight: '600',
      },
      activeLine: {
        position: 'absolute',
        bottom: 0,
        height: 2,
        width: '100%',
        backgroundColor: '#3366FF',
      },
})
