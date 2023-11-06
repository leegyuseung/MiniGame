import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

// 실질적으로 게임을 담당하는 화면
function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent`s Guess</Title>
      {/* GUESS */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* + - */}
      </View>
      <View>{/* Log Rounds */}</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
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
