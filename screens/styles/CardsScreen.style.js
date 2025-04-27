import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E6FFB',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  cardList: {
    paddingHorizontal: 15,
  },
  card: {
    flex: 1,
    width: 160,
    height: 120,
    backgroundColor: '#fff',
    margin: 8,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardIcon: {
    width: 173,
    height: 80,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    margin: 4,
    alignSelf: 'flex-start',
  },
  giftCardList: {
    paddingHorizontal: 15,
  },
  giftCard: {
    flex: 1,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  giftCardIcon: {
    width: 173,
    height: 100,
  },
  giftCardName: {
    fontSize: 14,
    fontWeight: '500',
    margin: 8,
    alignSelf: 'flex-start',
  },
  historySection: {
    margin: 20,
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  historyText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  historyButton: {
    backgroundColor: '#1E6FFB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  historyButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
  },
  activeNavText: {
    color: '#1E6FFB',
    fontWeight: '500',
  },
});