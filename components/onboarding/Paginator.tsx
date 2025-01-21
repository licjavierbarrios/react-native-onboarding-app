import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  itemsLength: number;
  activeIndex: number;
};

const SIZE = 10;
const GAP = 4;

const Paginator: FC<Props> = ({ itemsLength, activeIndex }) => {
  // Usa useSharedValue para manejar el índice activo
  const sharedIndex = useSharedValue(activeIndex);

  // Actualiza sharedIndex con un efecto cuando activeIndex cambie
  React.useEffect(() => {
    sharedIndex.value = withTiming(activeIndex * (SIZE + GAP));
  }, [activeIndex, sharedIndex]);

  // Usa el sharedIndex en el estilo animado
  const dotAstyle = useAnimatedStyle(() => {
    return {
      left: sharedIndex.value,
    };
  });

  return (
    <View
      style={{ flexDirection: "row", columnGap: GAP, position: "relative" }}
    >
      {Array.from({ length: itemsLength }).map((_, index) => {
        return <View key={index} style={[styles.dot]} />;
      })}
      <Animated.View style={[styles.activeDot, dotAstyle]} />
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE,
    backgroundColor: "#E7DBD3",
  },
  activeDot: {
    position: "absolute",
    backgroundColor: "black",
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE,
  },
});
