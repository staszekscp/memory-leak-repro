import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Navigator</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <TouchableOpacity
        style={[styles.button, styles.customButton]}
        onPress={() => navigation.navigate("CustomNavigator")}
      >
        <Text style={styles.buttonText}>Custom Navigator</Text>
        <Text style={styles.buttonSubtext}>With custom header and styling</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.regularButton]}
        onPress={() => navigation.navigate("RegularStack")}
      >
        <Text style={styles.buttonText}>Regular Stack Navigator</Text>
        <Text style={styles.buttonSubtext}>Built-in React Navigation stack</Text>
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    marginVertical: 15,
    minWidth: 280,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  customButton: {
    backgroundColor: "#007AFF"
  },
  regularButton: {
    backgroundColor: "#34C759"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5
  },
  buttonSubtext: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 14,
    textAlign: "center"
  }
});
