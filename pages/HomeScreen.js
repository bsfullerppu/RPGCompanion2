
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet
 
  
} from 'react-native';
import charSheet from './CharacterSheet';


        const HomeScreen = ({navigation}) => {
          const styles = StyleSheet.create({
              button:{
      borderColor: '#FA9E11',
      borderWidth: 5,
      borderRadius: 15  
              
            }, text:  {
              fontFamily: 'AmericanTypewriter',
              textAlign: 'center',
              fontSize: 30,
              textAlignVertical: 'center',
              backgroundColor: '#FA9E11'
  
          }
          });
            return (
              
                  <View
              style={[
                styles.container,
                {
                  
                  flexDirection: 'column',
                },
              ]}>
              <SafeAreaView>
                  
                  
             
              <Text style={styles.text}>
          Allow me to tag along through your campaign! {"\n"}
          Begin your adventure! {"\n"}
          Beware the Dungeon Master... {"\n"}
          and the fickle dice!{"\n"}

          </Text>
          </SafeAreaView>
          <View style={styles.container}>
          
          </View>
          <View style={styles.container} />
          
          <Button buttonStyle={
            styles.button
          }
            title="Character Sheet"
            onPress={() =>
              navigation.replace('CharacterSheet')
            }
          />
          <Button style={
            styles.button
          }
            title="Roll them dice here"
            onPress={() =>
              navigation.replace('Dice')
            }
          />
              </View>
            )
           
          

          }
    
export default HomeScreen;