import React from 'react';
import {View,TextInput,Button} from 'react-native';
import styles from './AddCard.style';

const addCard = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.viewContainer}>
            <TextInput  
            style={styles.textInputContainer}
                placeholder='lüften bir iş giriniz...'
            />
            <View style={styles.buttonContainer} >
                <Button title='EKLE'
                color={'white'}
                onPress={props.kaydet}
            />
            </View>
            
            </View>
        </View>
    );
};

export default addCard;