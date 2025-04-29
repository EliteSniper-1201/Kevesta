import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'top',
    alignItems: 'center',
    paddingTop: 25,
  },
  modal: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    right: 12,
    top: 10,
    zIndex: 1,
  },
  closeText: {
    fontSize: 26,
    color: '#333',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  messageBox: {
    backgroundColor: '#E6F4EA',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  messageText: {
    color: '#3A8F3F',
    fontSize: 14,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    fontSize: 18,
    paddingVertical: 4,
    marginBottom: 24,
  },
  submitButton: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  abledButton: {
    backgroundColor: '#2D73FF',
  },
  disabledButton: {
    backgroundColor: '#F2F2F2',
  },
  submitText: {
    fontSize: 16,
    fontWeight: '600',
  },
  abledText: {
    color: '#fff',
  },
  disabledText: {
    color: '#000',
  },
  resendText: {
    color: '#2D73FF',
    fontSize: 15,
    textAlign: 'center',
  },
})
