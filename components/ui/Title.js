import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    // fontFamily: "open-sans-bold",
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "black",
    padding: 12,
    maxWidth: "80%",
    width: 300, // width가 300이상이면 80%만 사용하게된다.
  },
});
