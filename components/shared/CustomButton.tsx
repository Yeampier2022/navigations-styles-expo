import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  children: string;
  className?: string;
}
const CustomButton = ({ children, onPress, onLongPress, className }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className={`p-3 rounded-md mb-2 bg-blue-600 active:opacity-90 ${className}`}
    >
      <Text className="text-black ">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
