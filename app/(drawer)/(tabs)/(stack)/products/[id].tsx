import { products } from "@/store/product";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

const ProductId = () => {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const product = products.find((p) => p.id == params.id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? "Producto",
    });
  }, [product]);

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
