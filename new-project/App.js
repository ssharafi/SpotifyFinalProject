import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import TopTracks from './TopTracks';
import TopArtists from './TopArtists';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //Use the NavigationContainer and the Stack to display your app
    //ListOfMovies is just here as a place holder.
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home Page' component={Home} />
        <Stack.Screen name='Top Tracks' component={TopTracks} /> 
        <Stack.Screen name='Top Artists' component={TopArtists} /> 
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