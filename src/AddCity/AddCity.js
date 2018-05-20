import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
    } from "react-native";

import uuidV4 from 'uuid/v4'; 
import { colors } from '../theme';

class AddCity extends Component{

    state = {
        city:'',
        country:''
    }

    onChangeText = (key,value) => {
        this.setState({
            [key] : value 
        })
    }

    submit = () => {
        if(this.state.city === '' || this.state.country === '') return;
        const city = {
            city : this.state.city,
            country : this.state.country,
            locations : [],
            id : uuidV4()
        }
        this.props.screenProps.addCity(city)
        this.setState({
            city:'',
            country:''
        },() => {
            this.props.navigation.navigate('Cities')
        })
    }

    render(){
        console.log(this.props);
        return (
            <View style={styles.container}>

                <Text style={styles.heading}>Travista</Text>
                

                <TextInput 
                placeholder = 'City Name' 
                onChangeText = {(val)=>this.onChangeText('city',val)}
                style = {styles.input}
                value = {this.state.city}
                />
                 <TextInput 
                placeholder = 'Country Name'
                onChangeText = {(val)=>this.onChangeText('country',val)}
                style = {styles.input}
                value = {this.state.country}
                />

                <TouchableOpacity onPress={this.submit}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add City</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}
export default AddCity;

const styles = StyleSheet.create({
    input : {
        backgroundColor : 'rgba(175,175,175,0.1)',
        margin:10,
        paddingHorizontal : 12,
        height : 50,
        color:'#fff',
    },
    button:{
        height : 50,
        backgroundColor:'#333',
        justifyContent:'center',
        alignItems:'center',
        margin:10
    },
    buttonText:{
        color:'#fff'
    },
    container : {
        backgroundColor : colors.primary,
        flex:1,
        justifyContent : 'center',
    },
    heading : {
        fontSize : 40,
        color:'#fff',
        textAlign:'center',
        margin : 10,
        fontFamily : 'billabong',
    }
});