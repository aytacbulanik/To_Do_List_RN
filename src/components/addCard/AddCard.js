import React from 'react';
import {View,TextInput,Button} from 'react-native';
import styles from './AddCard.style';

const addCard = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.viewContainer}>
            <TextInput  
            style={styles.textInputContainer}
            placeholder='Yapılacak...'
           color= 'white'
           placeholderTextColor={'#808080'}
            />
            <View style={styles.buttonContainer} >
                <Button title='Kaydet'
                color={'white'}
                onPress={props.kaydet}
            />
            </View>
            </View>
        </View>
    );
};

export default addCard;