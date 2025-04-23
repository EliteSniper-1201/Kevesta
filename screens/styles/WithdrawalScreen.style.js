import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
    listContent: { paddingBottom: 100 },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
    },
    cryptoName: { fontWeight: 'bold', fontSize: 16, flex: 1 },
    amount: { fontSize: 16, flex: 1 },
    aprTag: {
      marginVertical: 5,
      paddingVertical: 4,
      paddingHorizontal: 4,
      borderRadius: 4,
      alignSelf: 'flex-end',
    },
    aprPositive: { backgroundColor: '#EBF8F1' },
    aprNegative: { backgroundColor: '#FFEEE8' },
    aprText: { fontSize: 10, fontWeight: 'bold' },
    aprTextPositive: { color: '#34B86D' },
    aprTextNegative: { color: '#FA5014' },
    withdrawText: { fontWeight: 500, fontSize: 14 },
    btnText: { fontWeight: 500, fontSize: 14 },
    divider: { marginHorizontal: 20,
               marginVertical: 20, 
     },
})
