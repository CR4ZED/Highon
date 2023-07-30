import React from "react";
import { View, ScrollView } from "react-native";
import WallPost from "../components/WallPost";
import Header from "../components/Header";

export default function App() {
  return (
    // Header
    <>
      <Header />

      {/* Body */}
      <ScrollView className="px-2 pt-5">
        <View className="flex-row space-x-2 items-start pb-5">
          <View className="flex-1">
            {["red", "green", "blue", "orange", "purple", "indigo"].map(
              (color, index) => (
                <WallPost color={color} itemIndex={index} key={color} />
              )
            )}
          </View>
          <View className="flex-1">
            {["red", "green", "blue", "orange", "purple", "indigo"].map(
              (color, index) => (
                <WallPost color={color} itemIndex={index} key={color} isEven />
              )
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
