import { FC } from "react";
import { Pressable, View, ImageBackground, Text } from "react-native";
import tw from 'tailwind-rn';
import { IStory } from "./types";


const StoryItem: FC<{story: IStory}> = ({story}) => {


  return (
    <Pressable onPress={() => {}}>
      <View style={{
        ...tw('w-24 h-24 rounded-2xl ml-4 border-solid border-blue-400'),
        padding: 2,
        borderWidth: 1,
      }}>
        <ImageBackground source={{uri: story.images[0]}} resizeMode='cover' style={tw('w-full h-full justify-end')} imageStyle={tw('rounded-xl')} />
        <Text style={{ ...tw('text-white'), fontSize: 12, margin: 8 }} >{story.heading}</Text>
      </View>
    </Pressable>
  )
};

export default StoryItem;