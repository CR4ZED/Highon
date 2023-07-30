import { FontAwesome5 } from "@expo/vector-icons";
import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const Header = () => {
  return (
    <View className=" bg-white pt-12 px-2 pb-2 flex-row items-center justify-between">
      <Image
        source={{
          uri: "https://highon.co.in/static/media/logoImg.9635e655c9b2f2d82717.png",
        }}
        height={40}
        width={80}
        style={{
          objectFit: "contain",
        }}
      />
      <View className="flex-row space-x-4 items-center">
        <TouchableOpacity
          className="border-black border-2 p-1 rounded-md"
          onPress={() => router.push("/Create")}
        >
          <FontAwesome5 name="plus" size={15} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/Feed")}>
          <FontAwesome5 name="search" outline size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
