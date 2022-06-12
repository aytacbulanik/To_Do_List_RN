import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height / 4,
    },
    viewContainer: {
        flex: 1,
    },
    textInput: {
        color: '#37474F',
    },
    textInputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    buttonContainer:{
        backgroundColor: 'red', //'#37474F',
        color: 'white',
    },

});

export default styles;