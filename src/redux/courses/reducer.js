/**
 * Recipe Reducer
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import Store from './store';

// Set initial state
export const initialState = Store;

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
