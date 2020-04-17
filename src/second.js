import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
const logo = require('../asset/AppLogo-transparent.png');
const play = require('../asset/play-icon-transparent.png');
const English = require('../asset/Covid-19-Practices-English.json');
const Spanish = require('../asset/Covid-19-Practices-Spanish.json');
export default class SecondScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  openVideo = (path, thumbnail_path) => {
    this.props.navigation.navigate('Video', {path, thumbnail_path});
  };

  renderEachItem = (index, each) => {
    return (
      <TouchableOpacity
        onPress={() => this.openVideo(each.path, each.thumbnail_path)}
        style={styles.eachContainer}
        key={index}>
        <Image source={play} style={styles.playImage} />
        <Text style={styles.rightText}>{each.display_name}</Text>
      </TouchableOpacity>
    );
  };

  renderItem = (index, data) => {
    return (
      <View style={styles.mainContainer} key={index}>
        <Text style={styles.subHeader}>{index + '. ' + data.name}</Text>
        {data.target &&
          data.target.length &&
          data.target.map((each, eachIndex) => {
            return this.renderEachItem(eachIndex, each);
          })}
      </View>
    );
  };

  render() {
    const {selected} = this.state;
    const data = selected === 0 ? English : Spanish;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={logo} style={styles.image} />
          <Text style={styles.headerText}>COVID-19</Text>
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
        <ScrollView>
          {data &&
            data.Corona19MediaDetails.length &&
            data.Corona19MediaDetails.map((each, index) => {
              return this.renderItem(index + 1, data[each.target][0]);
            })}
          <Text style={styles.otherApps}>Other Useful Apps</Text>
        </ScrollView>
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  normalText: {
    fontWeight: '100',
    fontSize: 14,
  },
  headerText: {
    fontSize: 18,
  },
  mainContainer: {
    marginTop: 10,
  },
  subHeader: {
    color: 'white',
    backgroundColor: '#fea400',
    padding: 3,
  },
  eachContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 10,
    marginBottom: 3,
    paddingHorizontal: 5,
    elevation: 1,
    shadowColor: '#000',
  },
  playImage: {
    width: 25,
    height: 25,
  },
  rightText: {
    marginLeft: 5,
  },
  otherApps: {
    color: 'white',
    backgroundColor: '#878787',
    paddingVertical: 3,
    marginTop: 10,
  },
});
