import React from 'react';
import {View,Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

export default class Button extends React.Component{

    render(){
    
        return(
            <TouchableNativeFeedback onPress={this.props.onPress}>
                <View style={s.container}>
                    <Text style={s.text}>{this.props.text}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const s = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        borderWidth:3,
        alignItems:'center',
        justifyContent:'center',
    },

    text:{
        fontSize:20,
        color:'black'
    }
})