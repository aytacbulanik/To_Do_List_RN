import React,{useState} from 'react';
import {SafeAreaView,View,StyleSheet,Text,FlatList} from 'react-native';
import RowCard from './components/rowCard';
import AddCard from './components/addCard';

const todoApp = () => {
  const [yapilacakSayi, setYapilacakSayi] = useState(0);
  const [yapilacakDizi , setYapilacakDizi] = useState(["sıra1","sıra2","sıra3"]);

  function updateYapilacak() {
    setYapilacakSayi(yapilacakDizi.indexOf)
  }
  const renderItem = ({item}) => <RowCard veri={item}/>
  return(
    <SafeAreaView style={inLineStyle.container}>
      <View style={inLineStyle.yapilacakContainer}>
        <Text style={inLineStyle.yapilacakText}> Yapılacaklar </Text>
        <View style={inLineStyle.yapilacakSayiContainer}>
        <Text style={inLineStyle.yapilacakSayi}> {yapilacakSayi} </Text>
        </View>
      </View>
      <View style={inLineStyle.flatListContainer}>
       <FlatList 
        data={yapilacakDizi}
        renderItem={renderItem}
       />
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
    flex: 1,
},
yapilacakSayi: {
  color: '#fea500',
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 10,    
},
  
  }
)

export default todoApp;