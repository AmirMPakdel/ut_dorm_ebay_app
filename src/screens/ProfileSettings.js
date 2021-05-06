import React from 'react';
import {View, StyleSheet, Dimensions, Image, Text} from 'react-native';
import MyTextInput from '../components/MyTextInput';
import Button from '../components/Button';
import {getToken} from '../database/database';



const H = Dimensions.get('window').height;
const pic_H = H/2.5;

export default class ProfileSettings extends React.Component{

    state={MyProfile:null}

    ash = ()=>{

        let jsx = 
                <View style={s.container}>
                <View style={s.pic_con}>
                <Image style={s.pic} source={require('../assets/images/user_pic.png')}/>
                </View>
                <View style={s.textInputs_con}>
                    <View style={s.textInput}>
                        <MyTextInput placeholder="Name"/>
                    </View>

                    <View style={s.textInput}>
                        <MyTextInput placeholder="Field"/>
                    </View>

                    <View style={s.textInput}>
                        <MyTextInput placeholder="Dorm"/>
                    </View>
                </View>
                </View>

        let newState = Object.assign({},this.state);
        newState.MyProfile = jsx;
        this.setState(newState);
    }

    componentDidMount(){

        let jsx = null;

        getToken((token)=>{

            if(token){

                this.ash();
                
            }else{

                jsx = 
                    <View style={s.register_con}>
                        <Text style={s.register_text}>For modifing your profile</Text>
                        <Text style={s.register_text}>You need to register first</Text>
                        <View style={s.signup_btn}>
                            <Button text="SignUp" onPress={()=>{this.props.navigation.navigate('SignUpPage',{cameFrom:'ProfileSettings', ash:this.ash})}}/>
                        </View>
                        <View style={s.signin_btn}>
                            <Button text="SignIn" onPress={()=>{this.props.navigation.navigate('LoginPage',{cameFrom:'ProfileSettings', ash:this.ash})}}/>
                        </View>
                    </View>

                let newState = Object.assign({},this.state);
                newState.MyProfile = jsx;
                this.setState(newState);
            }
        })
        

        
    }

    render(){
    
        return(
            <View style={s.container}>
                {this.state.MyProfile}
            </View>
        )
    }
}



const s = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'#ffe',
        justifyContent:'space-around',
        alignItems:'center'
    },

    pic_con:{
        height:pic_H,
        width:pic_H,
        justifyContent:'center',
        alignItems:'center'
    },

    pic:{
        height:'100%',
        width:'100%',
        resizeMode:'cover',
        tintColor: '#000'
    },

    textInputs_con:{
        height:'40%',
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
    },

    textInput:{
        height:'30%',
        width:'80%',
    },

    register_con:{
        height:'95%',
        width:'95%',
        alignItems:'center',
        justifyContent:'center'
    },

    register_text:{

        textAlign:'center',
        fontSize:20,
        color:'black',
    },

    signup_btn:{
        height:'15%',
        width:'70%',
        marginTop:'10%',
        marginBottom:'2%',
    },

    signin_btn:{

        height:'11.5%',
        width:'70%',
    }
})