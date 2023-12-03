
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
 
  
} from 'react-native';
import charSheet from './CharacterSheet';


        const HomeScreen = ({navigation}) => {
  
            return (
              <View>
              <SafeAreaView style={{
                backgroundColor: '#BE4E51',
                
              }}>
                  
          
             
              <Text 
          style={{
                      fontFamily: 'AmericanTypewriter',
                      textAlign: 'center',
                      fontSize: 30,
                      textAlignVertical: 'center',
                      
                      
                  }}>
          Allow me to tag along through your campaign! {"\n"}
          Begin your adventure! {"\n"}
          Beware the Dungeon Master... {"\n"}
          and the fickle dice!{"\n"}
          </Text>
          </SafeAreaView>
          <Button
            title="Character Sheet"
            onPress={() =>
              navigation.replace('CharacterSheet')
            }
          />
          {/* <Button
                  title='Character Sheet'
                  onPress={() => navigation.navigate('charSheet')
                  }/>
          <Button
            onPress={() => {
              console.log('Dice Roller selected.');
            }}
            title="Dice Roller"
          /> */}
              </View>
            );
           
          
          }
    
export default HomeScreen;