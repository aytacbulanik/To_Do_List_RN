import React from 'react';
import {SafeAreaView,View,StyleSheet} from 'react-native';
import RowCard from './components/rowCard';

const todoApp = () => {
  return(
    <SafeAreaView style={inLineStyle.container}>
      <View>
       <RowCard />
      </View>
    </SafeAreaView>
  )
};

const inLineStyle = StyleSheet.create({
  container: {
    backgroundColor: '#102027',
    flex: 1,
  }
  
  }
)

export default todoApp;