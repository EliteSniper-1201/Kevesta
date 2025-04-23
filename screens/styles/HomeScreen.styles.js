import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 20,
  },
  headerContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
  },
  darkHeaderContainer: {
    backgroundColor: '#000000',
  },
  darkSectionTitle: {
    color: '#fff',
  },
  darkTagContainer: {
    backgroundColor: '#34B86D80',
  },
  darkTagText: {
    color: '#ffffff',
  },
  darkBalance: {
    color: '#fff',
  },
  darkReactLogo: {
    tintColor: '#ffffff',
  },
  logo: {
    fontSize: 18,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 12,
    alignSelf: "center",
  },
  tag: {
    color: 'green',
    fontWeight: '700',
    marginRight: 8,
  },
  balanceRow: {
    alignItems: 'center',
  },
  balance: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
  },
  coins: {
    flexDirection: 'row',
    alignSelf: "center",
    marginVertical: 8,
    gap: 6,
  },
  searchBox: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 12,
    marginVertical: 16,
    marginHorizontal: 20,
  },
  input: {
    marginLeft: 8,
    paddingVertical: 10,
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 12,
  },  
  tagContainer: {
    backgroundColor: '#34B86D',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 4,
    alignSelf: 'center',
  },
  tagText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, color: '#666', marginTop: 4 },
})
