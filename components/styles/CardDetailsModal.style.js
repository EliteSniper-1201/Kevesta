import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '85%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  closeButton: {
    fontSize: 24,
    color: '#666',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginVertical: 8,
  },
  label: {
    color: '#666',
    fontSize: 14,
  },
  value: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 12,
  },
  section: {
    marginBottom: 16,
  },
  balanceRow: {
    marginTop: 16,
  },
  balanceValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  defaultBadge: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  defaultText: {
    color: '#2196F3',
    fontSize: 12,
    fontWeight: '500',
  },
})
