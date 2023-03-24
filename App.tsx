import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Dental Care</Text>
      <Image style={styles.logo} source={require('./logo.png')} />
      <TextInput placeholder="UserName" style={styles.primaryInput} />
      <TextInput placeholder="Password" style={styles.primaryInput} />
      <View style={styles.options}>
        <Button
          // Some properties given to Button
          title="Login"
          color="#ff0000"
          onPress={() => Alert.alert('Welcome Back !')}
        />
        <Button
          // Some properties given to Button
          title="Sign-up"
          onPress={() => Alert.alert('Welcome! Happy to have you. ')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: '5%',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'black',
  },
  logo: {
    width: 125,
    height: 125,
    margin: 'auto',
    alignSelf: 'center',
    marginTop: '10%',
    marginBottom: '10%',
  },
  dummyText: {
    alignSelf: 'center',
    width: '70%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60,
    textAlign: 'center',
    lineHeight: 60,
  },
  primaryInput: {
    marginTop: '5%',
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    width: '70%',
    margin: 'auto',
    borderStyle: 'dotted',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  options: {
    marginTop: '10%',
    marginBottom: '10%',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: 20,
  },
  Button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    width: '48%',
    textAlign: 'center',
  },
});
