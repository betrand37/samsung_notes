import React, {useState}from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';


export default function TextScreen(){

    const [title, setTitle] = useState('');

    return(
        <View style={styles.page}>
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:15, borderBottomWidth:2,borderColor: '#fafafa'}}>

                <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingRight:10}}>
                    <Text style={{fontSize:22}}> T </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{paddingRight:10}}><Image source={require('../assets/zig.png')}  
                    style={{width:20, height:20}}/>
                </TouchableOpacity>


                <TouchableOpacity><Image source={require('../assets/pallete.png')}  
                    style={{width:20, height:20}}/>
                </TouchableOpacity>

                </View>

                <View  style={{flexDirection:'row'}}>

                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingRight:10}}>
                    <Text style={{fontSize:20}}>Save </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{paddingRight:10}}><Image source={require('../assets/clip.png')}  
                    style={{width:20, height:20}}/>
                </TouchableOpacity>
                
                <TouchableOpacity><Image source={require('../assets/3dots.png')}  
                    style={{width:20, height:20}}/>
                </TouchableOpacity>
                
                </View>
            </View> 
            <View style={styles.space}>
                <TextInput
                 style={{height: 40,width:'100%',fontSize:20}}
                 placeholder="Title"
                 value={title}
                 onChangeText={(newValue) => setTitle(newValue)}

                />
                
                <TextInput 

                 style={{height: 700,width:'100%',textAlignVertical:'top',fontSize:20}}
                 placeholder="Notes"/> 
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1
    },
    space:{
        paddingVertical:10,
        paddingHorizontal:20
    }
});