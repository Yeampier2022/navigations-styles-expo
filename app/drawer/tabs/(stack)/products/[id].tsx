import { products } from "@/store/product";
import { Redirect, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const ProductId = () => {
  const params = useLocalSearchParams();

  const product = products.find((p) => p.id == params.id);

  if (!product) {
    return <Redirect href="/"></Redirect>;
  }
  return (
    <View className="py-[2vw] px-[5vw]">
      <Text className="font-bold text-2xl">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="">{product.price}</Text>
    </View>
  );
};

export default ProductId;
