import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height / 5,
    },
    viewContainer: {
    margin: 10,
    backgroundColor: '#37474F',
    borderRadius: 15,
    },
    textInput: {
        color: 'white', //#37474F',
    },
    textInputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        color: '#37474F',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 20,
    },
    buttonContainer:{
        backgroundColor: '#808080',
        color: 'white',
        margin: 10,
        borderRadius: 10,
    },
});

export default styles;