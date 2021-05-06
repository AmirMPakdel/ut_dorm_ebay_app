import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

export default class TopNavigationBar extends React.Component{

    _onPress = ()=>{

        this.props.navigation.navigate(this.props.goTo);
    }

    render(){
    
        return(
            <View style={s.container}>

                <View style={s.whiteFlag}/>
                
                <Text style={s.text}>{this.props.title}</Text>
                

                    <TouchableOpacity style={s.back} onPress={this._onPress}>
                    <View style={{height:'40%', width:'100%', alignSelf:'center'}}>
                        
                        <Image style={s.backImage} source={require('../assets/icons/back.png')}/>        
                        
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

    back:{
        height:'100%',
        width:'12%',
        flexDirection:'row',
    },

    backImage:{
        flex:1,
        height:null,
        width:null,
        resizeMode:'center',
        tintColor:'#FFFFFF'
    }
})