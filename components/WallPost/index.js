import { TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import LikeButton from "../LikeButton";

const WallPost = ({ color, itemIndex, isEven, imageUrl }) => {
  return (
    <TouchableOpacity
      style={{
        height: getHeightForColumn(itemIndex, isEven),
        backgroundColor: color,
      }}
      className={`rounded-md mb-2 w-full relative`}
      key={color}
    >
      {/* <Image /> */}
      <Image
        source={{
          uri: imageUrl,
        }}
        style={{ objectFit: "cover" }}
        className="h-full w-full rounded-md"
      />
      <LikeButton />
    </TouchableOpacity>
  );
};

const getHeightForColumn = (index, isEven) => {
  const rowSizes = [152, 270, 337];
  if (!isEven) {
    return index < rowSizes.length
      ? rowSizes[index]
      : rowSizes[index - rowSizes.length];
  } else {
    return index < rowSizes.length
      ? rowSizes[rowSizes.length - index - 1]
      : rowSizes[rowSizes.length - 1 - (index % rowSizes.length)];
  }
};

export default WallPost;
