/**
 * Recipe Tabs Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// The component we're mapping to
import RecipeTabsRender from './BrowseView';

// What data from the store shall we send to the component?
const mapStateToProps = ({ recipe: { recipes = [], meals = [] } }) => ({
  meals,
  recipes
});

// Any actions to map to the component?
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeTabsRender);
