import React from 'react';
import PopupDialog from 'react-native-popup-dialog';
import { StyleSheet, Dimensions, View, ImageBackground } from 'react-native';
import IconButton from '../components/IconButton';

const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

export default class AttentionDialog extends React.Component{

    show = ()=>{

        this.popupDialog.show();
    }

    dismiss = ()=>{

        this.popupDialog.dismiss();
    }

    apply = ()=>{

        this.dismiss();
        this.props.setQuery(query);
    }

    render(){

        this.props.getShow(this.show);

        return(
            <PopupDialog  containerStyle={{height:H, width:W, justifyContent:'center'}} dialogStyle={s.container}
                ref={(popupDialog) => { this.popupDialog = popupDialog}}>

                <ImageBackground style={s.bg} source={require('../assets/images/blank.png')}>

                    <View style={s.dialogBox}>
                    
                    
                    </View>

                    <View style={s.apply_btn}>
                        <IconButton src={require('../assets/icons/checked.png')} onPress={this.apply}/>
                    </View>

                </ImageBackground>

            </PopupDialog>
        )
    }
}

const s = StyleSheet.create({

    container:{
        height:H/1.8,
        width:W/1.15,
        borderColor:'#e86f00',
        borderWidth:4,
        justifyContent:'space-around',
        overflow:'hidden'
    },

    dialogBox:{

        marginTop:'10%',
        height:'60%',
        width:'100%',
        backgroundColor:'rgba(255,255,255,0.7)'
    },

    bg:{

        height:'100%',
        width:'100%',
        justifyContent:'space-around',
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

    apply_btn:{
        
        height:'15%',
        width:'40%',
        alignSelf:'center'
    }
});
