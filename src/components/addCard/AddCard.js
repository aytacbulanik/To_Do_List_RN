import React from 'react';
import {View,TextInput,Button} from 'react-native';
import styles from './AddCard.style';

const addCard = () => {
    return(
        <View style={styles.container}>
            <View style={styles.viewContainer}>
            <TextInput  
            style={styles.textInputContainer}
                placeholder='lüften bir iş giriniz...'
            />
            <Button title='EKLE'
                style={styles.buttonContainer}
                
            />
            </View>
        </View>
    );
};

export default addCard;