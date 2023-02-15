import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './app/providers/AuthProvider';
import Navigation from './app/navigation/navigation'; 
import Layout from './app/components/layouts/Layout';

export default function App() {

  return (
    <AuthProvider>
      <Navigation/>
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
