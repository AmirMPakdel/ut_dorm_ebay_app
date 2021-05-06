import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Tab from './Tab';

export default class TabBar extends React.Component {

    select = (name) => {
        
        this.props.navigation.navigate(name);
    };

    render() {
        return (
            <View style={styles.container}>
                <Tab
                    src={require('../assets/icons/push_pin.png')}
                    name="MyPosts"
                    tabSelected={this.select}
                />

                <Tab
                    src={require('../assets/icons/home.png')}
                    name="Home"
                    tabSelected={this.select}
                />

                <Tab
                    src={require('../assets/icons/user.png')}
                    name="ProfileSettings"
                    tabSelected={this.select}
                />
            </View>
        );
    }

    
}

const styles = StyleSheet.create({
    container: {
        height: '8%',
        width: '100%',
        paddingBottom:'2%',
        flexDirection: 'row',
        justifyContent:'space-around',
        backgroundColor: '#ffe'
    }
});
