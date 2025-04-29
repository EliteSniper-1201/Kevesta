import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'top',
    alignItems: 'center',
    paddingTop: 25,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    width: '90%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  detailsContainer: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
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
  },
  confirmButton: {
    backgroundColor: '#2C73FF',
  },
  cancelButton: {
    backgroundColor: '#FA5014',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  closeButton: {
    fontSize: 28,
    color: '#666',
  },
  amount: {
    fontSize: 16,
    fontWeight: 600,
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: 600,
  },
});