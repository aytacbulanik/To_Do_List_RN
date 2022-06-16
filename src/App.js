import React from 'react';
import {SafeAreaView,View,StyleSheet} from 'react-native';
import RowCard from './components/rowCard';
import AddCard from './components/addCard';

const todoApp = () => {
  return(
    <SafeAreaView style={inLineStyle.container}>
      <View style={inLineStyle.flatListContainer}>
       <RowCard />
      </View>
      <View style={inLineStyle.addInputContainer}>
        <AddCard />
      </View>
    </SafeAreaView>
  )
};

const inLineStyle = StyleSheet.create({
  container: {
    backgroundColor: '#102027',
    flex: 1,
  },
  flatListContainer: {
    flex: 4,
  },
  addInputContainer: {
    flex: 1,
  },
  
  }
)

export default todoApp;