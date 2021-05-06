import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

export default class MyText extends React.Component{

    render(){
    
        return(
            <View style={[s.container, this.props.containerStyle]}>
                <Text style={[s.text,this.props.style]}
                multiline={this.props.multiline}
                maxLength={this.props.maxLength}>{this.props.text}</Text>
            </View>
        )
    }
}



const s = StyleSheet.create({

    container:{
        //height:'100%',
        //width:'100%',
        //borderWidth:3,
    },

    text:{
        height:'100%',
        width:'100%',
        textAlign:'right',
        fontSize:15,
        color:'#e86f00',
        fontFamily:'amp_sans',
    },
})