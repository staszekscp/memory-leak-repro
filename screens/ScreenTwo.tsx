import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";

export default function ScreenTwo({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.description}>This is the second screen.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24
  },
  button: {
    backgroundColor: "#34C759",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    minWidth: 150,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600"
  }
});
