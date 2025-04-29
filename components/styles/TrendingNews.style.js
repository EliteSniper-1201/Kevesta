import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 16,
  },
  newsItem: {
    marginBottom: 20,
  },
  category: {
    fontSize: 10,
    fontWeight: 500,
    color: 'rgba(72, 72, 77, 1)',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 4,
    color: 'rgba(9, 9, 20, 1)',
  },
  content: {
    fontSize: 12,
    color: 'rgba(72, 72, 77, 1)',
    lineHeight: 20,
  },
  seeAllButton: {
    borderRadius: 12,
    backgroundColor: 'rgba(44, 115, 255, 1)',
    alignSelf: 'center',
    marginTop: 8,
    padding: 17,
  },
  seeAllText: {
    color: '#ffffff',
    fontWeight: '500',
  },
})
