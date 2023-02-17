import { View, ScrollView } from "react-native";
import { FC } from 'react';
import tw from 'tailwind-rn';
import { useData } from "../../../../hooks/useData";
//@ts-ignore
import { StoryContainer as SC } from 'react-native-stories-view';


const StoryContainer = () => {

  const { activeStories, setActiveStories } = useData();

  return activeStories && (
    <SC
      visible
      enableProgress={true}
      images={activeStories}
      duration={20}
      onComplete={() => setActiveStories(null)}
      containerStyle={{
        width: '100%',
        height: '100%',
      }}
    />
  )


};

export default StoryContainer;