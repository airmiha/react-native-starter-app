/**
 * Favourite
 */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

/* Component ==================================================================== */
const Favorite = ({ isFavorite, onPress }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <Icon name="star-border" color={isFavorite ? 'yellow' : '#FFFFFF'} />
  </TouchableOpacity>
);

const { bool, func } = PropTypes;

Favorite.propTypes = { isFavorite: bool.isRequired, onPress: func.isRequired };

export default Favorite;
