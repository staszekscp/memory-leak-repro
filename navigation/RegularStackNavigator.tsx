import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SelectedNavigatorScreen from "../screens/SelectedNavigatorScreen";
import ScreenOne from "../screens/ScreenOne";
import ScreenTwo from "../screens/ScreenTwo";

const Stack = createStackNavigator();

export default function RegularStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={
        {
          headerShown: false
        } as any
      }
    >
      <Stack.Screen
        name="Home"
        component={SelectedNavigatorScreen}
        options={{ title: "Regular Stack Home" }}
        initialParams={{ navigatorType: "regular" }}
      />
      <Stack.Screen name="ScreenOne" component={ScreenOne} options={{ title: "Regular Stack - Screen One" }} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{ title: "Regular Stack - Screen Two" }} />
    </Stack.Navigator>
  );
}
