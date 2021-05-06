import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import Button from '../components/Button';
import MyTextInput from '../components/MyTextInput';
import {sign_in} from '../server/Register_com';
import TopNavigationBar from '../components/TopNavigationBar';
import RegInput from '../components/RegInput';
import IconButton from '../components/IconButton';

const PostData = {

    email:'',
    password:''
};

export default class LoginPage extends React.Component{

    _Continue(){

        let navigation = this.props.navigation;

        sign_in(PostData, ()=>{

            navigation.navigate(this.props.navigation.getParam('cameFrom','Home'))
            navigation.getParam('ash', null)();
        });
    }

    render(){
    
        return(
            <ImageBackground source={require('../assets/images/sign.png')} 
            resizeMode="cover" resizeMethod="auto" style={s.container}>
               
               <View style={s.TopNavigationBar_con}>
                    <TopNavigationBar title="ورود"
                        navigation={this.props.navigation} goTo="RegisterPage"/>
                </View>

               <View style={s.textInputs_con}>
                    
                    <View style={s.textInput}>
                        <RegInput placeholder="ایمیل" src={require('../assets/icons/email.png')}
                        onChangeText={(text)=>{PostData.email = text}}/>
                    </View>

                    <View style={s.textInput}>
                        <RegInput placeholder="رمزعبور" src={require('../assets/icons/key.png')}
                        onChangeText={(text)=>{PostData.password = text}}/>
                    </View>

                </View>

                <View style={s.button}>
                    <IconButton src={require('../assets/icons/login.png')} onPress={()=>{this._Continue()}}/>
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
        justifyContent:'center',
        alignItems:'center',
    },

    textInput:{
        height:'20%',
        width:'100%',
    },

    button:{
        height:'10%',
        width:'50%'
    }
})