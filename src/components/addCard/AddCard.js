import React from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import styles from './AddCard.style';

const addCard = () => {
    return(
        <View style={styles.container}>
            <TextInput  
            style={styles.textInputContainer}
                placeholder='lüften bir iş giriniz...'
            />
            <Button 
                style={styles.buttonContainer}
            />
        </View>
    );
};

export default addCard;