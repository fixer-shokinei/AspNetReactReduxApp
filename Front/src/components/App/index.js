import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../../hoc/Layout';

import './app.scss';
import Panel from '../../containers/Panel';

class App extends Component {
   render() {
      return (
         <Layout>
            <Switch>
               <Route path="/" component={Panel} />
            </Switch>
         </Layout>
      );
   }
}

export default withRouter(connect(null, null)(App));
