import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import MyText from '../components/MyText';
import TextIconButton from '../components/TextIconButton';
import TopNavigationBar from '../components/TopNavigationBar';

export default class RegisterPage extends React.Component{

    render(){
    
        return(
            <ImageBackground source={require('../assets/images/bg22.png')} style={s.container}>

                <View style={s.TopNavigationBar_con}>
                    <TopNavigationBar title="ثبت نام"
                        navigation={this.props.navigation} goTo="Home"/>
                </View>

                <View style={s.text_con}>
                    <MyText style={s.register_text} containerStyle={{height:'20%', width:'90%'}} text="برای اینکه بتونی آگهی وسایلتو بذاری"/>
                    
                    <MyText style={s.register_text} containerStyle={{height:'20%', width:'90%'}} text="اول باید ثبت نام کنی"/>
                </View>
                
                <View style={s.button_con}>
                    <View style={s.sign_btn}>
                        <TextIconButton text="ثبت نام" src={require('../assets/icons/add_user.png')} onPress={()=>{this.props.navigation.navigate('SignUpPage',{cameFrom:'MyPosts', ash:this.ash})}}/>
                    </View>
                    
                    <View style={s.sign_btn}>
                        <TextIconButton text="ورود" src={require('../assets/icons/login.png')} onPress={()=>{this.props.navigation.navigate('LoginPage',{cameFrom:'MyPosts', ash:this.ash})}}/>
                    </View>
                </View>
                
            </ImageBackground>
        )
    }
}



const s = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around'    
    },

    TopNavigationBar_con:{

        height:'10%',
        width:'100%',
        marginTop:'5%',
    },

    text_con:{

        height:'37%',
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-end', 
    },

    register_text:{
        textAlign:'center',
        fontSize:22,
        color:'#FFFFFF',
        fontFamily:'amp_sans'
    },

    button_con:{

        height:'30%',
        width:'100%',
        marginTop:'5%',
        alignItems:'center',
        justifyContent:'space-around'  
    },

    sign_btn:{
        height:'40%',
        width:'60%',
    },
})