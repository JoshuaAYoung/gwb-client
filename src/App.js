import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import styles from './app.module';

export default class App extends Component {
  render() {
    return <h2 className={styles.red}>This is our React application!</h2>;
  }
}
