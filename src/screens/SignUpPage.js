import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import Button from '../components/Button';
import MyTextInput from '../components/MyTextInput';
import {sign_up} from '../server/Register_com';
import TopNavigationBar from '../components/TopNavigationBar';
import RegInput from '../components/RegInput';
import IconButton from '../components/IconButton';

const userData = {
    email:'',
    password:'',
    full_name:'',
    verification_code:''
}

export default class SignUpPage extends React.Component{

    _Continue(navigation){

        sign_up(userData, ()=>{

            navigation.navigate(this.props.navigation.getParam('cameFrom','Home'));
            navigation.getParam('ash', null)();
        });
    }

    _onChangeText(field, text){
        userData[field] = text;
    }

    render(){

        return(
            <ImageBackground source={require('../assets/images/sign.png')} resizeMode="cover" resizeMethod="auto" style={s.container}>
                
                <View style={s.TopNavigationBar_con}>
                    <TopNavigationBar title="ثبت نام"
                        navigation={this.props.navigation} goTo="RegisterPage"/>
                </View>

                <View style={s.textInputs_con}>
                    <View style={s.textInput}>
                        <RegInput placeholder="نام و نام خانوادگی" src={require('../assets/icons/user2.png')}
                            onChangeText={(text)=>{this._onChangeText('full_name',text)}}/>
                    </View>

                    <View style={s.textInput}>
                        <RegInput placeholder="ایمیل" src={require('../assets/icons/email.png')}
                        onChangeText={(text)=>{this._onChangeText('email',text)}}/>
                    </View>

                    <View style={s.textInput}>
                        <RegInput placeholder="رمزعبور" src={require('../assets/icons/key.png')}
                        onChangeText={(text)=>{this._onChangeText('password',text)}}/>
                    </View>

                    <View style={s.textInput}>
                        <RegInput placeholder="تکرار رمزعبور" src={require('../assets/icons/key.png')}
                        onChangeText={(text)=>{this._onChangeText('password',text)}}/>
                    </View>

                    <View style={s.textInput}>
                        <RegInput placeholder="کد ثبت نام" src={require('../assets/icons/validate.png')}
                        onChangeText={(text)=>{this._onChangeText('verification_code',text)}}/>
                    </View>

                    <View style={s.text_con}>
                        <Text style={s.text}>کد ثبت نام رو چجوری میتونم تهیه کنم؟</Text>
                    </View>

                </View>

                <View style={s.button}>
                    <IconButton src={require('../assets/icons/add_user.png')} onPress={()=>{this._Continue(this.props.navigation)}}/>{/*this.props.navigation.navigate('VerificationPage')*/}
                </View>
            </ImageBackground>
        )
    }
}



const s = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center'
    },

    TopNavigationBar_con:{

        height:'10%',
        width:'100%',
        marginTop:'5%',
    },

    textInputs_con:{
        height:'60%',
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
    },

    textInput:{
        height:'15%',
        width:'100%',
        fontFamily:'amp_sans'
    },

    text_con:{
        height:'15%',
        width:'80%',
        alignItems:'center',
        justifyContent:'center',
    },

    text:{
        textDecorationLine: 'underline',
        lineHeight:25,
        fontSize:17,
        color:'#FFFFFF',
        fontFamily:'amp_sans'
    },

    button:{
        height:'10%',
        width:'50%'
    }
})