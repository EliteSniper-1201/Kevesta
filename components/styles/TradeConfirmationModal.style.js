import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'top',
    alignItems: 'center',
    paddingTop: 25,
  },
  container: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    position: 'relative',
  },
  closeButton: {
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
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  detail: {
    fontSize: 12,
    color: '#666',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    alignSelf: 'center',
  },
  confirmBtn: {
    backgroundColor: '#2D73FF',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  editBtn: {
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  editText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
})
