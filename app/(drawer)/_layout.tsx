import CustomDrawe from "@/components/CustomDrawe";
import { Ionicons } from "@expo/vector-icons";
import Drawer from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawe}
      screenOptions={{
        headerShown: false,
        overlayColor: "rgba(0,0,0,0.4)",
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: "white",
        },
        title: "Pronnamdp",
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Tabs + stack",
          title: "Tabs + stack",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: "User",
          title: "usuario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: "Horario",
          title: "Horario",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="calendar-number-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
