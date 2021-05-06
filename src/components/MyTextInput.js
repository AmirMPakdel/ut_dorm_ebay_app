import React from 'react';
import {View,TextInput, StyleSheet} from 'react-native';

export default class MyTextInput extends React.Component{

    render(){
    
        return(
            <View style={s.container}>
                <TextInput style={[s.textInput,this.props.style]}
                placeholderTextColor='rgba(232,111,0,0.4)'
                placeholder={this.props.placeholder}
                multiline={this.props.multiline}
                maxLength={this.props.maxLength}
                onChangeText={this.props.onChangeText}>{this.props.children}</TextInput>
            </View>
        )
    }
}



const s = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
    },

    textInput:{
        height:'100%',
        width:'100%',
        textAlign:'center',
        fontSize:20,
        color:'#e86f00',
        fontFamily:'amp_sans',
        borderWidth:2,
        borderRadius:10,
        borderColor:'#e86f00'
    },
})