import React from 'react';
import {View, StyleSheet} from 'react-native';

export default class Pagination extends React.Component{

    render(){
    
        return(
            <View style={s.container}>
                <View style={s.back}>
                    
                </View>
                <View style={s.pages}>

                </View>
                <View style={s.next}>

                </View>
            </View>
        )
    }
}



const s = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        backgroundColor:'blue',
        overflow:'hidden',
    },

    back:{

        height:'80%',
        width:'20%',
        backgroundColor:'green'
    }, 

    pages:{
        height:'80%',
        width:'60%',
        backgroundColor:'gray'
    },

    next:{
        height:'80%',
        width:'20%',
        backgroundColor:'green'
    }
})