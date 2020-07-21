import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import image from './../../../assets/images/app_logo.png';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount = () => {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Home'}],
        }),
      );
      this.props.navigation.navigate('Home');
      this.setState({
        isLoading: false,
      });
    }, 2000);
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: '#D6D6D6',
          flex: 1,
        }}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <Text style={styles.appText}>Corona Stats</Text>
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#959595"
          style={{
            marginTop: 10,
          }}
        />
        <View style={styles.bottomTextContainer}>
          <Text>© 2020 Corona Stats</Text>
          <Text style={styles.devText}>App by Ananth</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: HEIGHT / 4,
  },
  image: {
    flex: 1,
    maxWidth: '100%',
  },
  appText: {
    fontFamily: 'CarterOne-Regular',
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 40,
  },
  bottomTextContainer: {
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  devText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
