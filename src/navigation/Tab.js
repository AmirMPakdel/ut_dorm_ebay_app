import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

export default class Tab extends React.Component {

    render() {

        return (
            <TouchableWithoutFeedback onPress={()=>{this.props.tabSelected(this.props.name)}}>
                <View style={styles.container}>
                    <View style={styles.icon_container}>
                        <Image
                            source={this.props.src}
                            style={styles.icon}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        zIndex: 1,
        backgroundColor: '#ffe'
    },

    line: {
        height: '6%',
        width: '100%',
        backgroundColor: '#F9C25B',
        opacity: 0
    },

    icon_container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 6,
        paddingBottom: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        height: '100%',
        width: '100%',
        shadowOffset: { height: 10, width: 10 },
        shadowColor: '#F8BC4D',
        resizeMode: 'center'
    }
});
