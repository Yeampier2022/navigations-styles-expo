import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";

const stackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack: any) => {
    if (canGoBack) {
      router.back();
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer);
    return;
  };
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-circle" : "menu-outline"}
            size={20}
            onPress={() => onHeaderLeftClick(canGoBack)}
            className="mr-5"
          />
        ),
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      />

      <Stack.Screen
        name="profiles/index"
        options={{
          title: "Perfil",
        }}
      />

      <Stack.Screen
        name="products/[id]"
        options={{
          title: "Producto Selecionado ",
        }}
      />
    </Stack>
  );
};

export default stackLayout;
