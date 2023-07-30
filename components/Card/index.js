import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment/moment";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import LikeButton from "../LikeButton";
import UserIcon from "../UserIcon";

const Card = ({ postedBy, description, thumbnail, likes, createdAt }) => {
  const {
    userName: authorName,
    profilePicture: authorProfilePicture,
    location,
  } = postedBy;
  const postedAt = moment(createdAt).fromNow();

  return (
    <View
      className="bg-white rounded-xl mb-5"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
      }}
    >
      {/* card header */}
      <View className="flex-row items-center space-x-2 rounded-t-xl p-2">
        {/* posted by */}
        <UserIcon profilePicture="https://randomuser.me/api/portraits/men/75.jpg" />
        <View className="flex-1">
          <Text className="font-bold">{authorName}</Text>
          <Text className="text-gray-400">
            {location}, {postedAt}
          </Text>
        </View>
        <TouchableOpacity>
          <FontAwesome5 name="ellipsis-h" size={20} color="#00000029" />
        </TouchableOpacity>
      </View>
      {/* card thumbnail */}
      <View className="relative">
        <Image
          source={{
            uri: thumbnail,
          }}
          height={400}
          style={{ objectFit: "cover" }}
          className="rounded-xl w-full"
        />
        <LikeButton />
      </View>
      {/* card likes */}
      <View className="flex-row  items-center p-2">
        <View className="relative h-12">
          <UserIcon
            profilePicture="https://randomuser.me/api/portraits/men/75.jpg"
            position={{ type: "absolute", top: 0, left: 0 }}
          />
          <UserIcon
            profilePicture="https://randomuser.me/api/portraits/men/75.jpg"
            position={{ type: "absolute", top: 0, left: 25 }}
          />
          <UserIcon
            profilePicture="https://randomuser.me/api/portraits/men/75.jpg"
            position={{ type: "absolute", top: 0, left: 50 }}
          />
        </View>
        <Text className="ml-28 text-gray-500">
          Surendra and 35 others emoted
        </Text>
      </View>
      {/* card description */}
      <Text className="p-2 text-gray-500">{description}</Text>
    </View>
  );
};

export default Card;
