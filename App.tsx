import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './app/providers/AuthProvider';
import { DataProvider } from './app/providers/DataProvider';
import Navigation from './app/navigation/Navigation'; 
import StoryContainer from './app/components/screens/home/stories/StoryContainer';

export default function App() {

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




