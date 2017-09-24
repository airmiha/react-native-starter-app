/**
 * Courses Container
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  InteractionManager,
  TouchableOpacity
} from 'react-native';

import { Icon, Button } from 'react-native-elements';

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';

const { h1, h5, voffset2 } = AppStyles;
const { screen: { widthHalf } } = AppSizes;

const styles = StyleSheet.create({
  buttonPlay: {
    paddingHorizontal: 50
  },
  container: {
    height: 300,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentType: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  favourite: {
    position: 'absolute',
    top: 5,
    right: 5
  },
  overlayText: {
    color: '#ffffff',
    textAlign: 'center'
  },
  section: {
    height: 200,
    paddingHorizontal: 10
  },
  sectionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  seeAll: {
    flexDirection: 'row'
  },
  seeAllText: {
    color: 'grey'
  },
  tabContainer: {
    flex: 1
  },
  thumbnail: {
    height: widthHalf - 30,
    marginRight: 10,
    paddingHorizontal: 30,
    width: widthHalf - 30
  },
  thumbnailFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 5,
    left: 5,
    right: 5
  }
});

const { arrayOf, object } = PropTypes;

class Courses extends Component {
  static propTypes = {
    courses: arrayOf(object).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      visitedRoutes: []
    };
  }

  componentDidMount = () => {
    InteractionManager.runAfterInteractions(() => {});
  };

  onPressFavourite = () => {};

  onPressCourse = () => {};

  renderFavourite = course => {
    const { isFavourite } = course;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={this.onPressFavourite}
        style={[styles.favourite]}
      >
        <Icon
          name={'star-border'}
          color={isFavourite ? '#FDC12D' : '#FFFFFF'}
        />
      </TouchableOpacity>
    );
  };

  renderFeatured() {
    const { courses } = this.props;
    const { buttonPlay, overlayText } = styles;

    const featured = courses[0];

    const { duration, image, title, sessions } = featured;
    const caption = `${sessions.length} days - ${duration}m`;

    return (
      <Image source={image && { uri: image }} style={styles.container}>
        <Text style={[h1, overlayText]}>{title}</Text>
        <Text style={[overlayText]}>{caption}</Text>
        <Button
          backgroundColor="teal"
          buttonStyle={buttonPlay}
          icon={{ name: 'play-arrow' }}
          onPress={this.onPressCourse}
          rounded
          style={[buttonPlay, voffset2]}
          title="Day 3"
        />
        {this.renderFavourite(featured)}
      </Image>
    );
  }

  renderListItem = item => {
    const { duration, free, id, image, title, sessions } = item;
    const {
      container,
      contentType,
      overlayText,
      thumbnail,
      thumbnailFooter
    } = styles;

    return (
      <TouchableOpacity onPress={this.onPressCourse} key={id}>
        <Image source={image && { uri: image }} style={[container, thumbnail]}>
          <Text style={[h5, overlayText]}>{title}</Text>
          <View style={thumbnailFooter}>
            <Text style={[overlayText]}>{`${sessions.length}d`}</Text>
            <Text style={[overlayText]}>{`${duration}m`}</Text>
          </View>
          <View style={contentType}>
            {free ? null : (
              <Icon
                name="crown"
                reverse
                size={12}
                type="material-community"
                color="pink"
                raised
              />
            )}
          </View>
          {this.renderFavourite(item)}
        </Image>
      </TouchableOpacity>
    );
  };

  renderList = () => {
    const { courses } = this.props;

    return (
      <FlatList
        data={courses}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({ item }) => this.renderListItem(item)}
      />
    );
  };

  renderSectionHeader = title => {
    const { overlayText, sectionHeader, seeAll, seeAllText } = styles;

    return (
      <View style={sectionHeader}>
        <Text style={[h5, overlayText]}>{title}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={this.onSeeAll}>
          <View style={[seeAll]}>
            <Text style={[seeAllText]}>See all</Text>
            <Icon name="keyboard-arrow-right" color="grey" size={16} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  renderSection = (items, title) => {
    const { section } = styles;

    return (
      <View style={section}>
        {this.renderSectionHeader(title)}
        {this.renderList(items)}
      </View>
    );
  };

  renderRecent = () => {
    const { courses } = this.props;

    return this.renderSection(courses, 'Recent');
  };

  render = () => (
    <View style={styles.tabContainer}>
      {this.renderFeatured()}
      {this.renderRecent()}
    </View>
  );
}

// What data from the store shall we send to the component?
const mapStateToProps = ({ course: { courses = [] } }) => ({
  courses
});

// Any actions to map to the component?
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
