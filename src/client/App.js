import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = { data: null };

  componentDidMount() {
    fetch('https://alpha-cc-api.azurewebsites.net/api/values')
      .then(res => res.json())
      .then(data => this.setState({ data: data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <img src={ReactImage} alt="react" />
        {data.map(d => <h1>d</h1>)}
      </div>
    );
  }
}
