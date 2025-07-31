import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStackNavigator as createCustomStackNavigator } from "./CustomNavigator";
import HomeScreen from "../screens/HomeScreen";
import SelectedNavigatorScreen from "../screens/SelectedNavigatorScreen";
import ScreenOne from "../screens/ScreenOne";
import ScreenTwo from "../screens/ScreenTwo";
import RegularStackNavigator from "./RegularStackNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

const RootStack = createStackNavigator();
const CustomStack = createCustomStackNavigator();

function CustomNavigator() {
  return (
    <CustomStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false // We handle headers in our custom navigator
      }}
    >
      <CustomStack.Screen
        name="Home"
        component={SelectedNavigatorScreen}
        options={{ title: "Custom Navigator Home" }}
        initialParams={{ navigatorType: "custom" }}
      />
      <CustomStack.Screen name="ScreenOne" component={ScreenOne} options={{ title: "Custom Navigator - Screen One" }} />
      <CustomStack.Screen name="ScreenTwo" component={ScreenTwo} options={{ title: "Custom Navigator - Screen Two" }} />
    </CustomStack.Navigator>
  );
}

export default function Navigation({ colorScheme }: any) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootStack.Navigator
        initialRouteName="MainHome"
        screenOptions={{
          headerShown: false
        }}
      >
        <RootStack.Screen name="MainHome" component={HomeScreen} />
        <RootStack.Screen name="CustomNavigator" component={CustomNavigator} />
        <RootStack.Screen name="RegularStack" component={RegularStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
