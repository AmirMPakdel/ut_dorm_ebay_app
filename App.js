import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navigation from './src/navigation/Navigation';
import {createUser, createPosts} from './src/data/Fake';
import {PostList} from './src/postUtil/PostList'
import {process} from './src/data/ImageUtil';

export default class App extends Component{
  
  componentDidMount(){
    //createUser(()=>{});
    //createPosts(10, false, ()=>{});

    //PostList((list)=>{})
  }
  
  render() {

    /*let list = ['https://res.cloudinary.com/demo/image/upload/h_200/family_bench.jpg',
                'https://res.cloudinary.com/demo/image/upload/h_200/family_bench.jpg',
                'https://res.cloudinary.com/demo/image/upload/h_200/family_bench.jpg']

    CreateImageListForPost(list, (list2)=>{

      alert('got'+typeof(list2[0]));
    })*/
    return (
      <View style={styles.container}>
        <Navigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
