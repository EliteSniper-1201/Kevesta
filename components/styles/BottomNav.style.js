import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    backgroundColor: '#FFF',
  },
  tab: {
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  label: {
    fontSize: 10,
    marginTop: 4,
    color: '#666',
    fontWeight: '500',
  },
  activeLabel: {
    color: '#1E6FFB',
  },
})
