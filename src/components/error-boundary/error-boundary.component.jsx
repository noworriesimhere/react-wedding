import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hadErrored: false,
    };
  }
  static getDerivedStateFromError(error) {
    //catches any error in children
    //process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div style={{ width: '100%', fontSize: '5rem', textAlign: 'center' }}>
          <h1>Whoops!</h1>
          <p>Something went wrong 😬</p>
          <p>Maybe try refreshing the page?</p>
        </div>
      );
    }

    return this.props.children;
  }
}
