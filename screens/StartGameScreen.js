import { TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

// 시작하는 화면
function StartGameScreen() {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;
