import React from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import MyText from '../components/MyText';
import TopNavigationBar from '../components/TopNavigationBar';
import {connect} from 'react-redux';
import TextIconButton from '../components/TextIconButton';
import DeletePostDialog from '../dialogs/DeletePostDialog';
import {setEditPostAction} from '../redux/Actions';

const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

class ViewPost extends React.Component{

    _delete = ()=>{
        this.showDeleteDialog();
    }

    _edit = ()=>{

        this.props.setEditPost(this.props.post);
        this.props.navigation.navigate("EditPost");
    }

    modifySection(){

        let isMyPost = this.props.navigation.getParam("isMyPost", false);

        if(isMyPost){
            return(
                <View style={{height:H/10, width:W/1.1, flexDirection:'row', justifyContent:'space-between',
                    marginBottom:H/30,alignSelf:'center'}}>
                    
                    <View style={{height:'100%', width:'45%'}}>
                        <TextIconButton text="حذف" src={require('../assets/icons/delete.png')} onPress={this._delete}/>
                    </View>

                    <View style={{height:'100%', width:'45%'}}>
                        <TextIconButton text="تغییر" src={require('../assets/icons/edit.png')} onPress={this._edit}/>
                    </View>
                    
                </View>
            );
        }

        return null;
    }

    render(){

        let comm_way = "";
        switch(this.props.post.com_type){
            case"phone":
                comm_way="از طریق تماس تلفنی";
            break;

            case"telegram":
                comm_way="از طریق تلگرام";
            break;

            case"instagram":
                comm_way="از طریق اینستاگرام"
            break;
            
            default:
            comm_way="راه تماس موجود نمی باشد";
        }
        
        // bug with Image slider ->
        // erase the autoPlay and slide to second Image
        // then find the post with 1 image, you see black image
        // unless you go back to the 2image post and slide to first image :\ 
        return(
            <ScrollView style={s.ScrollView}>

                <DeletePostDialog PostID={this.props.post._id} navigation={this.props.navigation}
                getShow={(show)=>{this.showDeleteDialog = show}}/>

                <View style={s.TopNavigationBar_con}>
                    <TopNavigationBar title={this.props.post.title}
                        navigation={this.props.navigation} goTo="Home"/>
                </View>

                {this.modifySection()}

                <View style={s.slider_con}>
                    <ImageSlider
                    autoPlayWithInterval={3000} images={this.props.post.images}/>
                </View>

                <MyText text="توضیحات" containerStyle={s.info_title_con} style={s.info_title}/>

                <MyText text={this.props.post.info} containerStyle={s.info_con}/>

                <MyText text="راه ارتباطی" containerStyle={s.info_title_con} style={s.info_title}/>

                <View style={s.com_con}>
                    <MyText text={this.props.post.com_id} containerStyle={s.com_id_con} style={s.com_id}/>
                    <MyText text={comm_way}containerStyle={s.comm_way_con} style={s.comm_way}/>
                </View>

                <View style={s.price_sec}>
                    <MyText text={this.props.post.price+" تومن "} containerStyle={s.price_con} style={s.price}/>
                    <MyText text="قیمت :" containerStyle={s.price_title_con} style={s.info_title}/>
                </View>
                
            </ScrollView>
        )
    }
}

function mapStateToProps(state){
    return{
        post:state.viewPost.post
    }
}

function mapDispatchToProps(dispatch){
    return{
        setEditPost:(post)=>{dispatch(setEditPostAction(post))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPost)

const s = StyleSheet.create({

    ScrollView:{
        flex:1,
        paddingTop:H/90,
        backgroundColor:'#ffe',
    },
    
    TopNavigationBar_con:{

        height: H*0.1,
        width:'100%',
        backgroundColor:"#e86f00",
        opacity:0.95,
        marginBottom:H *0.04,
    },

    slider_con:{
        height:H/2,
        width:W,
        alignSelf:'center',
        borderTopWidth:H/100,
        borderBottomWidth:H/100,
        borderColor:"#e86f00",
    },

    info_title_con:{
      
        height:H/18,
        width:W/1.1,
        alignSelf:'center',
        marginTop:H/20,
    },

    info_title:{

        color:'#823e00',
        fontSize:25,
    },

    info_con:{

        flex:1,
        minHeight:H/6,
        width:W/1.1,
        alignSelf:'center',
        borderWidth:2,
        borderColor:'#823e00',
        borderRadius:10,
        padding:'2%',
        marginTop:H*0.02,
    },

    com_con:{

        flex:1,
        minHeight:H/12,
        width:W/1.1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center',
        borderWidth:2,
        borderColor:'#823e00',
        borderRadius:10,
        padding:'2%',
        marginTop:H*0.02,
    },

    comm_way:{

        fontSize:16,
        textAlignVertical:'center'
    },

    com_id:{
        fontSize:22,
        textAlign:'left',
        textAlignVertical:'center'
        //backgroundColor:'red'
    },

    price_sec:{

        flex:1,
        minHeight:H/9,
        width:W/1.1,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:H*0.05,
    },

    price_con:{
        
        height:'100%',
        width:'70%',
    },

    price:{

        fontSize:28,
        textAlign:'left'
    },

    price_title_con:{

        height:'100%',
        width:'30%',
    }
})