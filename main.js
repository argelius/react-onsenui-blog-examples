import React from 'react';
import ReactDOM from 'react-dom';

import 'onsenui';

import NavigatorSample from './samples/NavigatorSample';
import TabbarSample from './samples/TabbarSample';
import CompositionSample from './samples/CompositionSample';

const sections = {
  navigator: NavigatorSample,
  tabbar: TabbarSample,
  composition: CompositionSample
};

for (let key in sections) {
  const el = document.getElementById(key);

  if (el) {
    ReactDOM.render(React.createElement(sections[key]), el);
  }
}
