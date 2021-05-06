import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import SignUpPage from '../screens/SignUpPage';
import LoginPage from '../screens/LoginPage';
import Home from '../screens/Home';
import MyPosts from '../screens/MyPosts';
import ProfileSettings from '../screens/ProfileSettings';
import NewPost from '../screens/NewPost';
import ViewPost from '../screens/ViewPost';
import RegisterPage from '../screens/RegisterPage';
import EditPost from '../screens/EditPost';

export default class Navigation extends React.Component{

    render(){

        return(
            <View style={s.container}>
                <Root/>
            </View>
        )
    }
}

class emptyView extends React.Component{

    render(){
        return(<View></View>)
    }
}

const Root = createBottomTabNavigator({

    SignUpPage:{
        screen:SignUpPage
    },
    LoginPage:{
        screen:LoginPage
    },
    Home:{
        screen:Home
    },
    MyPosts:{
        screen:MyPosts
    },
    ProfileSettings:{
        screen:ProfileSettings
    },
    NewPost:{
        screen:NewPost
    },
    ViewPost:{
        screen:ViewPost
    },
    RegisterPage:{
        screen:RegisterPage
    },
    EditPost:{
        screen:EditPost
    }
    
},{
    initialRouteName:'Home',
    /*navigationOptions:{
        headerStyle:{height:0, opacity:0}
    },*/
    headerLayoutPreset:false,
    lazy:true,
    animationEnabled:true,
    swipeEnabled:false,
    tabBarComponent:emptyView
});

const s = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
    }
})