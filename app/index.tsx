import { Redirect } from "expo-router";
import "../global.css";

export default function app() {
  return  <Redirect href="/(stack)/home" /> 
    // <View className="flex-1 items-center justify-center bg-white">
    //   <Text className="text-xl font-bold text-blue-500">
    //     Welcome to Nativewind!
    //   </Text>
    //   <Text className="text-xl font-work-regular text-blue-500">
    //     Welcome to Nativewind!
    //   </Text>
    //   <Text className="text-xl font-bold text-blue-500">
    //     Welcome to Nativewind!
    //   </Text>
    //   <Link href="/products">Productos</Link>
    // </View>
     
  
}
