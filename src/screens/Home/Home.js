import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icons from 'react-native-vector-icons/Feather';
import Sanitize from './../../../assets/images/sanitize.png';
import SocialDistance from './../../../assets/images/social_distance.png';
import EatGreen from './../../../assets/images/eat_green.png';
import Germs from './../../../assets/images/app_logo.png';
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bottomNavIndex: 0,
      activeIndex: 0,
      data: [
        {
          title: 'Stay Safe!',
          description: 'Everyone stay safe and stay home to protect yourself!',
          image: Germs,
        },
        {
          title: 'Stay Clean!',
          description:
            'Sanitize your hands with hand sanitizers to fight Covid-19!',
          image: Sanitize,
        },
        {
          title: 'Social Spacing!',
          description: 'Maintain social distancing and avoid travels!',
          image: SocialDistance,
        },
        {
          title: 'Eat Healthy!',
          description: 'Eat healthy green veggies to stay fit and immune!',
          image: EatGreen,
        },
      ],
    };
    this.renderCardItems = this.renderCardItems.bind(this);
  }

  renderCardItems = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          paddingRight: 40,
          margin: 10,
          elevation: 10,
          borderRadius: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View>
            <Text
              style={{
                marginTop: -40,
                fontFamily: 'BubblegumSans-Regular',
                fontSize: 22,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                width: 150,
                fontSize: 16,
                color: '#5C5B5B',
              }}>
              {item.description}
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              width: 100,
              height: 130,
            }}>
            <Image
              style={{
                flex: 1,
                maxWidth: '125%',
              }}
              source={item.image}></Image>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#D6D6D6',
        }}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <View style={styles.infoIcon}>
          <TouchableOpacity onPress={() => console.log('button pressed')}>
            <Icons name="info" size={30} color="#5C5B5B" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.data}
            sliderWidth={350}
            itemWidth={350}
            renderItem={this.renderCardItems}
            onSnapToItem={(index) => this.setState({activeIndex: index})}
          />
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
    marginBottom: 0
  },
  infoIcon: {
    marginLeft: WIDTH - 50,
    top: -35,
  },
});
