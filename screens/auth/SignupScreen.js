import React from 'react';
import { StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
    Alert} from 'react-native';
import * as firebase from 'firebase';

export default class SignupScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConfirm: "",

        };
    }

    onSignupPress = () => {
        if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert("Password Do Not Match");
            return;
        }


        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => { }, (error) => {
            Alert.alert(error.message);
        });
    }

    onBackToLoginPress = () => {
        
        this.props.navigation.navigate('Login');
    }

    render() {
        return(
            <View style={styles.container}>
        <Image style={styles.bgImage} source={{ uri: "http://hdwallpapersrocks.com/wp-content/uploads/2018/01/Green-nature-tree-road-mobile-background-images.jpg" }}/>
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
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Confirm Password"
              secureTextEntry={true}
              autoCapitalize='none'
              autoCorrect={false}
              underlineColorAndroid='transparent'
              value={this.state.passwordConfirm}
            onChangeText={(text) => { this.setState({passwordConfirm: text}) }}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.onSignupPress}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonContainer} onPress={this.onBackToLoginPress}>
            <Text style={styles.btnText}>Back To Login</Text>
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