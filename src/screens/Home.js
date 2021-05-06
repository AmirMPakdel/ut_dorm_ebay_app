import React from 'react';
import {View, StyleSheet, Dimensions, ImageBackground} from 'react-native';
import CircularButton from '../components/CircularButton';
import PostFlatList from '../postUtil/PostFlatList';
import FilterDialog from '../dialogs/FilterDialog.js';
import Pagination from '../components/Pagination';
import {getUser,getToken} from '../database/database';
import HomeNavigationBar from '../components/HomeNavigationBar';
import Server from '../server/Server';
import {refreshAction} from '../redux/Actions';
import {connect} from 'react-redux';


const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

class Home extends React.Component{

    state = {query:{}}

    componentDidMount(){

        this.props.refreshAction('home', this.refresh);
    }

    refresh = ()=>{

        this.loadChange();
    }

    setShow(dialogShow){

        this.dialogShow = dialogShow;
    }

    showDialog(){

        this.dialogShow();
    }

    setQuery = (query)=>{

        let newState = Object.assign({}, this.state);
        newState.query = query;
        this.setState(newState);
        this.loadChange();
    }

    myPostsPressed = ()=>{

        getToken((token)=>{

            if(token != ''){

                this.props.navigation.navigate('MyPosts');

            }else{
                
                this.props.navigation.navigate('RegisterPage');
            }
        });
    }

    render(){
        
        

        return(
            <ImageBackground source={require('../assets/images/bg33.png')} style={s.container}>

                <FilterDialog getShow={(dialogShow)=>{this.setShow(dialogShow)}}
                setQuery={this.setQuery}/>
                
                <View style={s.TopNavigationBar_con}>
                    <HomeNavigationBar title="آگهی های فروش" onPress={()=>{this.showDialog()}}
                        navigation={this.props.navigation} goTo="Home"/>
                </View>

                <View style={s.post_flatlist_con}>
                    <PostFlatList giveLoad={(loadChange)=>{this.loadChange = loadChange}} 
                    isMyPosts={false} nav={this.props.navigation} query={this.state.query}/>
                </View>
                

                <View style={s.myposts_btn}>
                    <CircularButton src={require('../assets/icons/user.png')}
                        onPress={this.myPostsPressed}/>
                </View>

            </ImageBackground>
        )
    }
}

function matchDispatchToProps(dispatch){

    return {
        refreshAction: (which, refreshFunc)=> dispatch(refreshAction(which, refreshFunc))
    }
}

export default connect(null, matchDispatchToProps)(Home)


const s = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'#ffe', //BUG-> if you dont use bg color then the dialog wont work!!! :\
        alignItems:'center'
    },

    TopNavigationBar_con:{

        height:'10%',
        width:'100%',
        marginTop: H/90,
        
    },
    
    post_flatlist_con:{
        height:'90%',
        width:'100%',
    },

    myposts_btn:{
        position:"absolute",
        height:H/10,
        width:H/10,
        bottom:H/25,
        right:W/25,
    }
})