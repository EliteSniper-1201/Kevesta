import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  searchBox: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 12,
    marginVertical: 24,
    marginHorizontal: 16,
  },
  input: {
    marginLeft: 8,
    paddingVertical: 10,
    flex: 1,
  },
  sectionHeader: {
    paddingVertical: 12,
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
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  service: { fontWeight: 'bold', fontSize: 16, flex: 1 },
  amount: { fontSize: 16, flex: 1 },
  dateTag: {
    marginVertical: 5,
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 4,
    alignSelf: 'flex-end',
    backgroundColor: '#EBF8F1',
  },
  dateText: { fontSize: 10, fontWeight: 'bold', color: '#34B86D' },
  detailsText: { fontWeight: 500, fontSize: 14 },
  btnText: { fontWeight: 500, fontSize: 14 },
  divider: {
    marginTop: 20,
  },
})
