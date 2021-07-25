import React, { Component } from 'react';
import Layout from '../../Layout/layout';
import Home from '../Home/home';

export default class GettingStarted extends Component {
  render() {
    return (
       <Layout>
        <div className="content">
          <Home/>
        </div>
      </Layout>
    );
  }
}
