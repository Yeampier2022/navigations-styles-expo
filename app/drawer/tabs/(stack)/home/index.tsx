import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import { View } from "react-native";

const homeScreen = () => {
  return (
    <View className="py-[10vw] px-[5vw]">
      <Link href="/drawer/tabs/products" asChild>
        <CustomButton className="bg-red-800">Productos</CustomButton>
      </Link>

      <CustomButton
        children="Perfil"
        onPress={() => router.push("/drawer/tabs/(stack)/profiles")}
      />
    </View>
  );
};

export default homeScreen;
