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
               marginTop: 20, 
     },
    methodCard: {
      backgroundColor: '#F5F5F5',
      borderRadius: 8,
      padding: 16,
      marginBottom: 12,
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
    transactionItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#EEE',
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
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'flex-end',
    },
    modalContainer: {
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 24,
      minHeight: '50%',
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: '#1A1A1A',
    },
    closeButton: {
      fontSize: 28,
      color: '#666',
      marginTop: -8,
    },
    inputSection: {
      marginBottom: 24,
    },
    balanceText: {
      fontSize: 14,
      color: '#666',
      marginTop: 8,
    },
    quickAddContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 24,
    },
    percentageButton: {
      width: '30%',
      paddingVertical: 12,
      backgroundColor: '#F5F5F5',
      borderRadius: 8,
      alignItems: 'center',
    },
    percentageText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#1A1A1A',
    },
    actionButtons: {
      flexDirection: 'row',
      gap: 16,
    },
    button: {
      flex: 1,
      padding: 16,
      borderRadius: 12,
      alignItems: 'center',
    },
    cancelButton: {
      backgroundColor: '#F5F5F5',
    },
    confirmButton: {
      backgroundColor: '#4CAF50',
    },
    disabledButton: {
      backgroundColor: '#E0E0E0',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    arrowButton: {
      padding: 8,
    },
    arrowIcon: {
      width: 24,
      height: 24,
    },
})
