import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
 StyleSheet,
 TextInput,
 ScrollView
  
} from 'react-native';
import HomeScreen from './HomeScreen';
import { DataTable } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { useForm } from 'react-hook-form';
const CharSheet = ({navigation, route}) => { 
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#FA9E11'
    },
  });
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [strength, setStr] = useState('');
  const [constitution, setCon] = useState('');
  const [wisdom, setWis] = useState('');
  const [charisma, setCha] = useState('');
  const [intelligence, setInt] = useState('');
  const [dexterity, setDex] = useState('');
  const [backstory, setStory] = useState('');
  let charArray = []
  return (
  
    <ScrollView>
      
  
      <SafeAreaView>
        <Text style={{
                      fontFamily: 'AmericanTypewriter',
                      textAlign: 'center',
                      fontSize: 30,
                      textAlignVertical: 'center',
                      backgroundColor: '#FA9E11'
                      
                  }}>
          Here is where we start. For beginners, consult your Dungeon Master. All others, create a character!
        </Text>
     <ScrollView style={{backgroundColor: '#F7F2EF'}}>

      <TextInput
        style={{height: 40}}
        placeholder="Type here to set your character's name!"
        onChangeText={newText => setName(newText)}
        defaultValue={name}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Type here to set your character's age!"
        onChangeText={newText => setAge(newText)}
        defaultValue={age}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Type here to set your character's strength!"
        onChangeText={newText => setStr(newText)}
        defaultValue={strength}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Type here to set your character's constitution!"
        onChangeText={newText => setCon(newText)}
        defaultValue={constitution}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Type here to set your character's wisdom!"
        onChangeText={newText => setWis(newText)}
        defaultValue={wisdom}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Type here to set your character's charisma!"
        onChangeText={newText => setCha(newText)}
        defaultValue={charisma}
      />
      <TextInput
      style={{height: 40}}
      placeholder="Type here to set your character's intelligence!"
      onChangeText={newText => setInt(newText)}
      defaultValue={intelligence}
    />
    <TextInput
        style={{height: 40}}
        placeholder="Type here to set your character's dexterity!"
        onChangeText={newText => setDex(newText)}
        defaultValue={dexterity}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Type here to set your character's backstory!"
        onChangeText={newText => setStory(newText)}
        defaultValue={backstory}
      />
      <Button
      title="Save Input"
      onPress={() => 
        charArray.push(name, age, strength, constitution, wisdom, charisma, intelligence, dexterity, backstory)
       
      }
      
      />
      <Button
      title="View Character"
      onPress={() =>
      alert(charArray)
      }
      />

     </ScrollView>
       
      </SafeAreaView>
      <Button
            title="Home Screen"
            onPress={() =>
              navigation.replace('HomeScreen')
            }
          />
          <Button
            title="Dice"
            onPress={() =>
              navigation.replace('Dice')
            }
          />
    </ScrollView>
    
  )
  
  }
  export default CharSheet