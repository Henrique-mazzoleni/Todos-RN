import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {
  const [todosList, setTodosList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const modalVisibilityHandler = () => {
    setModalIsVisible((currentState) => !currentState);
  };

  const addGoalHandler = (enteredTodo) => {
    setTodosList((prevState) => [
      ...prevState,
      {
        text: enteredTodo,
        id: Math.random().toString(),
      },
    ]);
    modalVisibilityHandler();
  };

  const deleteItemHandler = (id) => {
    setTodosList((currentList) => currentList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add new Todo"
          color="#5e0acc"
          onPress={modalVisibilityHandler}
        />
        <TodoInput
          onAddTodo={addGoalHandler}
          isVisible={modalIsVisible}
          onCloseModal={modalVisibilityHandler}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={todosList}
            renderItem={(todoData) => {
              return (
                <TodoItem
                  id={todoData.item.id}
                  text={todoData.item.text}
                  onDeleteItem={deleteItemHandler}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    gap: 15,
    paddingHorizontal: 16,
  },

  listContainer: {
    flex: 5,
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 15,
  },
});
