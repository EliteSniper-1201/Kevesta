import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'top',
    alignItems: 'center',
    paddingTop: 25
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    width: '90%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingHorizontal: 16,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#1E6FFB',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  continueDisabledButton: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  continueText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  continueDisabledText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
  closeButton: {
    fontSize: 28,
    color: '#666',
  },
});