import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'top',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    minHeight: '50%',
    maxHeight: '90%',
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 28,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  methodCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 12,
  },
  methodInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  methodName: {
    fontSize: 16,
    fontWeight: '500',
  },
  expDate: {
    fontSize: 14,
    color: '#666',
  },
  defaultBadge: {
    backgroundColor: '#E8F5E9',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  defaultText: {
    color: '#4CAF50',
    fontSize: 12,
    fontWeight: '500',
  },
  aprText: {
    color: '#F44336',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'col',
    gap: 16,
    marginTop: 24,
  },
  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: "#E1E2E3",
  },
  requestButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#48484D',
  },
  requestButton: {
    backgroundColor: '#2196F3',
  },
  disabledButton: {
    backgroundColor: '#E0E0E0',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  disabledText: {
    color: '#999999',
  }
})
