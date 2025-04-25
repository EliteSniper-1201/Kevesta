import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff'},
    safeArea: { flex: 1, backgroundColor: '#fff' },
  screenTitle: { fontWeight: 'bold', fontSize: 18 },
  totalLabel: { color: '#666', fontSize: 12, textAlign: 'right' },
  totalValue: { fontWeight: 'bold', fontSize: 16 },
  content: { flex: 1, padding: 16 },
  lightContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  darkModeToggle: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    padding: 12,
    borderRadius: 30,
    backgroundColor: '#007bff',
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  tab: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  tabText: {
    fontWeight: '500',
    color: '#666',
  },
  activeTabText: {
    color: 'white',
  },
  formContainer: {
    marginBottom: 24,
  },

  actionButton: {
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: '#2C73FF',
  },
  sellButton: {
    backgroundColor: '#dc3545',
  },
  disabledButton: {
    backgroundColor: '#F6F6F6',
  },
  confirmActionButtonText: {
    color: 'white',
    fontWeight: 400,
    fontSize: 14,
  },
  actionButtonText: {
    color: '#090914',
    fontWeight: 400,
    fontSize: 14,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
  },
  assetItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  assetSymbol: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#090914'
  },
  assetDetails: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 20,
  },
  assetValue: {
    fontWeight: '500',
    marginBottom: 4,
    fontSize: 12,
    color: '#48484D'
  },
  assetAmount: {
    color: '#090914',
    fontSize: 18,
  },
})
