import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const onPostLike = async () => {
    // post info about like to DB
    setIsLiked(!isLiked);
  };
  return (
    <TouchableOpacity
      className="absolute bottom-2 right-2"
      onPress={onPostLike}
    >
      <FontAwesome5
        name="heart"
        outline={!isLiked}
        solid={isLiked}
        size={20}
        color={isLiked ? "#AA0504" : "#FFFFFF"}
      />
    </TouchableOpacity>
  );
};

export default LikeButton;
