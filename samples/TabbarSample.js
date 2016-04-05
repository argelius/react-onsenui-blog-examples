import React from 'react';
import {Tabbar, Tab, Page, Toolbar} from 'react-onsenui';

class TabPage extends React.Component {
  render() {
    return (
      <Page>
        <Toolbar>
          <div className="center">{this.props.title}</div>
        </Toolbar>

        <p style={{padding: '0 15px'}}>
          This is the <strong>{this.props.title}</strong> page!
        </p>
      </Page>
    );
  }
}

export default class extends React.Component {
  renderTabs() {
    const sections = [
      'Home',
      'Comments',
      'Settings'
    ];

    return sections.map((section) => {
      return {
        content: <TabPage key={section} title={section} />,
        tab: <Tab key={section} label={section} />
      };
    });
  }

  render() {
    return (
      <Tabbar
        initialIndex={1}
        renderTabs={this.renderTabs}
      />
    );
  }
}
