import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";

export default function SelectedNavigatorScreen({ navigation, route }: any) {
  // Check if we're in the custom navigator by looking at the route params
  const navigatorType = route?.params?.navigatorType;

  const getTitle = () => {
    if (navigatorType === "custom") return "Custom Navigator Home";
    if (navigatorType === "regular") return "Regular Stack Navigator Home";
    return "Home Screen";
  };

  const showBackButton = navigatorType === "custom";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Back to Main</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{getTitle()}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <TouchableOpacity style={styles.button} onPress={() => navigation.push("ScreenOne")}>
        <Text style={styles.buttonText}>Go to Screen One</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.push("ScreenTwo")}>
        <Text style={styles.buttonText}>Go to Screen Two</Text>
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
  header: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    zIndex: 1
  },
  backButton: {
    backgroundColor: "rgba(0,0,0,0.1)",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: "flex-start"
  },
  backButtonText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "500"
  },
  title: {
    fontSize: 24,
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
    backgroundColor: "#007AFF",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    minWidth: 200,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600"
  }
});
