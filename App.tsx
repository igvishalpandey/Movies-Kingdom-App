import React from 'react';
import {enableScreens} from 'react-native-screens';
import Customicon from './src/components/Customicon';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';
import SeatBookingScreen from './src/screens/SeatBookingScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Tab" component={TabNavigator} options={{animation: 'default'}} />
          <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{animation: 'slide_from_right'}}/>
          <Stack.Screen name="SeatBooking" component={SeatBookingScreen} options={{animation:'slide_from_bottom'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
