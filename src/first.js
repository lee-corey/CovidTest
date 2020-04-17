import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const English = require('../asset/Covid-19-Home-Page-AV-English.json');
const Spanish = require('../asset/Covid-19-Home-Page-AV-Spanish.json');
const logo = require('../asset/AppLogo-transparent.png');
const play = require('../asset/play-icon-transparent.png');
export default class FirstScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  openVideo = () => {
    const {selected} = this.state;
    const data = selected === 0 ? English : Spanish;
    const path = data['Home-album'][0].target[0].path;
    this.props.navigation.navigate('Video', {path, thumbnail_path: ''});
  };

  onPractise = () => {
    this.props.navigation.navigate('Second');
  };

  render() {
    const {selected} = this.state;
    const data = selected === 0 ? English : Spanish;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topHeader}>
          <View style={styles.leftTopHeader}>
            <Image source={logo} style={styles.image} />
            <View style={styles.covidContainer}>
              <Text style={styles.covidText}>COVID - 19</Text>
              <Text style={styles.messageText}>Message for Users</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.setState({selected: 0})}>
              <Text
                style={selected === 0 ? styles.boldText : styles.normalText}>
                English
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({selected: 1})}>
              <Text
                style={selected === 1 ? styles.boldText : styles.normalText}>
                Spanish
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.descriptionText}>
            <Text style={styles.boldText}>{data['Home-album'][0].company}</Text>
            {data['Home-album'][0].album_description}
          </Text>
          <View>
            <TouchableOpacity
              onPress={() => this.openVideo()}
              style={styles.linearButton}>
              <LinearGradient
                colors={['#f16802', '#fea001']}
                style={styles.linearGradient}>
                <Image source={play} style={styles.playIcon} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.secondDescriptionContainer}>
            <Text>{data['Home-album'][0].target[0].description}</Text>
            <View style={styles.viewmoreContainer}>
              <Text numberOfLines={1}>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - -
              </Text>
              <Text style={styles.viewmoreText}>View more</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.onPractise()}
            style={styles.practiseContainer}>
            <Text style={styles.practiseText}>Practise</Text>
            <Text style={styles.practiseText}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#cfcfcf',
  },
  image: {
    width: 100,
    height: 100,
  },
  descriptionText: {
    padding: 5,
    fontStyle: 'italic',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftTopHeader: {
    flexDirection: 'row',
  },
  covidContainer: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    borderLeftColor: 'black',
    borderLeftWidth: 3,
  },
  covidText: {
    fontSize: 20,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  normalText: {
    fontWeight: '100',
    fontSize: 14,
  },
  playIcon: {
    width: 50,
    height: 50,
  },
  linearGradient: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  linearButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondDescriptionContainer: {
    backgroundColor: 'white',
    paddingVertical: 5,
    marginTop: 10,
    margin: 5,
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'black',
    borderWidth: 1,
    shadowColor: '#000',
    elevation: 5,
  },
  viewmoreContainer: {
    margin: 5,
  },
  viewmoreText: {
    color: '#0369b0',
  },
  practiseContainer: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    paddingVertical: 10,
    marginHorizontal: 5,
    marginTop: 30,
    shadowColor: '#000',
    elevation: 5,
  },
  practiseText: {
    fontSize: 18,
  },
});
