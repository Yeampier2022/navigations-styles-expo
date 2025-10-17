import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  children: string;
}
const CustomButton = ({ children, onPress, onLongPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className={`p-3 rounded-md  bg-blue-600 active:opacity-90 `}
      
    >
      <Text className="text-black ">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
