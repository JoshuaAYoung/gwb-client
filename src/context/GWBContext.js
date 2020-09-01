import React, { Component } from 'react';

const GWBContext = React.createContext({});

export default GWBContext;

export class GWBProvider extends Component {
  state = {};
  render() {
    const value = {};
    return (
      <GWBContext.Provider value={value}>
        {this.props.children}
      </GWBContext.Provider>
    );
  }
}
