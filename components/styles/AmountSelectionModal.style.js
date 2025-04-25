import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    width: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 28,
    color: '#666',
  },
  selected: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  selectedLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  selectedLeftText: {
    fontSize: 16,
    fontWeight: '500',
  },
  selectedRightText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputSection: {
    marginBottom: 24,
  },
  actionButtons: {
    flexDirection: 'column',
    gap: 16,
  },
  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: "#E1E2E3",
  },
  confirmButton: {
    backgroundColor: '#2C73FF',
  },
  confirmButtonText: { 
    fontSize: 16,
    fontWeight: 600,
    color: '#ffffff',
  },
  disabledButton: {
    backgroundColor: '#F2F2F2',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#48484D',
  },
});