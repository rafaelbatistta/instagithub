import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function InstaGitHubCard({ githubUser }) {
  const [liked, setLikeState] = useState(false);
  return (
    <View style={{ flexDirection: 'column', padding: 1, alignItems: 'left'}}>
       <View>
    { /*InstaCardHeader */}

        
         <Image
         style={{
         marginright: 15,
         marginTop: 30,
         width: 40,
         height: 40,
         borderRadius: 20,
          }} 
          source={{
          uri: `https://github.com/${githubUser}.png`
          }} 
          />
           <Text>{githubUser}</Text>
        </View>

        { /*InstaCardHeader */}
        { /*InstaCardImage */}
        <Image
          style={{
          width: '100%',
          height: 350,
          }} 
          source={{
          uri: `https://github.com/${githubUser}.png`
          }} />

{ /*InstaCardHeader */}
{ /*Footer */}
     <View style={{flexDirection: 'row', padding: 15, alignItems: 'center'}}>
      <TouchableOpacity onPress={() => setLikeState(!liked)}> 
        
        { liked && <Ionicons name="ios-heart-sharp" size={24} color="red" />}
        {!liked && <Ionicons name="ios-heart" size={24} color="black" />}
      
      </TouchableOpacity>
     </View>
     { /*Footer */}
     
  </View> 
  )
}

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <ScrollView>
     {
     [
      'omariosouto', 
      'vweberfroes', 
      'gabrielfroes', 
      'peas'
    ].map((githubUser) => 
     <InstaGitHubCard key={githubUser} githubUser={githubUser} />
     )}
     </ScrollView>
    </SafeAreaView>   
    
    
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   // alignItems: 'center',
   // justifyContent: 'center',
  },
});
