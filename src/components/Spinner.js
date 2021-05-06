import React from 'react';
import {View, StyleSheet, Picker} from 'react-native';
import ModalDropdown  from 'react-native-modal-dropdown';



export default class Spinner extends React.Component{

    state={selected:''}

    constructor(props){
        super(props);

        let items = props.itemList;

        this.pickerItems =[];

        if(items){

            for(let i in items){
                
                this.pickerItems.push(<Picker.Item key={i} label={items[i]} value={i}/>)
            }
        }
    }

    render(){
    
        return(
            <View style={s.container}>

                <Picker
                    selectedValue={this.state.selected}
                    itemStyle={{fontFamily:'amp_sans'}}
                    
                    style={{ height: '100%', width: '100%', color:'#e86f00'}}
                    onValueChange={(value, index)=>{this.props.onValueChange(value); this.setState({selected:value})} }>
                    {this.pickerItems}
                </Picker>
            </View>
        )
    }
}



const s = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        borderWidth:2,
        borderRadius:10,
        borderColor:'#e86f00'
    }
})