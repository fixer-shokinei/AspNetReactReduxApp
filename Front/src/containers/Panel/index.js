import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from '../../containers/Navigation';
import Accounts from '../../containers/Accounts';
class Panel extends Component {
   render() {
         return (
            <Fragment>
               <Route path="/" component={Navigation} />
               <Switch>
                  <Route path="/panel/singletransfer" component={Accounts} />
               </Switch>
            </Fragment>
         );
   }
}

export default connect(null, null)(Panel);
