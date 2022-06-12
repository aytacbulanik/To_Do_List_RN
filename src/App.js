import React from 'react';
import {SafeAreaView,View,Text} from 'react-native';
import RowCard from './components/rowCard';

const todoApp = () => {
  return(
    <SafeAreaView>
      <View>
       <RowCard />
      </View>
    </SafeAreaView>
  )
};

export default todoApp;