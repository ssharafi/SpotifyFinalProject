import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListOfMovies from './ListOfMovies';
import MovieDetails from './MovieDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //Use the NavigationContainer and the Stack to display your app
    //ListOfMovies is just here as a place holder.
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListOfMovies'>
        <Stack.Screen name='List of Movies' component={ListOfMovies} />
        <Stack.Screen name='Movie Details' component={MovieDetails} />  
      </Stack.Navigator>
    </NavigationContainer>
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