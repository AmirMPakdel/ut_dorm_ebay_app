import React from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import MyText from './MyText';

const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

export default class MyDropdown extends React.Component{

    constructor(props){
        super(props);

        for(let i in props.itemList){

            this.keys.push(i)
            this.values.push(props.itemList[i])
        }
    }

    state = {selected:this.props.defaultOption}

    keys=[]; // dorm, book, cook

    values=[]; // ...خوابگاه

    renderRowFunc = (option,index,isSelected)=>{

        return <View style={s.item_con}>
            <Text style={{color:'#e86f00',fontSize:16, fontFamily:'amp_sans'}}>{option}</Text>
        </View>
    }

    onSelectFunc = (index, value)=>{

        if(this.props.onSelect != undefined){

            this.props.onSelect(this.keys[index]);
        }

        let newState = Object.assign({}, this.state);

        newState.selected = this.values[index];

        this.setState(newState);
    }

    render(){
    
        return(
            <ModalDropdown style={[s.container, this.props.containerStyle]} options={this.values}
                renderRow={this.renderRowFunc} onSelect={this.onSelectFunc}>
                
                <View style={{height:'100%', width:'100%', paddingRight:'8%', alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>

                    <MyText text={this.state.selected} containerStyle={{width:'80%'}}
                    style={{textAlignVertical:'center'}}/>
                    
                    <View style={{height:'20%', width:'10%'}}>
                        <Image source={require('../assets/icons/down.png')} style={{flex:1, height:null, width:null, resizeMode:'contain', tintColor:'#e86f00'}}/>
                    </View>
                </View>
            
            </ModalDropdown>
        )
    }
}

const s = StyleSheet.create({

    container:{
        height:H/12,
        width: W/1.5,
        borderColor:'#e86f00',
        borderWidth:2,
        borderRadius:10,
        alignSelf:'center',
        justifyContent:'center',
    },

    item_con:{
        height: H/18, 
        width:W/1.8,
        justifyContent:'center',
        alignItems:'center',
    }
})