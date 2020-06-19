import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,TextInput,ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons'


export default function HomeScreen({navigation}) {
    return (
        <View style={styles.page}>
          
            <View style={styles.note}>
              <Text style={{fontSize:35}}>All notes</Text>
              
            </View>

          <View style={styles.head}> 
                <TouchableOpacity >
                <Image source={require('../assets/drawer.png')}  
                style={{width:30, height:30}}
                /> 
                </TouchableOpacity>


              <View style={{flexDirection:'row'}}>
                  <TouchableOpacity>
                  <Image source={require('../assets/search.png')}  
                  style={{width:30, height:30,borderBottomLeftRadius:100}}
                  />
                  </TouchableOpacity>  
                  <TouchableOpacity>  
                  <Image source={require('../assets/3dots.png')}  
                  style={{width:30, height:30, }}
                  />
                  </TouchableOpacity>  
              </View> 
      
          </View>
        <ScrollView>
        <View style={styles.display}>
          <Text style={{fontSize:18}}>  Project Title</Text> 
        </View>
        <View style={styles.display}>
          <Text style={{fontSize:18}}>  Timetable</Text> 
        </View>
        <View style={styles.display}>
          <Text style={{fontSize:18}}>  Plans</Text> 
        </View>
        <View style={styles.display}>
          <Text style={{fontSize:18}}>  Schedule</Text> 
        </View>
        <View style={styles.display}>
          <Text style={{fontSize:18}}>  Meeting</Text> 
        </View>
        <View style={styles.display}>
          <Text style={{fontSize:18}}>  Arrangement</Text> 
        </View>
        
        
        
       


        <View style={styles.add}>
        <TouchableOpacity onPress={() => navigation.navigate('Text')}>
        <Image source={require('../assets/addor.jpg')}  
        style={{width:50, height:50, borderRadius:80}}
        /> 
        </TouchableOpacity>
        </View>
       
        </ScrollView>
        </View>
    );
  };


  const styles = StyleSheet.create({
    page: {
     paddingHorizontal:10,
     paddingTop:35,
     flex:1,
     backgroundColor:'white'
   },
   head:{
     height:30,
     justifyContent:'space-between',
     flexDirection:'row',
     paddingBottom:50
   },
   note:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:50
   },
   add:{
       flex:1,
       flexDirection:'row',
       justifyContent:'flex-end',
       marginTop:20
       
   },
   display:{
     backgroundColor:'#fafafa',
     borderRadius:20,
     height:80,
     justifyContent:'center',
     marginVertical:5
     
   }

 })      