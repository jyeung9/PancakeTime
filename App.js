//the react-navigation folder is different in the newest version therefore creating a disconnect 
// problem was solved using local folders on snack but unable to change using react-native 
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Route,
  TextInput,
  Component,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Constants from 'expo-constants';


class HomePage extends React.Component {
  static navigationOptions = {
    title: "It's Pancake Time!",
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.spacing} />
        <Text style={styles.title}>Where do you want to eat?</Text>
        <Text style={styles.spacing} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Dewickmenu')}>
          <Text style={styles.buttontext}>Dewick</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Carmmenu')}>
          <Text style={styles.buttontext}>Carm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Both')}>
          <Text style={styles.buttontext}>Either</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


export class Dewick extends React.Component {
  static navigationOptions = {
    headerTitle: 'Dewick',
  };
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.spacing} />
        <Text style={styles.title}>Search for your favorites!</Text>
        <Text style={styles.spacing} />
        <TextInput
          style={styles.textbox}
          placeholder="Type here to search!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
    </View>
    );
  }
}

export class Carm extends React.Component {
  static navigationOptions = {
    title: "Carmichael"
  };
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
    render(){
    return(
    <View style={styles.container}>
    <Text style={styles.spacing} />
    <Text style={styles.title}>Search for your favorites!</Text>
    <Text style={styles.spacing} />
    <TextInput
          style={styles.textbox}
          placeholder="Type here to search!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
    </View>
    );
  }
}

export class Either extends React.Component {
  static navigationOptions = {
    title: "Either"
  };
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
    render(){
    return(
    <View style={styles.container}>
    <Text style={styles.spacing} />
    <Text style={styles.title}>Search for your favorites!</Text>
    <Text style={styles.spacing} />
    <TextInput
          style={styles.textbox}
          placeholder="Type here to search!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0e0e6',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },

  spacing: {
    padding: 50,
  },

  title: {
    alignSelf: 'center',
    fontSize: 25,
    fontFamily: 'sans serif',
    fontStyle: 'bold',
  },

  textbox: {
    height: 40,
    borderWidth: 1,
    borderRadius: 25,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#1e90ff',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttontext: {
    fontSize: 20,
    color: 'white',
  },
});

const MainNavigator = createStackNavigator({
  Home: {screen: HomePage},
  Dewickmenu: {screen: Dewick},
  Carmmenu: {screen: Carm},
  Both: {screen: Either},
});

const App = createAppContainer(MainNavigator);

export default App;
// React native updating navigation: https://github.com/react-native-elements/react-native-elements-app/issues/72
