import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from 'react';
import Auth from "../components/screens/auth/auth";
import Home from "../components/screens/home/home";
import Payments from "../components/screens/payments/payments";
import Profile from "../components/screens/profile/profile";
import Footer from "../components/layouts/footer/Footer";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { user } = useAuth();
  const ref = useNavigationContainerRef();
  const [name, setName]  = useState<string | undefined>(undefined);

  useEffect(() => {
    const timeout = setTimeout(() => setName(ref.getCurrentRoute()?.name), 100);

    return () => clearTimeout(timeout);
  }, [])

  return (
    <>
      <NavigationContainer ref={ref}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {!user ? (
            <>
              <Stack.Screen name='Home' component={Home} />
              <Stack.Screen name='Payments' component={Payments} />
              <Stack.Screen name='Profile' component={Profile} />
            </> 
          ) : (<Stack.Screen name='Auth' component={Auth} />)}
        </Stack.Navigator> 
      </NavigationContainer>
      <Footer navigate={ref.navigate} currentRoute={name} />
    </>
  )
};

export default Navigation;