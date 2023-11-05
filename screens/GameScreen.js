import { Text, View, StyleSheet } from "react-native";

// 실질적으로 게임을 담당하는 화면
function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Opponent`s Guess</Text>
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
});
