import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import { View } from "react-native";

const homeScreen = () => {
  return (
    <View className="py-[10vw] px-[5vw]">
      <Link href="/products" asChild>
        <CustomButton>Productos</CustomButton>
      </Link>

      <CustomButton
        children="Productos"
        onPress={() => router.push("/products")}
      />
    </View>
  );
};

export default homeScreen;
