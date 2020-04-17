import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';

export default class VideoComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.route.params.path);
    this.state = {
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      paused: false,
    };
  }

  onLoad = (data) => {
    console.log(data);
    this.setState({duration: data.duration});
  };

  onProgress = (data) => {
    console.log(data);
    this.setState({currentTime: data.currentTime});
  };

  onEnd = () => {
    this.setState({paused: true});
    this.video.seek(0);
  };

  onAudioBecomingNoisy = () => {
    this.setState({paused: true});
  };

  onAudioFocusChanged = (event) => {
    this.setState({paused: !event.hasAudioFocus});
  };

  onError = (err) => {
    console.log(err);
  };

  render() {
    const path = this.props.route.params.path;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fullScreen}
          onPress={() => this.setState({paused: !this.state.paused})}>
          <Video
            ref={(ref) => {
              this.video = ref;
            }}
            source={{
              uri: path,
            }}
            style={styles.backgroundVideo}
            rate={this.state.rate}
            paused={this.state.paused}
            controls={true}
            volume={this.state.volume}
            muted={this.state.muted}
            fullscreen={true}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onError={this.onError}
            onEnd={this.onEnd}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            onAudioFocusChanged={this.onAudioFocusChanged}
            repeat={false}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
});
