
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({  
  modalContainer: {
    flex: 1,
    backgroundColor: "#696969",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
  },
  modalTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalElement: {
    marginBottom: 16,
    fontSize: 22,
    fontWeight: "bold",
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});