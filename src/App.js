import React from 'react';
import {SafeAreaView,View,StyleSheet,Text} from 'react-native';
import RowCard from './components/rowCard';
import AddCard from './components/addCard';

const todoApp = () => {
  return(
    <SafeAreaView style={inLineStyle.container}>
      <View style={inLineStyle.yapilacakContainer}>
        <Text style={inLineStyle.yapilacakText}> Yapılacaklar </Text>
        <View style={inLineStyle.yapilacakSayiContainer}>
        <Text style={inLineStyle.yapilacakSayi}> 0 </Text>
        </View>
      </View>
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
  yapilacakContainer: {
    flexDirection: 'row',
    marginTop: 20,  
  },
  yapilacakSayiContainer: { 
    justifyContent: 'flex-end', 
  },
  flatListContainer: {
    flex: 4,
  },
  addInputContainer: {
    flex: 1,
  },
  yapilacakText: {
    color: '#fea500',
    fontSize: 30,
    fontWeight: 'bold',
    
},
yapilacakSayi: {
  color: '#fea500',
    fontSize: 30,
    fontWeight: 'bold',
    
},
  
  }
)

export default todoApp;