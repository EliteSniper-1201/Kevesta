import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  sectionHeader: {
    paddingVertical: 12,
    backgroundColor: '#F5F5F5',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: 16,
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  searchItem: {
    borderBottomWidth: 0,
    paddingVertical: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 16,
  },
})
