import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function ScreenOne() {
  const [t1, setT1] = React.useState(false);
  const [t2, setT2] = React.useState(false);
  const [t3, setT3] = React.useState(false);
  const [t4, setT4] = React.useState(false);

  return (
    <View
      style={{
        pointerEvents: "auto",
        width: 200,
        height: 50
      }}
    >
      <View>
        <View style={styles.pointerBoxNone}>
          <Pressable
            style={{ padding: 16, width: 200, backgroundColor: t1 ? "green" : "red" }}
            onPress={() => {
              setT1(true);
              console.log("StyleSheet.create()");
            }}
          >
            <Text>Box-none on the parent - StyleSheet.create</Text>
            <Text>{t1 ? "TRIGGERED!" : "SHOULD TRIGGER"}</Text>
          </Pressable>
        </View>

        <View style={{ pointerEvents: "box-none" }}>
          <Pressable
            style={{ padding: 16, width: 200, backgroundColor: t2 ? "green" : "red" }}
            onPress={() => {
              setT2(true);
              console.log("Inline styling");
            }}
          >
            <Text>Box-none on the parent - inline styling</Text>
            <Text>{t2 ? "TRIGGERED!" : "SHOULD TRIGGER"}</Text>
          </Pressable>
        </View>
        <View style={styles.pointerBoxOnly}>
          <Pressable
            style={{ padding: 16, width: 200, backgroundColor: t3 ? "red" : "green" }}
            onPress={() => {
              setT3(true);
              console.log("StyleSheet.create()");
            }}
          >
            <Text>Box-only on the parent - StyleSheet.create</Text>
            <Text>{t3 ? "TRIGGERED!" : "SHOULD NOT TRIGGER"}</Text>
          </Pressable>
        </View>

        <View style={{ pointerEvents: "box-only" }}>
          <Pressable
            style={{ padding: 16, width: 200, backgroundColor: t4 ? "red" : "green" }}
            onPress={() => {
              setT4(true);
              console.log("Inline styling");
            }}
          >
            <Text>Box-only on the parent - inline styling</Text>
            <Text>{t4 ? "TRIGGERED!" : "SHOULD NOT TRIGGER"}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default function App() {
  return <ScreenOne />;
}

const styles = StyleSheet.create({
  pointerBoxOnly: {
    pointerEvents: "box-only"
  },
  pointerBoxNone: {
    pointerEvents: "box-none"
  }
});
