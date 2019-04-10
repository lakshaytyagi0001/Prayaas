import React from 'react';
import {StyleSheet, ScrollView,View, Text,Image,TouchableOpacity, Button} from 'react-native';
import * as firebase from 'firebase';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
    
      <ScrollView style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar7.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>User</Text>
              <Text style={styles.info}>Mobile Application Developer</Text>
              <Text style={styles.description}>An Individual full of gusto with Industry Level competence to analyze and rectify the common Irritation faced by People across The globe through technological solution </Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>More</Text>  
              </TouchableOpacity>              
              <TouchableOpacity onPress={this.onSignoutPress} 
                style={styles.buttonContainer}>
                <Text>Sign Out</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
