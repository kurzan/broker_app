import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './app/providers/AuthProvider';
import { DataProvider } from './app/providers/DataProvider';
import Navigation from './app/navigation/navigation'; 
import Layout from './app/components/layouts/Layout';
import StoryContainer from './app/components/screens/home/stories/StoryContainer';
import { useEffect } from 'react';
import { useData } from './app/hooks/useData';

export default function App() {

  const { activeStories, setActiveStories } = useData();


  useEffect(() => {
    console.log(activeStories)
  }, [activeStories])

  return (
    <AuthProvider>
      <DataProvider>
        <StoryContainer/>
        <Navigation/>
      </DataProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




