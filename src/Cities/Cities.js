import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
    } from "react-native";

import { colors } from '../theme';

class Cities extends Component{

    static navigationOptions = {
        title : "Cities",
        headerTitleStyle : {
            color:'#fff',
            fontSize : 20,
            fontWeight : '400',
            alignSelf : 'center',
            textAlign:'center',
            width:'90%'
        },
    
    }

    viewCity = (city) => {
        this.props.navigation.navigate('City',{city});
    }

    render(){ 
        console.log(this.props);
        return (
            <ScrollView>
                <View style={styles.container}>
                    {
                        this.props.screenProps.cities.map((city,index) => (
                            <View>
                                <TouchableWithoutFeedback
                                onPress = {() => this.viewCity(city)}
                                >

                                <View style={styles.cityContainer}>
                                    <Text style={styles.city}>{city.city}</Text>
                                    <Text style={styles.country}>{city.country}</Text>
                                </View>

                                </TouchableWithoutFeedback>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        );
    }
}
export default Cities;

const styles = StyleSheet.create({
    cityContainer : {
        padding : 10,
        borderBottomWidth : 2,
        borderBottomColor :colors.primary
    },
    city:{
        fontSize: 17,

    },
    country:{
        color:'rgba(0,0,0,0.5)'
    }
});