import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AccountsList from '../../components/SingleTransfer/List';
import ListForSelect from '../../components/SingleTransfer/ListForSelect';
import SingleAccount from '../../components/SingleTransfer/Single';

const Accounts = ({ match }) => (
   <div className="row panel-content">
      <div className="col-xs-12">
         <Switch>
            <Route exact path={match.url} component={AccountsList} />
            <Route path="/panel/singletransfer/search" component={ListForSelect} />
            <Route path="/panel/singletransfer/detail/:branchCode" component={SingleAccount} />
         </Switch>
      </div>
   </div>
);

export default Accounts;
