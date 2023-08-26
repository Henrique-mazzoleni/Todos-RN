import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function TodoItem({ id, text, onDeleteItem }) {
  return (
    <View style={styles.todoItem}>
      <Pressable
        onPress={onDeleteItem.bind(null, id)}
        android_ripple={{ color: '#210644' }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.todoText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: '#5e0acc',
    borderRadius: 6,
    marginBottom: 8,
  },
  todoText: {
    padding: 8,
    color: '#fff',
  },
  pressedItem: {
    backgroundColor: '#ccc',
    color: '#5e0acc',
  },
});
