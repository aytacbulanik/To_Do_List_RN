import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height / 5,
    },
    viewContainer: {
    
    },
    textInput: {
        color: '#37474F',
    },
    textInputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        margin: 5,
        color: '#37474F',
        fontSize: 20,
    },
    buttonContainer:{
        backgroundColor: '#37474F',
        color: 'white',
        margin: 10,
        borderRadius: 10,
    },
});

export default styles;