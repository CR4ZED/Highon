import { View, Text, Image, Touchable } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

const EditMedia = () => {
  const { imageUri = "" } = useLocalSearchParams();
  const [aspectRatio, setAspectRatio] = useState("1/1");
  const [filter, setFilter] = useState("none");

  const onClickNext = () => {
    router.push({
      pathname: "/EditPost",
      params: {
        aspectRatio,
        filter,
        imageUri,
      },
    });
  };

  return (
    <View className="flex-1">
      <View className="bg-white p-4 flex-row items-center justify-between">
        <TouchableOpacity onPress={router.back}>
          <FontAwesome5 name="arrow-left" color="#000000" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-blue-500 rounded-xl "
          onPress={onClickNext}
        >
          <Text className="text-white px-8 py-2">Next</Text>
        </TouchableOpacity>
      </View>

      <View className="items-center justify-center p-5 flex-1">
        {imageUri && (
          <Image
            className="rounded-lg transition-all ease-in duration-500"
            source={{ uri: imageUri }}
            style={{ height: 200, aspectRatio }}
          />
        )}
      </View>

      <View className="bg-white pt-10">
        <View className=" bg-gray-200 py-5">
          <Text className="text-center font-semibold mb-5 text-gray-500">
            Aspect Ratio
          </Text>

          <View className="flex-row items-center justify-evenly">
            <View className="items-center">
              <TouchableOpacity
                className={`h-8 w-8 border-gray-400 rounded-sm border-2 ${
                  aspectRatio === "1/1" && "border-blue-500 border-2"
                }`}
                onPress={() => setAspectRatio("1/1")}
              ></TouchableOpacity>
              <Text
                className={`text-gray-400 font-semibold ${
                  aspectRatio === "1/1" && "text-blue-500"
                }`}
              >
                1:1
              </Text>
            </View>
            <View className="items-center">
              <TouchableOpacity
                className={`h-8 w-6 border-gray-400 rounded-sm border-2  ${
                  aspectRatio === "4/5" && "border-blue-500"
                }`}
                onPress={() => setAspectRatio("4/5")}
              ></TouchableOpacity>
              <Text
                className={`text-gray-400 font-semibold ${
                  aspectRatio === "4/5" && "text-blue-500"
                }`}
              >
                4:5
              </Text>
            </View>
            <View className="items-center">
              <TouchableOpacity
                className={`h-8 w-12 border-gray-400  rounded-sm border-2  ${
                  aspectRatio === "16/9" && "border-blue-500"
                }`}
                onPress={() => setAspectRatio("16/9")}
              ></TouchableOpacity>
              <Text
                className={`text-gray-400 font-semibold ${
                  aspectRatio === "16/9" && "text-blue-500"
                }`}
              >
                16:9
              </Text>
            </View>
          </View>
        </View>
        <View className="bg-gray-100 p-5">
          <Text className="text-gray-500 font-semibold mb-8">Filter</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="items-center mr-4">
              <TouchableOpacity
                className={`h-20 w-20  rounded-md bg-white justify-center items-center  ${
                  filter === "none" && "border-blue-500 border-2"
                }`}
                onPress={() => setFilter("none")}
              ></TouchableOpacity>
              <Text
                className={`text-gray-400 font-semibold ${
                  filter === "none" && "text-blue-500"
                }`}
              >
                None
              </Text>
            </View>
            <View className="items-center mr-4">
              <TouchableOpacity
                className={`h-20 w-20   rounded-md justify-center items-center bg-red-500  ${
                  filter === "retro" && "border-blue-500 border-2"
                }`}
                onPress={() => setFilter("retro")}
              ></TouchableOpacity>
              <Text
                className={`text-gray-400 font-semibold ${
                  filter === "retro" && "text-blue-500"
                }`}
              >
                Retro
              </Text>
            </View>
            <View className="items-center mr-4">
              <TouchableOpacity
                className={`h-20 w-20 rounded-md bg-gray-600 justify-center items-center ${
                  filter === "b&w" && "border-blue-500 border-2"
                }`}
                onPress={() => setFilter("b&w")}
              ></TouchableOpacity>
              <Text
                className={`text-gray-400 font-semibold ${
                  filter === "b&w" && "text-blue-500"
                }`}
              >
                B&W
              </Text>
            </View>
            <View className="items-center mr-4">
              <TouchableOpacity
                className={`h-20 w-20  rounded-md bg-yellow-500 justify-center items-center ${
                  filter === "vivid" && "border-blue-500 border-2"
                }`}
                onPress={() => setFilter("vivid")}
              ></TouchableOpacity>
              <Text
                className={`text-gray-400 font-semibold ${
                  filter === "vivid" && "text-blue-500"
                }`}
              >
                Vivid
              </Text>
            </View>
            <View className="items-center mr-4">
              <TouchableOpacity
                className={`h-20 w-20  rounded-md bg-orange-500 justify-center items-center ${
                  filter === "vibrant" && "border-blue-500 border-2"
                }`}
                onPress={() => setFilter("vibrant")}
              ></TouchableOpacity>
              <Text
                className={`text-gray-400 font-semibold ${
                  filter === "vibrant" && "text-blue-500"
                }`}
              >
                Vibrant
              </Text>
            </View>
            <View className="items-center mr-4">
              <TouchableOpacity
                className={`h-20 w-20  rounded-md bg-green-500 justify-center items-center ${
                  filter === "hdr" && "border-blue-500 border-2"
                }`}
                onPress={() => setFilter("hdr")}
              ></TouchableOpacity>
              <Text
                className={`text-gray-400 font-semibold ${
                  filter === "hdr" && "text-blue-500"
                }`}
              >
                HDR
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default EditMedia;
