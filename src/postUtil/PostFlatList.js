import React from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import {PostList} from './PostList';
import PostItem from './PostItem';
import Server from '../server/Server';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {viewPostAction} from '../redux/Actions';

const H = Dimensions.get('window').height;

class PostFlatList extends React.Component{

    state= {list:[]};

    query ={}

    constructor(props){
        super(props);

        if(props.query != undefined){
            this.query = props.query;
        }else{
            this.query = {};
        }
        
        props.giveLoad(this.loadChanges);
    }

    componentDidMount(){

        let isMyPosts = this.props.isMyPosts;

        PostList(isMyPosts, this.query, (list)=>{

            let newState = Object.assign({},this.state);
            newState.list = list;
            this.setState(newState);
        });
    }

    loadChanges = ()=>{

        this.query = this.props.query;

        let isMyPosts = this.props.isMyPosts;

        PostList(isMyPosts, this.query, (list)=>{

            let newState = Object.assign({},this.state);
            newState.list = list;
            this.setState(newState);
        });
    }
    
    _keyExtractor = (item, index) => item._id;

    render(){
        return(
            <View style={s.container}>
                <FlatList
                    contentContainerStyle={{paddingBottom:H/12, paddingTop:H/90}}
                    data={this.state.list}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    onEndReachedThreshold={0.1}
                    onEndReached={()=>{}}/>
            </View>
        )
    }

    _renderItem = ({item})=>{

        return(
            <PostItem pic={Server.urls.getImage+`?name=${item._id}_0`} title={item.title} info={item.info} price={item.price}
            valid={item.valid} isMyPosts={this.props.isMyPosts}
            onPress={()=>{
                
                this.props.viewPostAction(item);
                this.props.nav.navigate('ViewPost', {isMyPost:this.props.isMyPosts ,post:item, getLoadPost:this.getLoadPost});
            }}/>
        )
    }

    getLoadPost = (loadPost, id)=>{

        this.loadPost = loadPost;
    }
}

function matchDispatchToProps(dispatch){

    return {
        viewPostAction: (item)=> dispatch(viewPostAction(item))
    }
}

export default connect(null, matchDispatchToProps)(PostFlatList)

const s = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
    },
})