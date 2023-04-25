import { View, Text, Modal, Button } from 'react-native';
import React from 'react';
import { styles } from './styles';

const MiModal = ({animationType, title, modalVisible, selectedEvent, btnOk, btnCancel}) => {
  return (
    <Modal animationType={animationType} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalElement}>{selectedEvent.value}</Text>
            <View style={styles.modalButtonsContainer}>
              <Button
                color={"#66B3E1"}
                title="Cancelar"
                onPress={btnCancel}
              />
              <Button
                color={"#66B3E1"}
                title="Borrar"
                onPress={btnOk}
              />
            </View>
          </View>
        </View>
      </Modal>
  )
}

export default MiModal