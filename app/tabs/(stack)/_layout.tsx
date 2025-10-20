import { Stack } from "expo-router";

const stackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
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
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      {/* <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      /> */}
      <Stack.Screen
        name="(stack)/home"
        options={{
          title: "Inicio ",
        }}
      />
      <Stack.Screen
        name="/tabs/(stack)/profiles"
        options={{
          title: "Perfil ",
        }}
      />
      <Stack.Screen
        name="tabs/(stack)/profiles"
        options={{
          title: "Perfil ",
        }}
      />
      <Stack.Screen
        name="/tabs/(stack)/products[id]"
        options={{
          title: "Producto Selecionado ",
        }}
      />
    </Stack>
  );
};

export default stackLayout;
