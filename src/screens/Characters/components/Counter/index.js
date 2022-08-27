import { View, Text } from "react-native";

const Counter = ({ quantity }) => {
  return (
    <View
      style={{
        backgroundColor: "#A52A2A",
        borderRadius: "50%",
        position: "absolute",
        paddingVertical: 2,
        paddingHorizontal: 4,
        top: 0,
        right: 0,
      }}
    >
      <Text
        style={{
          color: "#fff",
          textAlign: "center",
        }}
      >
        {quantity}
      </Text>
    </View>
  );
};

export default Counter;
