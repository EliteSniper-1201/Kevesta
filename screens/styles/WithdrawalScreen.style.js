import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingTop: 28 },
    listContent: { paddingBottom: 100 },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      marginTop: 20
    },
    cryptoName: { fontWeight: 'bold', fontSize: 16, flex: 1 },
    amountText: { fontSize: 16, fontWeight: 600, flex: 1 },
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
               marginTop: 20, 
     },
    methodCard: {
      backgroundColor: '#ffffff',
      borderRadius: 8,
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    methodHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    methodTitle: {
      fontSize: 16,
      fontWeight: '500',
    },
    activeStatus: {
      color: '#4CAF50',
      fontWeight: '500',
    },
    methodDetail: {
      color: '#666',
      marginBottom: 4,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 600,
      marginBottom: 28,
    },
    transactionItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#EEE',
      alignItems: 'center',
    },
    transactionLeft: {
      flex: 1,
    },
    transactionRight: {
      alignItems: 'flex-end',
    },
    cryptoText: {
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 4,
    },
    dateText: {
      color: '#666',
    },
    statusText: {
      fontWeight: '500',
    },
})
