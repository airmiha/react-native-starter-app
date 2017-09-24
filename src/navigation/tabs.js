/**
 * Tabs Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes } from '@theme/';

// Components
import { TabIcon } from '@ui/';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';

// Scenes
import Placeholder from '@components/general/Placeholder';
import Error from '@components/general/Error';
import StyleGuide from '@containers/StyleGuideView';
import Courses from '@containers/courses/Courses';
import Recipes from '@containers/recipes/Browse/BrowseContainer';
import RecipeView from '@containers/recipes/RecipeView';

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  renderLeftButton: () => <NavbarMenuButton />,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight
  }
};

/* Routes ==================================================================== */
const scenes = (
  <Scene
    key={'tabBar'}
    tabs
    tabBarIconContainerStyle={AppStyles.tabbar}
    pressOpacity={0.95}
  >
    <Scene
      {...navbarPropsTabs}
      component={Courses}
      key={'recipes'}
      title={'Courses'}
      icon={props =>
        TabIcon({
          ...props,
          icon: 'home',
          type: 'font-awesome',
          title: 'Home'
        })}
    />
    <Scene
      key={'timeline'}
      {...navbarPropsTabs}
      title={'Coming Soon'}
      component={Placeholder}
      icon={props =>
        TabIcon({
          ...props,
          icon: 'bullseye',
          type: 'material-community',
          title: 'On The Go'
        })}
      analyticsDesc={'Placeholder: Coming Soon'}
    />

    <Scene
      key={'error'}
      {...navbarPropsTabs}
      title={'Example Error'}
      component={Error}
      icon={props =>
        TabIcon({ ...props, icon: 'ios-person', type: 'ionicon', title: 'Me' })}
      analyticsDesc={'Error: Example Error'}
    />
    {false && (
      <Scene
        key={'styleGuide'}
        {...navbarPropsTabs}
        title={'Style Guide'}
        component={StyleGuide}
        icon={props => TabIcon({ ...props, icon: 'speaker-notes' })}
        analyticsDesc={'StyleGuide: Style Guide'}
      />
    )}
  </Scene>
);

export default scenes;
