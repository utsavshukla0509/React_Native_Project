import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

import {Provider} from "react-redux";
import configureStore from "../src/store";
import MainScreen from '../Components/MainScreen';
import Index from "../index";

const store = configureStore();


it('renders correctly', () => {
    const homedata = renderer.create(
        <Provider store={store}>
        <App/>
        </Provider>
    ).getInstance();
    // homedata.
    console.log(homedata);
    // expect(homedata.state.isedit).toEqual(true);
  });