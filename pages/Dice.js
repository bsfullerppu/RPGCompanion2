import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet
  
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'


const diceTypes = ["D4", "D6", "D8", "D10", "D12", "D20"]

const DiceChoices = ({navigation, route}) => {
   let rollResult;
    return (
        
        <SafeAreaView>
            
            <View style={{
                 fontFamily: 'AmericanTypewriter',
                 textAlign: 'center',
                 fontSize: 30,
                 textAlignVertical: 'center',
                 backgroundColor: '#FA9E11'
            }}>
            <SelectDropdown style={{
                  backgroundColor: '#BE4E51',
            }}
	data={diceTypes}
	onSelect={(selectedItem, index) => {
        
		console.log(selectedItem, index)
        if (selectedItem === "D4") {
            rollResult = Math.floor(Math.random() * 4) + 1
        } else if (selectedItem === "D6") {
            rollResult = Math.floor(Math.random() * 6) + 1
        } else if (selectedItem === "D8") {
            rollResult = Math.floor(Math.random() * 8) + 1
        } else if (selectedItem === "D10") {
            rollResult = Math.floor(Math.random() * 10) + 1
        } else if (selectedItem === "D12") {
            rollResult = Math.floor(Math.random() * 12) + 1
        } else if (selectedItem === "D20") {
            rollResult = Math.floor(Math.random() * 20) + 1
        } else {
            console.log("Invalid dice selection. Try again.")
       
        }
        alert(rollResult)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		
		return item
	}
    }
    
/>

<Button
            title="Home Screen"
            onPress={() =>
              navigation.replace('HomeScreen')
            }
          />
          <Button
            title="Character Sheet"
            onPress={() =>
              navigation.replace('CharacterSheet')
            }
          />
        

            </View>

        </SafeAreaView>
    )
}
export default DiceChoices;
