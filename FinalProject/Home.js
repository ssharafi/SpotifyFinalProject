import { StyleSheet, Text, View, Button } from 'react-native';
import TopTracks from './TopTracks';
import TopArtists from './TopArtists';

export default function Home({navigation, route}) {

  let product={name: 'My cool product',
             price: 45,
             description: 'Ice cream maker'};
    
    return (
        <View style={styles.container}>
          <Text >Home Screen</Text>
          <Button title="Go to Top Tracks" 
          onPress={()=>navigation.navigate('TopTracks', product)}/>
        </View>
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
  
