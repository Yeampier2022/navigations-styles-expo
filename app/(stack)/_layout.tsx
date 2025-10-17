import { Stack } from "expo-router";

const stackLayout = () => {
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
        // headerShown: false
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      />
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio ",
        }}
      />
      <Stack.Screen
        name="profiles/index"
        options={{
          title: "Perfil ",
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
