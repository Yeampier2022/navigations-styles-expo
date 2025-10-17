import { Link } from "expo-router";
import { View } from "react-native";

const homeScreen = () => {
  return (
    <View className="py-[10vw] px-[5vw]">
      <Link className="mb-[1vw]" href="/products">
        Productos
      </Link>
      <Link href="/profiles">Perfiles</Link>
    </View>
  );
};

export default homeScreen;
