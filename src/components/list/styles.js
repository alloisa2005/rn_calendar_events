import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  eventItem: {
    borderWidth: 1,
    padding: 18,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 11,
    backgroundColor: "#66B3E1",
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventItemTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  iconContainer:{
    flexDirection: 'row',
    alignItems: 'center', 
    gap: 20,
  }
});