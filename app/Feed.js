import { View, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const Feed = () => {
  const postInfo = {
    postedBy: {
      userName: "Ankush",
      profilePicture: "",
      location: "Andhra Pradesh",
    },
    description:
      "Logs for your project will appear below. Press Ctrl+C to exit",
    thumbnail:
      "https://img.freepik.com/premium-photo/view-house-made-from-watermelon-fruit_23-2150162170.jpg?w=360",
    likes: [
      {
        userName: "John Doe",
        profilePicture: "",
      },
      {
        userName: "Adam Smith",
        profilePicture: "",
      },
    ],
    createdAt: new Date(),
  };
  return (
    <View>
      <Header />
      <ScrollView className="px-4 pt-5">
        <View className="pb-36">
          <Card {...postInfo} />
          <Card {...postInfo} />
          <Card {...postInfo} />
          <Card {...postInfo} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Feed;
