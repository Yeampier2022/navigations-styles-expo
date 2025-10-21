import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import { Text, View } from "react-native";

const CustomDrawe = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150] rounded-xl border-fuchsia-500">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-violet-700 font-work-regular text-3xl">YH</Text>
        </View>
      </View>

      {/* DrawerItems */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawe;
