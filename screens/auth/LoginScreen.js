import React from 'react';
import {StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
    Alert} 
    from 'react-native';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
      };
    
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    onLoginPress = () => {

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => { }, (error) => {
            Alert.alert(error.message);

        });
    }

    onCreateAccountPress = () => {
        
          this.props.navigation.navigate('Signup');
    }


    render() {
        return(

            <View style={styles.container}>
        <Image style={styles.bgImage} source={{ uri: "https://www.desktop-background.com/download/540x960/2015/11/15/1042629_abstract-painting-nature-mobile-wallpapers-wallpapers-z_1920x1080_h.jpg" }}/>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              autoCapitalize='none'
              autoCorrect={false}
              value={this.state.email}
            onChangeText={(text) => { this.setState({email: text}) }}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize='none'
              autoCorrect={false}
              underlineColorAndroid='transparent'
              value={this.state.password}
            onChangeText={(text) => { this.setState({password: text}) }}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.onLoginPress}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonContainer} onPress={this.onCreateAccountPress}>
            <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
        );
    }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:300,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
  
      shadowColor: "#808080",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginRight:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:300,
      borderRadius:30,
      backgroundColor:'transparent'
    },
    loginButton: {
      backgroundColor: "#00b5ec",
  
      shadowColor: "#808080",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,
  
      elevation: 19,
    },
    loginText: {
      color: 'white',
    },
    bgImage:{
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
    btnText:{
      color:"white",
      fontWeight:'bold'
    }
  });