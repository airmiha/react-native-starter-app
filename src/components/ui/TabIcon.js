/**
 * Tabbar Icon
 *
    <TabIcon icon={'search'} selected={false} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { AppColors } from '@theme/';

/* Component ==================================================================== */
const TabIcon = ({ icon, selected, type, title }) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center'
    }}
  >
    <Icon
      type={type}
      name={icon}
      size={26}
      color={
        selected ? AppColors.tabbar.iconSelected : AppColors.tabbar.iconDefault
      }
    />
    <Text style={{ color: AppColors.tabbar.iconDefault, fontSize: 12 }}>
      {title}
    </Text>
  </View>
);

TabIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  title: PropTypes.string.isRequired,
  type: PropTypes.string
};
TabIcon.defaultProps = { icon: 'search', selected: false, type: null };

/* Export Component ==================================================================== */
export default TabIcon;
