import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import CircularButton from './CircularButton';
import {RemovePicAction} from '../redux/Actions'
import {connect} from 'react-redux';


class ImageThumbnail extends React.Component{

    render(){
    
        return(
            <View style={s.container}>
            
                <Image style={s.image}
                    source={{uri:this.props.uri}}/>

                <View style={[s.cancel_btn, this.props.style]}>
                    <CircularButton src={require('../assets/icons/cancel.png')}
                    onPress={()=>{this.props.RemovePicAction(this.props.picNumber)}}/>
                </View>
            </View>
        )
    }
}

function matchDispatchToProps(dispatch){

    return {
        RemovePicAction: (index)=> dispatch(RemovePicAction(index))
    }
}

export default connect(null, matchDispatchToProps)(ImageThumbnail);

const s = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        borderWidth:3,
    },

    cancel_btn:{
        position:'absolute',
        height:'16%',
        width:'24%',
        top:'2%',
        right:'3%',
    },

    image:{
        flex:1,
        height:null,
        width:null,
    }
});