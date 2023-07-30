import { Image } from "react-native";
import React from "react";

const UserIcon = ({ profilePicture, position = {} }) => {
  const { type, top, left, bottom, right } = position;
  return (
    <Image
      source={{
        uri: profilePicture,
      }}
      height={50}
      width={50}
      className={`rounded-full`}
      style={{
        borderColor: "#FFFFFF",
        borderWidth: 3,
        objectFit: "contain",
        position: type,
        top,
        left,
        bottom,
        right,
      }}
    />
  );
};

export default UserIcon;
