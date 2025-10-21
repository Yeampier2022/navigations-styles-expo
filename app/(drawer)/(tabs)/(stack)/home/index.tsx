import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import { View } from "react-native";

const homeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <View className="py-[10vw] px-[5vw]">
      <Link href="/products" asChild>
        <CustomButton className="bg-red-800">Productos</CustomButton>
      </Link>

      <CustomButton
        children="Perfil"
        onPress={() => router.push("/profiles")}
      />
      <CustomButton onPress={() => onToggleDrawer()}>Abir menu</CustomButton>
    </View>
  );
};

export default homeScreen;
