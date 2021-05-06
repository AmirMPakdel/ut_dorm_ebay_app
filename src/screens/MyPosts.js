import React from 'react';
import {View, StyleSheet, Dimensions, ImageBackground} from 'react-native';
import CircularButton from '../components/CircularButton';
import Button from '../components/Button';
import TopNavigationBar from '../components/TopNavigationBar';
import PostFlatList from '../postUtil/PostFlatList';
import {getToken, getUser} from '../database/database';
import MyText from '../components/MyText';
import {refreshAction} from '../redux/Actions';
import {connect} from 'react-redux';


const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

class MyPosts extends React.Component{

    state={MysPosts:null}

    refresh = ()=>{

        this.loadChange();
    }


    componentDidMount(){

        this.props.refreshAction('myPosts', this.refresh);

        let jsx =
            <View style={s.post_flatlist_con}>
                <PostFlatList giveLoad={(loadChange)=>{this.loadChange = loadChange}} isMyPosts={true} nav={this.props.navigation}/>
            </View>


        let newState = Object.assign({},this.state);

        newState.MysPosts = jsx;

        this.setState(newState);

    }

    render(){
    
        
        return(
            <ImageBackground source={require('../assets/images/bg22.png')} style={s.container}>

                <View style={s.TopNavigationBar_con}>
                    <TopNavigationBar title="آگهی های من"
                        navigation={this.props.navigation} goTo="Home"/>
                </View>

                {this.state.MysPosts}

                <View style={s.add_btn}>
                    <CircularButton src={require('../assets/icons/add.png')} 
                        onPress={()=>{this.props.navigation.navigate('NewPost')}}/>
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

export default connect(null, matchDispatchToProps)(MyPosts)

const s = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        alignItems:'center'
    },

    TopNavigationBar_con:{

        height:'10%',
        width:'100%',
        marginTop: H/90,
        backgroundColor:"rgba(232,111,0,0.7)",
        elevation:5
    },

    post_flatlist_con:{
        height:'90%',
        width:'100%',
    },

    add_btn:{
        position:"absolute",
        height:H/10,
        width:H/10,
        bottom:H/25,
        right:W/25,
    },
})