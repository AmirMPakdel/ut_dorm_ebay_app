import React from 'react';
import {View,Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class CircularButton extends React.Component{

    render(){
    
        return(
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={s.container}>
                    <Image style={s.img} source={this.props.src}/>
                </View>
            </TouchableOpacity>
        )
    }
}

const s = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        borderRadius:500,
        backgroundColor:'#e86f00',
        borderColor:'#FFFFFF',
        borderWidth:2,
        elevation:5,
        alignItems:'center',
        justifyContent:'center',
    },

    img:{
        height:'60%',
        width:'60%',
        resizeMode:'center',
        tintColor: '#fff'
    }
})