import React, { FC, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
  withSpring,
  withDelay,
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";

import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/screen";

type Props = {
  item: TOnboardingItem;
  index: number;
  scrollX: Animated.SharedValue<number>;
};

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

const BouncyOnbarodingItem: FC<Props> = ({ item, index, scrollX }) => {
  const inputRange = useMemo(() => {
    const start = (index - 1) * SCREEN_WIDTH;
    const end = (index + 1) * SCREEN_WIDTH;
    return [start, index * SCREEN_WIDTH, end];
  }, [index]);

  // Derived values
  const titleTranslateX = useDerivedValue(() =>
    interpolate(scrollX.value, inputRange, [SCREEN_WIDTH, 0, -SCREEN_WIDTH])
  );

  const descriptionTranslateX = useDerivedValue(() =>
    interpolate(scrollX.value, inputRange, [SCREEN_WIDTH, 0, -SCREEN_WIDTH])
  );

  const imageTranslateX = useDerivedValue(() =>
    interpolate(scrollX.value, inputRange, [SCREEN_WIDTH, 0, -SCREEN_WIDTH])
  );

  // Animated styles
  const titleAStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withDelay(0, withSpring(titleTranslateX.value)) },
      ],
    };
  });

  const descriptionAStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withDelay(100, withSpring(descriptionTranslateX.value)) },
      ],
    };
  });

  const imageAStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withDelay(300, withTiming(imageTranslateX.value)) },
      ],
    };
  });

  return (
    <View style={[styles.container]}>
      <Animated.Text style={[styles.title, titleAStyle]}>
        {item.title}
      </Animated.Text>
      <Animated.Text style={[styles.description, descriptionAStyle]}>
        {item.description}
      </Animated.Text>
      <Animated.Image style={[styles.image, imageAStyle]} source={item.image} />
    </View>
  );
};

export default BouncyOnbarodingItem;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    width: "80%",
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    width: "80%",
    height: SCREEN_HEIGHT / 4,
    resizeMode: "contain",
  },
});
