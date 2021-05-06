import React from 'react';
import {View, Dimensions, StyleSheet, Image} from 'react-native';
import CircularButton from './CircularButton';
import ImageThumbnail from './ImageThumbnail';
import ImagePicker from 'react-native-image-picker';
import {AddPicAction} from '../redux/Actions';
import {connect} from 'react-redux';

const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

const options = {
    title: 'Select Avatar',
    mediaType:'photo',
    maxWidth:500,
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

class AddImage extends React.Component{

    _openCamera(){

        ImagePicker.launchCamera(options, (res)=>{

            if(res.uri){
                this.props.AddPicAction(this.props.picNumber, res.uri, res.data);
            }
        });
    }

    render(){
    
        if(this.props.uri != ""){

            return(<ImageThumbnail picNumber={this.props.picNumber} uri={this.props.uri}/>)

        }else{

            if(this.props.turn == this.props.picNumber){

                return(
                    <View style={s.container}>
                        <View style={[s.cancel_btn, this.props.style]}>
                            <CircularButton src={require('../assets/icons/add.png')}
                            onPress={()=>{this._openCamera()}}/>
                        </View>
                    </View>
                )

            }else{
                
                return(
                    <View style={s.container}>
                        <Image source={require('../assets/images/blank.png')} style={{ height:'100%', width:'100%'}}/>
                    </View>
                )
            }
        }
    }
}


function matchDispatchToProps(dispatch){

    return {
        AddPicAction: (index, uri, data)=> dispatch(AddPicAction(index, uri, data))
    }
}

export default connect(null, matchDispatchToProps)(AddImage);


const s = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:3,
        borderRadius:10,
        borderColor:'#e86f00',
        overflow:'hidden',
    },

    cancel_btn:{
        height: H/18,
        width: H/18,
    }
})