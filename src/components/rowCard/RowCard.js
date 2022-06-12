import React from 'react';
import {View,Text} from 'react-native';
import styles from './RowCard.style';

const rowCard = () => {
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.rowText}>Deneme listesi</Text>
        </View>
    );
};

export default rowCard;