import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#D6D6D6',
        }}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <View style={styles.infoIcon} >
          <TouchableOpacity onPress={() => console.log('button pressed')}>
            <Icons name="info" size={30} color="#5C5B5B" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: 'AlfaSlabOne-Regular',
    fontSize: 25,
    margin: 20,
  },
  infoIcon: {
    marginLeft: WIDTH - 50,
    top: - 55
  },
});
