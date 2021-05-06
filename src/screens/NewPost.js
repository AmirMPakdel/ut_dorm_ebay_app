import React from 'react';
import {View,Dimensions, StyleSheet, ScrollView} from 'react-native';
import MyTextInput from '../components/MyTextInput';
import AddImage from '../components/AddImage';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import {SendNewPost} from '../server/Post_com';
import IconButton from '../components/IconButton';
import {connect} from 'react-redux';
import MyDropdown from '../components/MyDropdown';
import TopNavigationBar from '../components/TopNavigationBar';
import MyText from '../components/MyText';


const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;


const post = {
    category:'book',
    title:'',
    info:'',
    price:0,
    com_type:'phone',
    com_id:'',
}

class NewPost extends React.Component{

    state={com_id_placeholder:"09*****5086"}

    constructor(props){

        super(props);
    }

    _submit=()=>{

        SendNewPost(post, this.props.pics, ()=>{

            this.props.refreshHome();
            this.props.refreshMyPosts();
            this.props.navigation.navigate('MyPosts');
        });
    }

    _onTextChange(field, text){
        post[field] = text;
    }

    _onComTypeChange(type){

        let newState = Object.assign({},this.state);

        switch(type){
            case"phone":
                newState.com_id_placeholder="09*****5086";
            break;
            case"telegram":
                newState.com_id_placeholder="@myTelegramId";
            break;
            case"instagram":
                newState.com_id_placeholder="my_Instagram_id";
            break;
        }

        this.setState(newState);

    }

    render(){

        return(
            <ScrollView style={s.container}>

                <View style={s.TopNavigationBar_con}>
                    <TopNavigationBar title="آگهی جدید"
                        navigation={this.props.navigation} goTo="MyPosts"/>
                </View>

                <MyText text="نوع کالا" style={{fontSize:20, color:'#823e00'}} containerStyle={{marginTop:H/50, height:H/20, width:W/1.3, alignSelf:'center'}}/>
                
                <MyDropdown itemList={{book:'کتاب', cooking:'لوازم آشپزی', dorm:'وسایل خوابگاه'}}
                    onSelect={(value)=>{post.category = value}} containerStyle={s.category}
                    defaultOption="کتاب"/>

                <MyText text="نام کالا" style={{fontSize:20, color:'#823e00'}} containerStyle={{marginTop:H/20, height:H/20, width:W/1.3, alignSelf:'center'}}/>

                <View style={s.product_name}>
                    <MyTextInput placeholder="نمومه : ریاضی آدامز جلد2" onChangeText={(text)=>{this._onTextChange('title', text)}}></MyTextInput>
                </View>

                <MyText text="توضیحات کالا" style={{fontSize:20, color:'#823e00'}} containerStyle={{marginTop:H/20, height:H/20, width:W/1.3, alignSelf:'center'}}/>

                <View style={s.info}>
                    <MyTextInput placeholder="نمونه : کتاب ریاضی آدامز چاپ سال 96 بدون خط خوردگی و ..." onChangeText={(text)=>{this._onTextChange('info', text)}}
                    style={{textAlign:'right',textAlignVertical:'top', padding:12}} multiline={true}></MyTextInput>
                </View>
                
                <MyText text="قیمت کالا" style={{fontSize:20, color:'#823e00'}} containerStyle={{marginTop:H/20, height:H/20, width:W/1.3, alignSelf:'center'}}/>

                <View style={s.price}>
                    <MyTextInput placeholder="به تومان" onChangeText={(text)=>{this._onTextChange('price', text)}}></MyTextInput>
                </View>

                <MyText text="راه اتباطی" style={{fontSize:20, color:'#823e00'}} containerStyle={{marginTop:H/20, height:H/20, width:W/1.3, alignSelf:'center'}}/>

                <MyDropdown itemList={{phone:'شماره موبایل', telegram:'آیدی تلگرام', instagram:'آیدی اینستاگرام'}}
                    onSelect={(value)=>{post.com_type = value; this._onComTypeChange(value)}} containerStyle={s.category}
                    defaultOption="شماره موبایل"/>


                <View style={s.com_id}>
                    <MyTextInput placeholder={this.state.com_id_placeholder} onChangeText={(text)=>{this._onTextChange('com_id', text)}}/>
                </View>
                

                <MyText text="عکس های کالا" style={{fontSize:20, color:'#823e00'}} containerStyle={{marginTop:H/20, height:H/20, width:W/1.3, alignSelf:'center'}}/>

                <View style={s.images_con}>
                    <View style={s.image}>
                        <AddImage turn={this.props.pics.turn}
                        picNumber={1} uri={this.props.pics[1].uri}/>
                    </View>

                    <View style={s.image}>
                        <AddImage turn={this.props.pics.turn}
                        picNumber={2} uri={this.props.pics[2].uri}/>
                    </View>

                    <View style={s.image}>
                        <AddImage turn={this.props.pics.turn}
                        picNumber={3} uri={this.props.pics[3].uri}/>
                    </View>
                </View>

                <View style={s.submit_btn}>
                    <IconButton src={require('../assets/icons/checked.png')} onPress={this._submit}/>
                </View>
                    
            </ScrollView>
        )
    }
}

function mapStateToProps(state){
    return{
        pics:state.changePics.pics,
        refreshHome:state.refresh.home,
        refreshMyPosts:state.refresh.myPosts
    }
}

export default connect(mapStateToProps, null)(NewPost);


const s = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#ffe',
        paddingTop:H/90,
    },

    TopNavigationBar_con:{

        height: H*0.1,
        width:'100%',
        backgroundColor:"#e86f00",
        opacity:0.95,
        marginBottom:H *0.02,
        elevation:5,
    },

    category:{

        height:H/10,
        width:'80%',
        marginTop:H/80,
        alignSelf:'center',
    },

    product_name:{

        height:H/10,
        width:'80%',
        marginTop:H/80,
        alignSelf:'center',
    },

    info:{

        height:H/2,
        width:'80%',
        marginTop:H/80,
        alignSelf:'center',
    },

    price:{

        height:H/10,
        width:'80%',
        marginTop:H/80,
        alignSelf:'center',
    },

    comunication_con:{

        height:H/10,
        width:'80%',
        flexDirection:'row',
        marginTop:H/80,
        justifyContent:'space-between',
        alignSelf:'center',
    },

    com_type:{

        height:H/10,
        width:'80%',
        marginTop:H/80,
        alignSelf:'center',
    },

    com_id:{
        height:H/10,
        width:'80%',
        marginTop:H/80,
        alignSelf:'center',
    },

    images_con:{

        height:H/4,
        width:'80%',
        flexDirection:'row',
        marginTop:H/80,
        justifyContent:'space-between',
        alignSelf:'center',
        alignItems:'center',
    },

    image:{
        height:'90%',
        width:'30%',
    },

    submit_btn:{
        height:H/10,
        width:'60%',
        marginTop:H/20,
        marginBottom:H/20,
        alignSelf:'center',
    }
})