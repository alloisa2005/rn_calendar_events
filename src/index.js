import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";

export default function App() {
  const [inputTxt, setInputTxt] = useState("");
  const [eventList, setEventList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});

  const handleChangeTxt = (val) => setInputTxt(val);

  const handleAddEvent = () => {
    if (inputTxt.length === 0) return;

    setEventList((prevEvent) => [
      ...eventList,
      { id: Math.random().toString(), value: inputTxt },
    ]);
    setInputTxt("");
  };

  const onPressItem = (id) => {
    setModalVisible(!modalVisible);
    let selected = eventList.find((el) => el.id === id);
    setSelectedEvent(selected);
  };

  const deleteEvent = (id) => {
    let events = eventList.filter((el) => el.id !== id);
    setEventList(events);
    setSelectedEvent({});
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu evento"
          value={inputTxt}
          onChangeText={handleChangeTxt}
        />
        <Button color={"#66B3E1"} title="add" onPress={handleAddEvent} />
      </View>

      <Text style={styles.texto}>
        {eventList.length === 0
          ? `No tengo eventos programados`
          : eventList.length === 1
          ? `Tengo ${eventList.length} evento programado`
          : `Tengo ${eventList.length} eventos programados`}
      </Text>

      <View style={styles.listaContainer}>
        <FlatList
          data={eventList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.eventItem}
              onPress={() => onPressItem(item.id)}
            >
              <Text style={styles.eventItemTitle}>{item.value}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Modal animationType="fade" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              ¿Está seguro que desea eliminar el evento?
            </Text>
            <Text style={styles.modalElement}>{selectedEvent.value}</Text>
            <View style={styles.modalButtonsContainer}>
              <Button
                color={"#66B3E1"}
                title="Cancelar"
                onPress={() => setModalVisible(!modalVisible)}
              />
              <Button
                color={"#66B3E1"}
                title="Borrar"
                onPress={() => deleteEvent(selectedEvent.id)}
              />
            </View>
          </View>
        </View>
      </Modal>

      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  input: {
    width: "85%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    fontSize: 15,
  },
  texto: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  listaContainer: {
    marginTop: 16,
    flex: 1,
  },
  eventItem: {
    borderWidth: 1,
    padding: 18,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 11,
    backgroundColor: "#66B3E1",
  },
  eventItemTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
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
