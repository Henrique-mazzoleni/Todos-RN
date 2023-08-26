import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

export default function TodoInput({ onAddTodo, isVisible, onCloseModal }) {
  const [enteredTodo, setEnteredTodo] = useState('');

  const textInputHandler = (enteredText) => {
    setEnteredTodo(enteredText);
  };

  const addTodoHandler = () => {
    onAddTodo(enteredTodo);
    setEnteredTodo('');
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/goal.png')} style={styles.image} />
        <TextInput
          placeholder="Enter your Todo"
          style={styles.textInput}
          onChangeText={textInputHandler}
          value={enteredTodo}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Todo" onPress={addTodoHandler} />
          <Button title="Back" onPress={onCloseModal} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 15,
  },
  textInput: {
    width: '80%',
    borderWidth: 2,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
