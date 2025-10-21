import { products } from "@/store/product";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";

const productsScrenn = () => {
  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-extrabold">{item.title}</Text>
            <Text className="">{item.description}</Text>

            <View className="flex flex-row justify-between mt-2">
              <Text className="font-bold">{item.price}</Text>
              <Link href={`/products/${item?.id}`}>
                Ver Detalles
              </Link>
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default productsScrenn;
