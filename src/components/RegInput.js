import React from 'react';
import {View,TextInput, StyleSheet, Image} from 'react-native';

export default class RegInput extends React.Component{

    render(){
    
        return(
            <View style={s.container}>
                
                <View style={s.image_con}>
                    <Image style={s.image} source={this.props.src}/>
                </View>

                <TextInput style={[s.textInput,this.props.style]}
                underlineColorAndroid="rgba(255,255,255,0.6)"
                placeholder={this.props.placeholder}
                placeholderTextColor="rgba(255,255,255,0.6)"
                maxLength={this.props.maxLength}
                onChangeText={this.props.onChangeText}></TextInput>
            </View>
        )
    }
}



const s = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        flexDirection:'row-reverse',
    },

    image_con:{
        height:'100%',
        width:'6%',
        marginRight:'5%',
        marginLeft:'3%',
    },

    image:{
        flex:1,
        height:null,
        width:null,
        tintColor:"#FFFFFF",
        resizeMode:'contain'
    },

    textInput:{
        height:'100%',
        width:'100%',
        textAlign:'right',
        color:"#FFFFFF",
        fontSize:20,
        fontFamily:'amp_sans'
    },
})