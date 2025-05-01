import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  tabContainer: { flexDirection: 'row', marginBottom: 16 },
  tab: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: '#2f67ff',
  },
  tabText: { textAlign: 'center', color: '#333' },
  activeTabText: { color: '#fff' },
  accordion: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 12,
    padding: 10,
  },
  accordionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  accordionContent: { paddingLeft: 10 },
  contentText: { fontSize: 14, marginBottom: 4 },
  helpSection: { marginTop: 30 },
  needHelp: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  card: {
    backgroundColor: '#f8f8f8',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: { fontWeight: 'bold', fontSize: 16 },
  cardText: { fontSize: 14, color: '#000' },
  linkText: { fontSize: 14, color: '#2f67ff' },
})
