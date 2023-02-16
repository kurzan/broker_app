import { FC, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import tw from 'tailwind-rn';
import { useStories } from "./useStories";

import Loader from "../../../ui/loader";
import StoryItem from "./StoryItem";


const Stories = () => {

const {stories, isLoading} = useStories();

  return (
    <View style={tw('my-7')}>
      { isLoading ? <Loader/> : (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal >
          {stories.map(story => <StoryItem key={story._id} story={story} />)}
        </ScrollView>)}
    </View>
  )
};

export default Stories;