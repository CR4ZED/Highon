import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";

const Create = () => {
  const returnBackToWall = () => {
    router.back();
  };

  return (
    <View className="bg-white p-5 justify-center flex-1">
      <View className="bg-gray-300 rounded-xl p-5 relative">
        <TouchableOpacity
          className="bg-gray-600 rounded-full h-8 w-8 p-2 absolute right-2 top-2 items-center justify-center"
          onPress={returnBackToWall}
        >
          <FontAwesome5 name="times" color="#ffffff" />
        </TouchableOpacity>
        <View className="flex-row space-x-4 items-center mb-5 border-b-2 pb-5 border-gray-400">
          <TouchableOpacity className="border-black border-2 rounded-md p-2">
            <FontAwesome5 name="plus" solid />
          </TouchableOpacity>
          <Text className="font-semibold">Create Post</Text>
        </View>
        <View className="flex-row space-x-4 items-center">
          <TouchableOpacity className="border-black border-2 rounded-md p-2">
            <FontAwesome5 name="plus" solid />
          </TouchableOpacity>
          <Text className="font-semibold">Create a story</Text>
        </View>
      </View>
    </View>
  );
};

export default Create;
