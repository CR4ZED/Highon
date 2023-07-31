import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";

const Media = () => {
  const [image, setImage] = useState(null);

  const launchGallery = async () => {
    console.log("open gallery");
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      // pass the image uri to the edit image router
      router.push({
        pathname: "/EditMedia",
        params: { imageUri: result.assets[0].uri },
      });
    }
  };

  return (
    <View className=" flex-1">
      <View className="bg-gray-300 flex-1 p-10 relative">
        <TouchableOpacity
          className="p-2 absolute left-2 top-2"
          onPress={router.back}
        >
          <FontAwesome5 name="arrow-left" color="#000000" size={20} />
        </TouchableOpacity>
        <View className="flex-row space-x-4 items-center my-8 border-b-2 pb-5 ">
          <TouchableOpacity className="p-2" onPress={launchGallery}>
            <FontAwesome5 name="image" solid size={20} />
          </TouchableOpacity>
          <Text className="font-semibold">Pick from gallery</Text>
        </View>
        <View className="flex-row space-x-4 items-center ">
          <TouchableOpacity className=" p-2">
            <FontAwesome5 name="camera" solid size={20} />
          </TouchableOpacity>
          <Text className="font-semibold">Capture from camera</Text>
        </View>
      </View>
    </View>
  );
};

export default Media;
