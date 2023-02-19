import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from 'react';
import Auth from "../components/screens/auth/auth";
import Home from "../components/screens/home/home";
import Market from '../components/screens/markets/Market';
import Quotes from '../components/screens/quotes/Quotes';
import Profile from "../components/screens/profile/profile";
import Footer from "../components/layouts/footer/Footer";

import TopInstruments from '../components/screens/markets/top-instruments/TopInstruments';
import PublicOffering from '../components/screens/markets/public-offering/public-offering';
import InstrumentView from '../components/screens/instrument-view/instrument-view';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { user } = useAuth();
  const ref = useNavigationContainerRef();
  const [name, setName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const timeout = setTimeout(() => setName(ref.getCurrentRoute()?.name), 100);

    return () => clearTimeout(timeout);
  }, [])

  useEffect(() => {
    const listener = ref.addListener('state', () => {
      setName(ref.getCurrentRoute()?.name)
    })

    return () => {
      ref.removeListener('state', listener);
    }
  }, [user])

  return (
    <>
      <NavigationContainer ref={ref}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <>
              <Stack.Group>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Market' component={Market} />
                <Stack.Screen name='Quotes' component={Quotes} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='InstrumentView' component={InstrumentView}/>
              </Stack.Group>
            </>
          ) : (<Stack.Screen name='Auth' component={Auth} />)}
        </Stack.Navigator>
      </NavigationContainer>
      {user && <Footer navigate={ref.navigate} currentRoute={name} />}
    </>
  )
};

export default Navigation;