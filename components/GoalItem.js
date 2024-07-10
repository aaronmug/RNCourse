import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  function deleteGoalHandler() {
    props.onDelete(props.id);
  }

  return (
    // .bind(), pre-configure a function before execution
    // <Pressable onPress={props.onDelete.bind(this, props.id)}>
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={deleteGoalHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white", // react native styles do not cascade
    padding: 8,
  },
});
