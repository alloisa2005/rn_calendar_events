import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { Input, MiModal } from "./components/";

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
      <Input
        placeholder="Ingresa un evento"
        buttonTitle="Add"
        inputTxt={inputTxt}
        onChangeText={handleChangeTxt}
        onPressBtn={handleAddEvent}
      />

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

      <MiModal
        animationType="fade"
        title="¿Está seguro que desea eliminar el evento?"
        modalVisible={modalVisible}
        selectedEvent={selectedEvent}
        btnOk={() => deleteEvent(selectedEvent.id)}
        btnCancel={() => setModalVisible(!modalVisible)}
      />      

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
  }
});
