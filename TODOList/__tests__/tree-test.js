import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import MainScreen from "../Components/MainScreen";

import {Provider} from "react-redux";
import configureStore from "../src/store";

const store = configureStore();


it('renders correctly', () => {
    const homedata = renderer.create(
        <Provider store={store}>
        <App/>
      </Provider>
    ).toJSON();
    expect(homedata).toMatchSnapshot();
  });