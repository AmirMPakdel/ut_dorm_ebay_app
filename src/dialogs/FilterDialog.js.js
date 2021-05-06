import React from 'react';
import PopupDialog from 'react-native-popup-dialog';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import MyText from '../components/MyText';
import IconButton from '../components/IconButton';
import MyDropdown from '../components/MyDropdown';


const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

const selected = "phone"
const query={}
export default class FilterDialog extends React.Component{

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
                <PopupDialog  dialogStyle={s.container}
                    ref={(popupDialog) => { this.popupDialog = popupDialog}}>

                    <View style={s.category_con}>
                        <MyText containerStyle={s.text_con} style={s.text} text="انتخاب نوع آگهی"/>

                        <MyDropdown itemList={{all:'همه موارد', book:'کتاب', cooking:'لوازم آشپزی', dorm:'وسایل خوابگاه'}}
                            defaultOption="همه موارد"
                            onSelect={(key)=>{
                                if(key == 'all'){
                                    if(query.category != undefined){
                                        delete query.category;
                                    }
                                }else{
                                    query.category = key;
                                }
                        }}/>
                        
                    </View>

                    <View style={s.apply_btn}>
                        <IconButton src={require('../assets/icons/checked.png')} onPress={this.apply}/>
                    </View>

                </PopupDialog>
        )
    }
}

const s = StyleSheet.create({

    container:{
        height:H/2.2,
        width:W/1.15,
        borderColor:'#e86f00',
        borderWidth:4,
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

    category_con:{

        height:'40%',
        width:'100%',
        justifyContent:'space-around',
        alignSelf:'center'
    },  

    category:{
        height:'50%',
        width:'80%',
        alignSelf:'center'
    },


    apply_btn:{
        
        height:'20%',
        width:'50%',
        alignSelf:'center'
    }
});
