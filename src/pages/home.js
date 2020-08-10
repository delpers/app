import React from "react";
import { Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import * as firebase from 'firebase';
import { Video } from 'expo-av';

const image = { uri: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/74/Logo_lacoste.svg/1280px-Logo_lacoste.svg.png" };

export default function Home() {
  return (
    <>
      <Text style={styles.titleText}>name or logo      <ImageBackground source={image} style={styles.image}></ImageBackground>
 </Text>
      <Text style={styles.productTitle}> Shose protect </Text>

      <Text style={styles.productPrice}> 9.99 € </Text>


      <Video style={{border: 8, fontFamily: 'Lato', }}
  source={{ uri: 'https://res.cloudinary.com/kiloka/video/upload/v1597052812/dataMovies/bottle.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 450, height: 800 }}


  
/>


      <TouchableOpacity
        onPress={async () => { firebase.auth().signOut() }}
        style={{ marginTop: 18, borderColor: "black", borderWidth: 1 }}
      >
        <Text>Log out</Text>
      </TouchableOpacity>
    </>
  );
}


const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    paddingTop: 50,
    textAlign: 'center'
  },
  productTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'normal',
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    paddingTop: 100,
    textAlign: 'center'
  },
  productPrice: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    paddingTop: 150,
    textAlign: 'center'
  },
  image: {
    flex: 1,
    zIndex: 5,
    height: 60,
    bottom: 0,
    width: 100,
    margin: 32,
    position: 'absolute',
    resizeMode: "contain",
    justifyContent: "center"
  },
});