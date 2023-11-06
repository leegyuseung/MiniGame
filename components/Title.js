import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4e0329",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#4e0329",
    padding: 12,
  },
});
