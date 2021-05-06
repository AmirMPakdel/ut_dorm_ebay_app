import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

export default class TopNavigationBar extends React.Component{


    render(){
    
        return(
            <View style={s.container}>

                <View style={s.whiteFlag}/>
                
                <Text style={s.text}>{this.props.title}</Text>
                

                    <TouchableOpacity style={s.btn} onPress={this.props.onPress}>
                    <View style={{height:'86%', width:'100%', alignSelf:'center'}}>
                        
                        <Image style={s.btn_image} source={require('../assets/icons/filter.png')}/>        
                        
                    </View>
                    </TouchableOpacity>
                
            </View>
        )
    }
}



const s = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        flexDirection:'row-reverse',
        alignItems:'center',
        elevation:5,
        backgroundColor:"rgba(232,111,0,0.7)"
    },

    whiteFlag:{
        height:'90%',
        width:"1%",
        marginLeft:"10%",
        borderBottomLeftRadius:30,
        borderTopLeftRadius:30,
        backgroundColor:"white"
    },

    text:{
        height:'100%',
        width:'73%',
        fontSize:20,
        color:"white",
        textAlign:'right',
        textAlignVertical:'center',
        fontFamily:'amp_sans'
    },

    btn:{
        height:'94%',
        width:'12%',
        borderRadius:10,
        borderColor:'#FFFFFF',
        borderWidth:2.5,
        flexDirection:'row',
    },

    btn_image:{
        flex:1,
        height:null,
        width:null,
        resizeMode:'center',
        tintColor:'#FFFFFF'
    }
})