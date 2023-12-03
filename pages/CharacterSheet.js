import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
 
  
} from 'react-native';
const CharSheet = ({route}) => { return (
    <View>
      <SafeAreaView>
        <Text>
          Here is where we start. For beginners, consult your Dungeon Master. All others, create a character!
        </Text>
        <Text>{route.CharSheet}</Text>
      </SafeAreaView>
    </View>
  )
  }
  export default CharSheet