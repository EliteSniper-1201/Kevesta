import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    paddingTop: 48,
    paddingBottom: 16,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
  },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: '600' },
  content: { padding: 20 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    paddingVertical: 6,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#2979ff',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: 20,
  },
  disabledButton: {
    backgroundColor: '#a0a0a0',
    opacity: 0.7,
  },
  saveButtonText: { color: '#fff', fontWeight: '600' },
  section: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
  },
  subOptionText: {
    fontSize: 14,
    color: '#555',
  },
  themeSwitch: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 20,
    overflow: 'hidden',
  },
  themeOption: {
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  activeTheme: {
    backgroundColor: '#cce0ff',
  },
  card: {
    backgroundColor: '#fafafa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
});

