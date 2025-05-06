import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flex: 1,
    padding: 20
},
backButton: {
    fontSize: 32,
    marginBottom: 16,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
},
heading: {
    fontSize: 20,
    fontWeight: '600',
},
city: {
    color: '#007AFF',
},
list: {
    paddingTop: 16,
},
card: {
    marginVertical: 20,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    overflow: 'hidden',
},
image: {
    width: '100%',
    height: 150,
},
dateTag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
},
dateText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 700
},
infoContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
subinfo: {
    gap: 10
},
ticketLabel: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 12,
    alignSelf: 'flex-start',
    marginBottom: 4,
},
title: {
    fontSize: 16,
    fontWeight: '600',
},
location: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
},
price: {
    fontSize: 14,
    fontWeight: '500',
},
startFrom: {
    fontSize: 12,
    color: '#888',
},
})
