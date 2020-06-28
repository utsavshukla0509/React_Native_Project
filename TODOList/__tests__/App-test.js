/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import {Provider} from "react-redux";
import configureStore from "../src/store";
import MainScreen from '../Components/MainScreen';

const store = configureStore();

it('renders correctly', () => {
  let homedata = renderer.create(
    <Provider store={store}>
        <MainScreen/>
      </Provider>,
  ).toJSON();
  expect(homedata).toMatchSnapshot();
});
