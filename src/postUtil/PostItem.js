import React from 'react';
import {View, StyleSheet, Image, Text, Dimensions, TouchableWithoutFeedback} from 'react-native';


const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

export default class PostItem extends React.Component{

    render(){


        if(this.props.isMyPosts){

            let valid = "";
            let validStyle ={height:'100%', width:'40%', fontFamily:"amp_sans", textAlign:'right'};

            if(this.props.valid){

                valid="بررسی شده";
                validStyle.color = "#42f465";
            }else{

                valid="بررسی نشده";
                validStyle.color = "#cc0c0c";
            }

            let priceStyle = {
                height:'100%',
                width:'60%',
                fontSize:18,
                fontFamily:'amp_sans',
                textAlign:'left',
                color:'#e86f00',
            }

            return(
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={s.wrapper}>
                <View style={s.container}>
                    <View style={s.img_con}>
                        <Image style={s.img} source={{uri:this.props.pic}}/>
                    </View>
                    <View style={s.context_con}>
                        <Text style={s.title}>{ " "+this.props.title+" " }</Text>
                        <Text style={s.info}>{" "+this.props.info+" " }</Text>
                        <View style={{flexDirection:'row', height:'25%', width:'100%'}}>
                            <Text style={priceStyle}>{this.props.price} تومن </Text>
                            <Text style={validStyle}>{valid}</Text>
                        </View>
                        
                    </View>
                </View>
                </View>
                </TouchableWithoutFeedback>
            )

        }else{

            return(
                <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={s.wrapper}>
                <View style={s.container}>
                    <View style={s.img_con}>
                        <Image style={s.img} source={{uri:this.props.pic}}/>
                    </View>
                    <View style={s.context_con}>
                        <Text style={s.title}>{ " "+this.props.title+" " }</Text>
                        <Text style={s.info}>{" "+this.props.info+" " }</Text>
                        <Text style={s.price}>{this.props.price} تومن </Text>
                    </View>
                </View>
                </View>
                </TouchableWithoutFeedback>
            )
        }
    }
}


const image_con_hieght= (H/7) - (W/90);

const s = StyleSheet.create({

    wrapper:{
        flex:1,
        alignItems:'center'
    },

    container:{
        height: H/7,
        width: W*0.95,
        marginVertical:H/100,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        borderRadius:5,
        backgroundColor:'rgba(255,255,255,0.85)',
    },


    img_con:{
        height: image_con_hieght,
        width: image_con_hieght,
        borderRadius:5,
        justifyContent:'center',
        overflow: 'hidden',
        backgroundColor:'black'
    },

    img:{
        flex:1,
        height:null,
        width:null,
        resizeMode:'stretch',
    },

    context_con:{
        height:'100%',
        width: ((W/1.05) - (H/6.4)),
        justifyContent:'space-around',
    },

    title:{

        height:'25%',
        width:'100%',
        fontSize:17,
        fontFamily:'amp_sans',
        color:'#e86f00',
        textAlign:'right',
        //backgroundColor:'red',
    },

    info:{
        height:'35%',
        width:'100%',
        fontSize:12,
        fontFamily:'amp_sans',
        textAlign:'right',
        color:'#823e00',
        //backgroundColor:'blue',
    },

    price:{
        height:'25%',
        width:'65%',
        fontSize:18,
        fontFamily:'amp_sans',
        textAlign:'left',
        color:'#e86f00',
        //backgroundColor:'gray'
    },
})