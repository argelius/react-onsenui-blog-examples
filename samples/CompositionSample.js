import React from 'react';
import {Navigator, Tabbar, Tab, Page, Button, Toolbar, BackButton} from 'react-onsenui';

class TabPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({
      component: SecondPage
    });
  }

  render() {
    return (
      <Page>
        <Toolbar>
          <div className="center">{this.props.title}</div>
        </Toolbar>

        <p style={{textAlign: 'center'}}>
          <Button onClick={this.pushPage.bind(this)}>Push page</Button>
        </p>
      </Page>
    );
  }
}

class MainPage extends React.Component {
  renderTabs() {
    const sections = [
      'Home',
      'Comments',
      'Settings'
    ];

    return sections.map((section) => {
      return {
        content: <TabPage key={section} title={section} navigator={this.props.navigator} />,
        tab: <Tab key={section} label={section} />
      };
    });
  }

  render() {
    return (
      <Page>
        <Tabbar
          initialIndex={0}
          renderTabs={this.renderTabs.bind(this)}
        />
      </Page>
    );
  }
}

class SecondPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: SecondPage});
  }

  popPage() {
    this.props.navigator.popPage();
  }

  render() {
    return (
      <Page>
        <Toolbar>
          <div className="left"><BackButton>Back</BackButton></div>
          <div className="center">Another page</div>
        </Toolbar>

        <p style={{textAlign: 'center'}}>
          <Button onClick={this.pushPage.bind(this)}>Push page</Button>
          <Button onClick={this.popPage.bind(this)}>Pop page</Button>
        </p>
      </Page>
    );
  }
}

export default class extends React.Component {
  renderScene(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{component: MainPage, props: {key: 'main'}}}
        renderScene={this.renderScene}
      />
    );
  }
}
