import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    width: '22%', // fits 4 per row with space
    marginVertical: 12,
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  label: {
    marginTop: 8,
    fontSize: 12,
    color: '#000',
    fontWeight: '500',
  },
})
