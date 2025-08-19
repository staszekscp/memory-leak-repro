import "react-native-gesture-handler";
import * as React from "react";
import { Button, View, Animated } from "react-native";

function ScreenOne() {
  const progress = new Animated.Value(1);

  const [isVisible, setIsVisible] = React.useState(true);

  const animateOpacity = () => {
    if (isVisible) {
      // Fade out first, then remove from DOM
      Animated.timing(progress, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start(({ finished }) => {
        console.log(finished);
      });
      setIsVisible(false);
    } else {
      // Add to DOM first, then fade in
      setIsVisible(true);
      progress.setValue(0);
      Animated.timing(progress, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start(({ finished }) => {
        console.log(finished);
      });
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Animate Red Div" onPress={animateOpacity} />
      <View style={{ width: 100, height: 100, marginTop: 20 }}>
        {isVisible && (
          <Animated.View
            style={{
              width: 100,
              height: 100,
              backgroundColor: "red",
              opacity: progress
            }}
          >
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: "orange",
                margin: 10
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "yellow",
                  margin: 10
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "green",
                    margin: 10
                  }}
                >
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      backgroundColor: "blue",
                      margin: 5
                    }}
                  >
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "purple",
                        margin: 5
                      }}
                    >
                      <View
                        style={{
                          width: 15,
                          height: 15,
                          backgroundColor: "pink",
                          margin: 2.5
                        }}
                      >
                        <View
                          style={{
                            width: 10,
                            height: 10,
                            backgroundColor: "cyan",
                            margin: 2.5
                          }}
                        >
                          <View
                            style={{
                              width: 5,
                              height: 5,
                              backgroundColor: "magenta",
                              margin: 2.5
                            }}
                          >
                            <View
                              style={{
                                width: 2,
                                height: 2,
                                backgroundColor: "black",
                                margin: 1.5
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Animated.View>
        )}
      </View>
    </View>
  );
}

export default function App() {
  return <ScreenOne />;
}
