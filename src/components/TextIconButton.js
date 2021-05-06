import React from 'react';
import {View,Image,Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class IconButton extends React.Component{

    render(){
    
        return(
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={s.container}>
                    <View style={s.image_con}>
                        <Image style={s.image} source={this.props.src}/>
                    </View>
                    <View style={s.text_con}>
                        <Text style={s.text}>{this.props.text}</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>
        )
    }
}

const s = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        borderRadius:30,
        backgroundColor:'#e86f00',
        flexDirection:'row-reverse',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#FFFFFF',
        borderWidth:2,
        elevation:5,
    },

    image_con:{
        height:'90%',
        width:'20%',
        //backgroundColor:'red'
    },

    image:{
        flex:1,
        height:null,
        width:null,
        tintColor:'#FFFFFF',
        resizeMode:'center'
    },

    text_con:{

        height:'90%',
        width:'25%',
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'green'
    },

    text:{

        textAlign:'center',
        color:'#FFFFFF',
        fontFamily:'amp_sans',
        fontSize:16,
        //backgroundColor:'blue'
        
    }
})