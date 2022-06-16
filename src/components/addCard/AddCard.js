import React, {useState, useEffect} from 'react';
import {View,TextInput,Button} from 'react-native';
import styles from './AddCard.style';

const addCard = (props) => {
const [newToDo,setToDo] = useState("");

function saveToDo() {
    console.log(newToDo)
};

    return(
        <View style={styles.container}>
            <View style={styles.viewContainer}>
            <TextInput  
            style={styles.textInputContainer}
            placeholder='Yapılacak...'
           color= 'white'
            onChangeText={(words) => {
               setToDo(words);
            }}
           placeholderTextColor={'#808080'}
            />
            <View style={styles.buttonContainer} >
                <Button title='Kaydet'
                color={'white'}
                onPress={saveToDo}
            />
            </View>
            </View>
        </View>
    );
};

export default addCard;