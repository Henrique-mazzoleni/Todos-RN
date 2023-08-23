import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [enteredTodo, setEnteredTodo] = useState('');
  const [todosList, setTodosList] = useState([]);

  const textInputHandler = (enteredText) => {
    setEnteredTodo(enteredText);
  };

  const addGoalHandler = () => {
    setTodosList((prevState) => [
      ...prevState,
      {
        text: enteredTodo,
        id: Math.random().toString(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your Todo"
          style={styles.textInput}
          onChangeText={textInputHandler}
        />
        <Button title="Add Todo" onPress={addGoalHandler} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={todosList}
          renderItem={(todoData) => {
            return (
              <View style={styles.todoItem}>
                <Text style={styles.todoText}>{todoData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  textInput: {
    width: '70%',
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
  },
  listContainer: {
    flex: 5,
  },
  todoItem: {
    backgroundColor: '#5e0acc',
    borderRadius: 6,
    padding: 8,
    marginBottom: 8,
  },
  todoText: {
    color: '#fff',
  },
});
