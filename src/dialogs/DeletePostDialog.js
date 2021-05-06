import React from 'react';
import PopupDialog from 'react-native-popup-dialog';
import { StyleSheet, Dimensions, View, ImageBackground } from 'react-native';
import IconButton from '../components/IconButton';
import MyText from '../components/MyText';
import {DeletePost} from '../server/Post_com';
import {connect} from 'react-redux';
import {deletePost} from '../database/database';


const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

class DeletePostDialog extends React.Component{

    show = ()=>{

        this.popupDialog.show();
    }

    dismiss = ()=>{

        this.popupDialog.dismiss();
    }

    delete = ()=>{

        DeletePost(this.props.PostID, (error)=>{

            if(error){
                
                alert('error for delete:'+error)
                
            }else{

                deletePost(this.props.PostID, ()=>{

                    this.props.refreshHome();
                    this.props.refreshMyPosts();
                    this.dismiss();
                    this.props.navigation.navigate('MyPosts');
                });
            }
        });
    }

    render(){

        this.props.getShow(this.show);
        

        return(
            <PopupDialog  containerStyle={{height:H, width:W, justifyContent:'center'}} dialogStyle={s.container}
                ref={(popupDialog) => { this.popupDialog = popupDialog}}>

                <ImageBackground style={s.bg} source={require('../assets/images/blank.png')}>

                    <View style={s.dialogBox}>
                        <MyText text="می خوای این آگهی رو حذف کنی؟" style={{fontSize:20, textAlignVertical:'center', textAlign:'center'}}/>
                    </View>

                    <View style={s.button_con}>
                        <View style={s.button}>
                            <IconButton src={require('../assets/icons/error.png')} onPress={this.dismiss}/>
                        </View>
                        <View style={s.button}>
                            <IconButton src={require('../assets/icons/checked.png')} onPress={this.delete}/>
                        </View>
                    </View>

                </ImageBackground>

            </PopupDialog>
        )
    }
}

function mapStateToProps(state){
    return{
        refreshHome:state.refresh.home,
        refreshMyPosts:state.refresh.myPosts
    }
}

export default connect(mapStateToProps, null)(DeletePostDialog);

const s = StyleSheet.create({

    container:{
        height:H/2.2,
        width:W/1.15,
        borderColor:'#e86f00',
        borderWidth:4,
        justifyContent:'space-around',
        overflow:'hidden'
    },

    dialogBox:{

        marginTop:'10%',
        height:'50%',
        width:'100%',
        justifyContent:'center',
        backgroundColor:'rgba(255,255,255,0.7)'
    },

    bg:{

        height:'100%',
        width:'100%',
        justifyContent:'space-around',
    },

    title_con:{

        height:'20%',
        width:'100%',
        padding:'5%',
    },

    info_con:{

        height:'80%',
        width:'100%',
        padding:'5%',
    },

    text_con:{

        height:'20%',
        width:'100%',
    }, 

    text:{
        fontSize:20,
        textAlign:'center'
    },

    category:{
        height:'50%',
        width:'80%',
        alignSelf:'center'
    },

    button_con:{
        
        height:'18%',
        width:'90%',
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },

    button:{
        height:'100%',
        width:'45%',
    }
});
